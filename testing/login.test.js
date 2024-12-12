const { login } = require('../server/src/controllers/auth');
const { Request, Response } = require('express');
const bcrypt = require('bcrypt');
const { StreamChat } = require('stream-chat');

jest.mock('getstream', () => ({
    connect: jest.fn(() => ({
        createUserToken: jest.fn(() => 'fake-token'),
    })),
}));

jest.mock('stream-chat', () => ({
    StreamChat: {
        getInstance: jest.fn(() => ({
            queryUsers: jest.fn(),
        })),
    },
}));

describe("User Login", () => {
    let req;
    let res;
    let clientMock;

    beforeEach(() => {
        req = {
            body: {
                username: "testuser",
                password: "password123",
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
        clientMock = StreamChat.getInstance();
    });

    it("should log in successfully and return a token", async () => {
        const mockUser = {
            id: "123",
            fullName: "Test User",
            name: "testuser",
            hashedPassword: await bcrypt.hash("password123", 10),
        };

        clientMock.queryUsers.mockResolvedValueOnce({ users: [mockUser] });
        await login(req, res);

        expect(clientMock.queryUsers).toHaveBeenCalledWith({ name: "testuser" });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            token: "fake-token",
            fullName: "Test User",
            username: "testuser",
            userId: "123",
        });
    });

    it("should return 400 if the user is not found", async () => {
        clientMock.queryUsers.mockResolvedValueOnce({ users: [] });

        await login(req, res);

        expect(clientMock.queryUsers).toHaveBeenCalledWith({ name: "testuser" });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
    });

    it("should return 500 for incorrect passwords", async () => {
        const mockUser = {
            id: "123",
            fullName: "Test User",
            name: "testuser",
            hashedPassword: await bcrypt.hash("wrongpassword", 10),
        };

        clientMock.queryUsers.mockResolvedValueOnce({ users: [mockUser] });
        jest.spyOn(bcrypt, "compare").mockResolvedValueOnce(false);

        await login(req, res);

        expect(clientMock.queryUsers).toHaveBeenCalledWith({ name: "testuser" });
        expect(bcrypt.compare).toHaveBeenCalledWith("password123", "wrongpassword");
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Incorrect password" });
    });

    it("should return 500 for server errors", async () => {
        clientMock.queryUsers.mockRejectedValueOnce(new Error("Database error"));

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: new Error("Database error") });
    });
});

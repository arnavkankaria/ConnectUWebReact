# UConnect
# Source Distribution
Welcome developers! Here you will find the instructions for getting started with UConnect. First, fork this repo to get your own copy of the source code. Our bugs are being tracked in the "issues" tab of this repository.
Since this project is entirely in JavaScript, you will need to download Node.js, and it should come with npm (Node Package Manager). Once Node is installed, navigate to this repository in the terminal and run the command “npm run start”. This will deploy the backend and the frontend on your local computer.
This project uses getstream.io API to handle the instant messaging architecture, which requires the developer to go to getstream.io on a browser, make an account, create a project on that account, and get the API key for the project. If you navigate to the file with the relative path client/src/App.jsx the line 13 is where this key is entered. It currently has our developer key but can be changed to your own key. Having your own getstream.io account will grant you greater admin control such as being able to see and edit all the list of users, their roles and permissions, all the channels and their members. You may also purchase one of their plans to expand the app to a larger user base since the API calls are limited at the moment.
Other details like Stream app ID, Stream API key, and Stream API Secret will also need to be edited. This information can be found on your getstream.io account, and will be entered in the .env file in the ./server folder.
The backend of this project facilitates user authentication and other important functions. It is currently already hosted on Heroku. If you wish to host it elsewhere, you can navigate to ./client/src/components/Auth.jsx and change the URL on line 33 to the URL of the server you wish to host it on. If you wish to host it locally, you can comment out line 33 and uncomment line 32, which will host the backend on your personal computer.
The build is made and uploaded to Netlify for deployment, but can be deployed on any other domain you wish. You will need to navigate to the main directory in a terminal the follow these instructions to produce a build to be deployed:
Build instructions for uploading to Netlify:
cd client
npm install --legacy-peer-deps
npm run build
This will produce a folder in the main directory that can be distributed. Any updates to the source code will need to be re-packaged with the build instructions and the new build will need to be uploaded to Netlify to update the website with the new features.
The stream API, the backend, and the frontend are currently functional and deployed with our developer accounts and can remain that way for your administrative purposes, but the instructions are as described above if you wish to make any changes.


## Authors
- **Jignesh Ammineni** - [LinkedIn](https://www.linkedin.com/in/jignesh-ammineni/)
- **Sagnik Pal** - [LinkedIn](https://www.linkedin.com/in/sagnikpal2004) | [GitHub](https://github.com/sagnikpal2004) | [Website](http://www-edlab.cs.umass.edu/~sagnikpal)
- **Hsiang-Chun Chiang** - [LinkedIn](www.linkedin.com/in/hsiang-chun-chiang) | [GitHub](https://github.com/hsiangchunch) | [Website](http://www-edlab.cs.umass.edu/~hsiangchunch)
- **Danny Cedrone** - [LinkedIn](https://www.linkedin.com/in/danny-cedrone-a14176202/) | [GitHub](https://github.com/dannycedrone)
- **Viral Rathod** - [LinkedIn](https://www.linkedin.com/in/viralrathod1/) | [GitHub](https://github.com/viralrathod10)
- **Arnav Kankaria** - [LinkedIn](https://www.linkedin.com/in/arnav-kankaria-b78b26213/) | [GitHub](https://github.com/arnavkankaria)

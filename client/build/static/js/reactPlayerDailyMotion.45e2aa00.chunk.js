(self.webpackChunkclient=self.webpackChunkclient||[]).push([[328],{7526:(e,t,r)=>{var a,n=r(2897).default,o=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of l(t))u.call(e,n)||n===r||s(e,n,{get:()=>t[n],enumerable:!(a=i(t,n))||a.enumerable});return e},c=(e,t,r)=>(((e,t,r)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>g}),e.exports=(a=y,h(s({},"__esModule",{value:!0}),a));var d=((e,t,r)=>(r=null!=e?o(p(e)):{},h(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),m=r(2206),f=r(1520);class g extends d.Component{constructor(){super(...arguments),c(this,"callPlayer",m.callPlayer),c(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),c(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),c(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:r,onError:a,playing:o}=this.props,[,s]=e.match(f.MATCH_URL_DAILYMOTION);this.player?this.player.load(s,{start:(0,m.parseStartTime)(e),autoplay:o}):(0,m.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(e=>e.player)).then((o=>{if(!this.container)return;const i=o.player;this.player=new i(this.container,{width:"100%",height:"100%",video:s,params:n({controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,m.parseStartTime)(e),origin:window.location.origin},r.params),events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}c(g,"displayName","DailyMotion"),c(g,"canPlay",f.canPlay.dailymotion),c(g,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.45e2aa00.chunk.js.map
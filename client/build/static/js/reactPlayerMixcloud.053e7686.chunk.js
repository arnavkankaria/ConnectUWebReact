(self.webpackChunkclient=self.webpackChunkclient||[]).push([[570],{875:(e,t,r)=>{var o,s=r(2897).default,n=Object.create,l=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,o)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))u.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(o=a(t,s))||o.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g}),e.exports=(o=d,c(l({},"__esModule",{value:!0}),o));var y=((e,t,r)=>(r=null!=e?n(p(e)):{},c(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),m=r(2206),f=r(1520);class g extends y.Component{constructor(){super(...arguments),h(this,"callPlayer",m.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",(()=>{})),h(this,"unmute",(()=>{})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,m.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then((()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on(((e,t)=>{this.currentTime=e,this.duration=t})),this.props.onReady()}))}),this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:t}=this.props,r=e.match(f.MATCH_URL_MIXCLOUD)[1],o=(0,m.queryString)(s(s({},t.options),{},{feed:"/".concat(r,"/")}));return y.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(o),frameBorder:"0",allow:"autoplay"})}}h(g,"displayName","Mixcloud"),h(g,"canPlay",f.canPlay.mixcloud),h(g,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.053e7686.chunk.js.map
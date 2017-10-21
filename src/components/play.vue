<!-- 播放器 -->
<template>
	<div class="">
		<div class="footer">
	      <div class="music-img">
	      	<img :src="playInfo.img">
	      </div>
	      <div class="music-info">
	      	<p class="music-name">{{playInfo.musicName}}</p>
	       	<div class="progress">
		       	<span class="start">{{transformTime(now)}}</span> 
		       	<div class="progress-bar">
		       		<div ref="now" class="now" :style="{width: (now / playInfo.totalTime).toFixed(3)*100 + '%'}"></div>
		       	</div> 
		       	<span class="end">{{transformTime(playInfo.totalTime)}}</span>
	       	</div>
	       	</div>
			<div class="music-play" @click="palyMusic">
	      		<i class="mui-icon iconfont" :class="[isPlaying ? 'icon-weibiaoti1' : 'icon-bofang']"></i>
	      	</div>
	      	<div class="music-list" @click="playList">
	      		<i class="mui-icon mui-icon-list"></i>
	     	</div>
	      <audio v-bind:src="playInfo.url" v-bind:autoplay="!isPlaying"></audio>
	    </div>
	    <play-List v-show="showList"></play-List>	
	</div>
</template>

<script>
	import {mapGetters} from "vuex";
	import playList from "./list.vue";
	import mui from "../../statics/mui/js/mui.min.js"
	export default{
		data(){
			return {
				isPlaying:true,
				nativeAudio:"",
				now:0,
				showList:false
			}
		},
		mounted() {
		    this.nativeAudio = document.querySelector('audio');
		    this.nativeAudio.addEventListener('play', () => {
	      		this.now = this.nativeAudio.currentTime;
	      	setInterval(() => {
	        	this.now = this.nativeAudio.currentTime;
	     	}, 1000);
	      	this.now = this.nativeAudio.currentTime;
		    })
		  },
		 components:{
			playList
		},
		methods:{
			transformTime(seconds) {
		      let m, s;
		      m = Math.floor(seconds / 60);
		      m = m.toString().length == 1 ? ('0' + m) : m;
		      s = Math.floor(seconds - 60 * m);
		      s = s.toString().length == 1 ? ('0' + s) : s;
		      return m + ':' + s;
		    },
		    palyMusic(){
		    	this.isPlaying=!this.isPlaying;
		    	!this.isPlaying ? this.nativeAudio.pause():this.nativeAudio.play();
		    },
		    addPlay(index) {
		    	this.isPlaying=true;
		      	this.$store.commit('addPlay', index);
		      	this.$store.commit('palyMusic', true);
    		},
    		playList(){
    			this.showList=!this.showList;
    			var cal=function(){
    				document.querySelector('.showlist').style.display = 'none';
    			};
    			let mask = mui.createMask(cal);//callback为用户点击蒙版时自动执行的回调;
				mask.show();//显示遮罩
				
				
				
    		}

		},
		computed: {
	      ...mapGetters([
	        'playInfo','currentTime'
      	])
		}
	}

</script>

<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		left:0;
		background-color: #26a2ff;
    	width: 100%;
    	height: 70px;
    	text-align: center;
    	display: flex;
    	padding: 0 10px;
	}
	.footer .music-img{
		width: 70px;
    	height: 70px;
	}
	.footer .music-img img{
		width: 60px;
    	height: 60px;
    	border-radius: 35px;
    	background-size: contain;
    	cursor: pointer;
    	margin: 5px;
	}
	.footer .music-list{
		width: 40px;
    	height: 70px;
    	line-height: 70px;
	}
	.footer .music-info{
		height: 70px;
		width: 100%;
		flex: 1;
		position: relative; 
	}
	.footer .music-info .music-name{
		margin: 10px 0 -5px 0;
	}
	.footer .music-info .process{
		
	}
	.footer .music-info .start{
		position: absolute;
		left: 10px;
		bottom:10px;
	}
	.footer .music-info .end{
		position: absolute;
		right:10px;
		bottom:10px;
	}
	.footer .music-info .progress-bar{
		position: relative;
	    width: 50%;
	    height: 5px;
	    display: inline-block;
	    background-color: hsla(0,0%,100%,.5);
	    vertical-align: 2px;
	    border-radius: 3px;
	    cursor: pointer;
	    margin-top:-20px;
	}
	.footer .music-info .progress-bar .now{
		position: absolute;
	    height: 5px;
	    display: inline-block;
	    background-color: hsla(0,0%,100%,.5);
	    vertical-align: 2px;
	    border-radius: 3px;
	    cursor: pointer;
	   	left:0;
	   	top:0;
	}
	.footer .music-info .progress-bar .now:after{
		content: "";
	    position: absolute;
	    left: 100%;
	    width: 2px;
	    height: 6px;
	    background-color: #fff;
	}
	.footer .music-play{
		width: 40px;
		height: 70px;
		line-height: 70px;
		float: right;
	}
	.audio{
		display: none;
	}
	.mui-icon{
		font-size: 30px;
		line-height: 70px;
	}
</style>
    
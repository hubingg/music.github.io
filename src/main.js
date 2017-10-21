//1.0 导入相关包
import Vue from 'vue';
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


//1.0.1 导入相关.vue组件
import App from './App.vue'
import ranking from './components/ranking.vue'
import songlist from './components/songlist.vue'
import recommend from './components/recommend.vue'
import radioStation from './components/radioStation.vue'
import songDetail from './components/songDetail.vue'
import play from './components/songDetail.vue'


//1.0.2 导入mui相关的css
import '../statics/mui/css/mui.css';
import '../statics/mui/css/icons-extra.css'

import '../statics/mui/js/mui.min.js'


import mintUI from 'mint-ui'
Vue.use(mintUI);

// //导入mint-ui的css
import 'mint-ui/lib/style.min.css';

//2.0 在Vue中加载vueRouter 
Vue.use(vueRouter);
// Vue.use(vueResource);  //使用vueResource 对象才能自动在Vue对象实例上挂在一个$http
Vue.use(Vuex);// Vuex 进行状态管理
// 用 axios 进行 Ajax 请求



//3.0 定义路由规则对象
let router = new vueRouter({
	routes:[
		{name:'ranking',path:'/ranking',component:ranking},
		{name:'songlist',path:'/songlist',component:songlist},
		{name:'recommend',path:'/recommend',component:recommend},
		{name:'radioStation',path:'/radioStation',component:radioStation},
		{name:'songDetail',path:'/ranking/songDetail/:topid',component:songDetail},
	]
});
const store = new Vuex.Store({
	state: {//单一状态树 唯一数据源
		list:[],
		url: "http://route.showapi.com/213-4?showapi_appid=35592&showapi_sign=beebc315c5d4467780ab5517eea5560a&topid=",
		info:{
			showapi_appid:'35592',showapi_sign:"beebc315c5d4467780ab5517eea5560a",topid:3
		},
		DOM:{},
		audio:{},
		isshow:false,
		playInfo:"",
		currentTime:0,
		playList:[],//播放列表
	},
	getters: {
		isshow: state => state.isshow,
		list: state => state.list,
		playInfo:state => state.playInfo,
		currentTime:state=>state.currentTime,
		playList:state=>state.playList
	},
	mutations: {//更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
		addPlay(state,index){
			var playInfo={};
		  	playInfo.img=state.list[index].albumpic_small;
		  	playInfo.musicName=state.list[index].songname;
		  	playInfo.totalTime=state.list[index].seconds;
		  	playInfo.url=state.list[index].url;
		  	state.playInfo=playInfo;
	      	state.isshow=true;
	      	console.log(state.playList);
	      	var flag = false;
	      	state.playList.forEach(function (element, index) { // 检测歌曲重复
		        if (element.musicName == playInfo.musicName) {
		          flag = true;
		        }
      		});
      		if(!flag){
      			state.playList.push(playInfo);
      		}
		},
	  	palyMusic(state,index){

	  	},
		getDOM(state,playod){
			state.DOM[payload.name] = payload.dom;
		}
	},
	actions: {
		getData({ commit,state},data) {
			return new Promise((resolve, reject) => {
				Vue.axios.get(state.url+data)
				.then (res => {
				  state.list=res.data.showapi_res_body.pagebean.songlist;
				})
				.then(() => {
				  
				});
				resolve();
			});
		}
	}
})
//4.0 使用router
new Vue({
	el:'#app',
	store,
	router,
	render:c=>c(App)
});
<template>
	<div class="tmpl">
		<!-- 头部 -->
		<div class="head">
			<mt-header fixed title="这是title">
				<router-link to="/" slot="left">
    			<mt-button icon="back">返回</mt-button>
  			</router-link>
				vue练习
			</mt-header>
		</div>
		 <mt-navbar v-model="selected">
		  <mt-tab-item id="1">
		  <router-link to="/recommend">个性推荐</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="2">
				<router-link to="/songlist">歌单</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="3">
		  <router-link to="/radioStation">主播电台</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="4">
		  <router-link to="/ranking">排行榜</router-link>
		  </mt-tab-item>
		</mt-navbar>
		<banner-vue></banner-vue>	
		<!-- tab-container -->
		

		<router-view>
			
		</router-view>
		<!-- 尾部 -->
		<play-vue v-show="list.length > 0 && isshow"></play-vue>
		
	</div>
</template>

<script>
import bannerVue from "./components/banner.vue"
import playVue from "./components/play.vue"
import {mapGetters} from "vuex"
	export default{
		data(){
			return {
				selected:"",
			}
		},
		components:{
			bannerVue,playVue
		},
		created(){
			this.get();
		},
		methods:{
			get:function(){
				
			}
		},
		computed: {
	      ...mapGetters([
	        'isshow',"list"
      ])
    }
	}

</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.head{
		margin-bottom: 40px;
	}
	div.mint-navbar .mint-tab-item.is-selected {
		margin-bottom:0;
	}
	.mint-tab-item{
		height: 46px;
		box-sizing: border-box;
	}
	.mint-navbar .mint-tab-item div.mint-tab-item-label{
		height: 46px;
		box-sizing: border-box;
	}
	.mint-tab-item-label a{
		display: block;
		height: 100%;
		line-height: 46px;
		font-size: 14px;
		margin-top: -14px;
	}
	.tmpl{
		width: 100%;
		height:100%;
	}
</style>
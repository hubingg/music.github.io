<template>
	<div class="">
		<div class="music-list">
			<div class="music-item" v-for="(item,index) in list" :key="index"  @click="addPlay(index)">
				<img :src="item.albumpic_small" class="music-img"> 
				<span class="music-name"><span class="mui-badge mui-badge-danger">{{index+1}}</span>&nbsp;.&nbsp;{{item.songname}}-{{item.singername}}</span>
				<span class="del-icon"></span>
			</div>
		</div>
	</div>
</template>

<script>
	// import { mapGetters } from 'vuex'
	export default{
		data(){
			return {

			}
		},
		beforeCreate() {
			var topid=this.$route.params.topid;
    		this.$store.dispatch('getData',topid);
  		},
		created(){
			 //表示.vue组件创建完毕以后，并且已经将data中和methods中的所有属性和方法都已经初始化完毕了
			 this.getData();
		},
		methods:{
			getData(){

			},
			addPlay(index){
				console.log("执行一次");
				this.$store.commit('addPlay',index);
			}
		},
		computed: {
    		list() {
      			return this.$store.state.list;
    		},
    		 DOM() {
      			return this.$store.state.DOM;
    		},
    		audio(){
    			return this.$store.state.audio;
    		},
    		 getDOM() {
      			return this.$store.state.getDOM;
    		}
    	}
	}

</script>

<style scoped>
	.music-list {
	    padding-top: 4px;
	    padding-left: 4px;
	    padding-right: 4px;
	    -webkit-box-flex: 8;
	    -ms-flex: 8;
	    flex: 8;
	    overflow: auto;
	}
	.music-list .music-item {
	    padding: 4px 6px 0;
	    position: relative;
	    margin-bottom: 4px;
	    border-radius: 5px;
	    cursor: pointer;
	    border: none;
	    border-top: 1px solid rgba(0,0,0,.1)
	}
	.music-list .music-item .music-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
}
.music-list .music-item .music-name{
	display: inline-block;
	width: 65%;
    vertical-align: top;
    margin-top: 15px;
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    padding-bottom: 20px;
}
	.footer{
	    background: #26a2ff;
	    width: 100%;
	    height: 70px;
	    text-align: center;
	    position: fixed;
	    bottom: 0;
	    left:0;
	}
	.footer audio{
		width: 100%;
		height: 50px;
		display: block;
	}

</style>
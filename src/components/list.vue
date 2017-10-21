<!-- /播放列表-->
<template>
	<div class="showlist">
      	<div class="title">
        播放列表（{{playList.length}}）
      	</div>
      	<ul class="mui-table-view">
		    <li class="mui-table-view-cell" v-for="(item,index) in playList" :key="index">
		        {{item.musicName}}
				<div class="mui-icon mui-icon-closeempty delete" @click="del(index)"></div>
		    </li>
		</ul>
  </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return {
				// playList:[]
			}
		},
		methods:{
			del(index){
				console.log(this.$store.getters["playList"])
			}
		},
		computed: {
	      ...mapGetters([
	        'playList'
      	])
	  }
	}

</script>

<style scoped>
	.title{
	    font-size: 16px;
	    height: 2rem;
	    line-height: 2rem;
	    background-color: #fff;
	    text-align: center;
	}
	.showlist{
		position: fixed;
	    left: 0;
	    right: 0;
	    bottom: 150px;
	    z-index:1000;
	}
	.delete{
		float:right;
	}
</style>
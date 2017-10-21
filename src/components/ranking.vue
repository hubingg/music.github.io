<template>
	<div class="ranking">
		<router-link :to="item.src" v-for="(item,index) in ranks" :key="index">
		  <img src="http://imge.kugou.com/mcommon/400/20150331/20150331161330279063.png" width="80" height="80">
		  <div class="list">
		  	<span>{{item.title}}</span>
		  </div>
		  <span><i class="mint-cell-allow-right"></i></span>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				ranks:[
					{
						title:"欧美",
						img:"",
						src:"/ranking/songDetail/3"
					},
					{
						title:"内地",
						img:"",
						src:"/ranking/songDetail/5"
					},
					{
						title:"韩国",
						img:"",
						src:"/ranking/songDetail/16"
					},{
						title:"日本",
						img:"",
						src:"/ranking/songDetail/17"
					},{
						title:"港台",
						img:"",
						src:"/ranking/songDetail/6"
					}
				]
			}
		},
	}

</script>

<style>
	.ranking{
		margin-bottom:70px;
	}
	.ranking a{
		width: 100%;
		height: 100px;
		padding: 15px;
		display: block;
	}
	.ranking a span{
		float: right;
		line-height: 1;
		height:100%;
	}
	i.mint-cell-allow-right{
		height: 100%;
		width: 20px;
		display: block;
		position: relative;
	}
	i.mint-cell-allow-right:after {
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 15px;
    height: 15px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
	}
	.ranking .list{
		float: left;
		height: 100%;
		padding: 10px 15px;
	}
	.ranking img{
		float: left;
	}

</style>
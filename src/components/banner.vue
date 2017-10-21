<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="(item,index) in list" :key="index">
	  	<img :src="item.imag">
	  </mt-swipe-item>
	</mt-swipe>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{
						imag:"http://musicapi.duapp.com/static/banner1.jpg"
					},
					// {
					// 	imag:"http://musicapi.duapp.com/static/banner2.jpg"
					// },
					// {
					// 	imag:"http://musicapi.duapp.com/static/banner3.jpg"
					// },
					// {
					// 	imag:"http://musicapi.duapp.com/static/banner4.jpg"
					// }
				]
			}
		}
	}

</script>

<style>
/*.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 250px;
  }
  .mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
  .mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none
  }
  .mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
  }
  .mint-swipe-indicator.is-active {
    background: #fff;
  }
  .mint-swipe-item image{
	width: 100%;
	height: 100%;
	display: block;
  }*/
  .mint-swipe-item img{
  width: 100%;
  height: 250px;
  display: block;
}
div.mint-swipe {
    height: 250px;
  }
</style>
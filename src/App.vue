<template>
	<div id="app">
		<div class="content">
			<header-wrap></header-wrap>
			<router-view v-wechat-title="$route.meta.title" />
			<footer-wrap></footer-wrap>
		</div>
	</div>
</template>
<script>
	import HeaderWrap from '@/components/header.vue'
	import FooterWrap from '@/components/footer.vue'

	export default {
		name: 'App',
		components: {
			HeaderWrap,
			FooterWrap
		}
	}
</script>

<style lang="less">
	/*==全局样式==*/
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	div,
	dl,
	dt,
	dd,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	img,
	ol,
	ul,
	li,
	table,
	th,
	td,
	p,
	span,
	a {
		border: 0;
	}

	img,
	input {
		border: none;
		vertical-align: middle;
	}

	body {
		font-family: Tahoma, Arial, Helvetica, "微软雅黑";
		font-size: 14px;
		text-align: left;
		background: #FFF;
		color: #333;
		background-color: #f5f6f6;
	}

	html {
		overflow-y: scroll;
	}

	ul,
	ol {
		list-style-type: none;
	}

	th,
	td,
	input {
		font-size: 12px;
	}

	h3 {
		font-size: 14px;
	}

	button {
		border: none;
		cursor: pointer;
		font-size: 12px;
		background-color: transparent;
	}

	select {
		border-width: 1px;
		_zoom: 1;
		border-style: solid;
		padding-top: 2px;
		font-size: 12px;
	}
	a:link,
	a:visited {
		text-decoration: none;
		color: #333;
	}

	a:hover,
	a:active {
		text-decoration: underline;
		color: #f60;
	}

	.clear:after {
		content: ' ';
		clear: both;
		display: block;
		height: 0;
		visibility: hidden;
	}

	.clear {
		zoom: 1;
	}

	#app {
		width: 100%;
		height: 100%;
	}

	.content {
		width: 960px;
		height: auto;
		margin: 0 auto;
	}
	// 分页
	.pagination {
		width: 100%;
		margin-top: 30px;
		text-align: center;
		li {
			display: inline-block;
			margin: 0 2px;
			height: 26px;
			line-height: 24px;
			text-align: center;
			width: 26px;
			border: 1px #cccccc solid;
			color: #666;
			font-size: 12px;
			a{
				display: block;
				width: 100%;
				height: 100%;
				outline: 0;
			}
			a:hover{
				text-decoration: none;
				color: #ffffff;
			}
		}
		li:hover{
			text-decoration: none;
			border-color: #ff6700;
			background-color: #ff6700;
			color: #ffffff;
		}
		.active{
			text-decoration: none;
			border-color: #ff6700;
			background-color: #ff6700;
			color: #ffffff;
		}
	}
  // 轮播图底部点的颜色
  .swiper-pagination{
    .swiper-pagination-bullet-active{
      opacity: 0.9;
      background: #ff6700;
    }
  }
</style>

<template>
	<div class="main">
		<div class="banner">
			<div class="menu">
				<menu-wrap></menu-wrap>
				
			</div>
			<div class="slider">
				home
			</div>
		</div>
	</div>
</template>
<script>
	import MenuWrap from '@/components/menu.vue'
	export default {
		components: {
			MenuWrap
		}
	}
</script>

<style lang="less" scoped="scoped">
	.main {
		width: 100%;
		overflow: hidden;
		.menu{
			float: left;
			width: 184px;
			overflow: hidden;
		}
		.banner {
			width: 100%;
			overflow: hidden;

			.slider {
				float: right;
				width: 766px;
				height: 405px;
				overflow: hidden;
			}
		}
	}
</style>

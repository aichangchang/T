<template>
	<div class="main">
		<div class="banner">
			<div class="menu">
				<menu-wrap></menu-wrap>

			</div>
			<div class="slider">
        <p>
          <span @click="toHome">
            Home
            <i>»</i>
          </span>
          <span @click="toProducts">
            Products
            <i></i>
          </span>
        </p>
			</div>
		</div>
	</div>
</template>

<script>
	import MenuWrap from '@/components/menu.vue'
	export default {
		components: {
			MenuWrap
    },
    methods:{
			toHome:function(){
				this.$router.push('/home')
			},
			toProducts:function(){
				this.$router.push('/products')
			},
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

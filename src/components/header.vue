<template>
	<div class="header">
		<img @click="toHome" src="../assets/images/logo.jpg" alt="lanfeng">
	</div>
</template>

<script>
	export default{
		methods:{
			toHome:function(){
				this.$router.push("/home");
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.header {
		width: 100%;
		height: 101px;
		overflow: hidden;
		background: #fff;
		margin-bottom: 15px;
		img{
			display: block;
			width: 378px;
			height: 100%;
		}
	}
</style>

<template>
	<div class="menu">
		<ul class="menu-item">
			<li @click="toHome">
				HOME
				<i></i>
			</li>
			<li @click="toAboutUs">
				About Us
				<i></i>
			</li>
			<li @click="toProducts">
				Products
				<i></i>
			</li>
			<li @click="toContact">
				Contact
				<i></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		methods:{
			toHome:function(){
				this.$router.push('/home')
			},
			toAboutUs:function(){
				this.$router.push('/aboutus')
			},
			toProducts:function(){
				this.$router.push('/home')
			},
			toContact:function(){
				this.$router.push('/aboutus')
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.menu {
		width: 100%;
		overflow: hidden;

		.menu-item {
			width: 100%;
			background-color: #454545;

			li {
				display: block;
				height: 53px;
				line-height: 52px;
				font-size: 14px;
				padding-left: 20px;
				text-transform: uppercase;
				color: #fff;
				cursor: pointer;
				position: relative;

				i {
					position: absolute;
					top: 21px;
					right: 20px;
					height: 7px;
					padding-left: 7px;
					background-position: 0 0;
					background-image: url(../assets/images/allbgs.png);
					background-repeat: no-repeat;
				}
			}

			li:nth-child(even) {
				background: url(../assets/images/li.jpg) no-repeat left top;
				background-size: 100% 100%;
			}
			li:hover{
				background: #db261f;
			}
		}
	}
</style>

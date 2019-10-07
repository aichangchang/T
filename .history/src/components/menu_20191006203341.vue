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
			<li @click="toProducts" @mouseenter="flag = true" @mouseleave="flag = false">
				Products
				<i></i>
				<div v-if="flag" class="productsList">
					<p>Fuel Dispenser</p>
					<p>Spare Parts</p>
					<p>System</p>
				</div>
			</li>
			<li @click="toContact">
				Contact
				<i></i>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false

			}
		},
		methods: {
			toHome: function() {
				this.$router.push('/home')
			},
			toAboutUs: function() {
				this.$router.push('/aboutus')
			},
			toProducts: function() {
				this.$router.push('/products')
			},
			toContact: function() {
				this.$router.push('/contact')
			},
			productsList: function() {

			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.menu {
		width: 100%;
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

			li:hover {
				background: #db261f;
			}

			.productsList {
				position: absolute;
				left: 184px;
				top: 0;
				width: 100%;
				z-index: 99999999;
				background: #db261f;
				padding: 10px 15px;
				p {
					line-height: 30px;
					width: 100%;
					font-size: 12px;
					padding-left: 20px;
					color: #fff;
				}
			}
		}
	}
</style>

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
        <ul v-if="flag" class="productsList">
          <li v-for="(item, index) in cardLists" class="goods_list" :key="index">
            <router-link :to="{ name: 'Products', params: { text: item.text }}">
              <li>{{item.text}}</li>
            </router-link>
          </li>
        </ul>
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
				flag: false,
        cardLists: [
          { text: 'Fuel Dispenser', id: '01' },
          { text: 'Spare Parts', id: '02' },
          { text: 'System', id: '03' }
        ],
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
			background-color:rgba(105,101,101,.6);
			li {
				display: block;
				height: 56px;
				line-height: 55px;
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

			// li:nth-child(even) {
			// 	background: url(../assets/images/li.jpg) no-repeat left top;
			// 	background-size: 100% 100%;
			// }

			li:hover {
        background: #ff6700;
        color: #fff
			}

			.productsList {
				position: absolute;
				left: 243px;
				top: -115px;
        width: 300px;
        height: 380px;
				z-index: 99999999;
				background: #fff;
				padding: 0 15px;
				li {
					width: 100%;
					font-size: 12px;
					padding-left: 20px;
          color: #000;
          height: 46px;
          line-height: 46px;
          text-transform: uppercase;
          cursor: pointer;
        }
        li:hover {
          background: #ff6700;
          color: #fff
        }
			}
		}
	}
</style>

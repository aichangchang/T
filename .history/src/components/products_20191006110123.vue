<template>
	<div class="main">
		<div class="banner">
			<div class="menu">
				<menu-wrap></menu-wrap>

			</div>
			<div class="slider">
        <div class="location">
          <p>
            <span @click="toHome">
              Home
            </span>
            <span>»</span>
            <span @click="toProducts">
              Products
            </span>
          </p>
        </div>
        <ul class="typelist clearfix">
          <li class="li1" v-for="(item,index) in items" :key="item.id" :class="{'active':isActive==index}" @click="change(index)">
            <a class="lv2" href="/index.php?ac=article&amp;at=list&amp;tid=3">Fuel Dispenser</a>
          </li>
          <li class="li2">
            <a class="lv2" href="/index.php?ac=article&amp;at=list&amp;tid=4">Spare Parts</a>
          </li>
          <li class="li3">
            <a class="lv2" href="/index.php?ac=article&amp;at=list&amp;tid=5">System</a>
          </li>
        </ul>
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
    data: {
      isActive: 0 //索引值默认为0，即item1为默认激活的选项卡
    },
    methods:{
			toHome:function(){
				this.$router.push('/home')
			},
			toProducts:function(){
				this.$router.push('/products')
      },
      change: function (index) {
        this.isActive = index;
      }
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
        padding: 0 30px;
        padding-bottom: 20px;
        background-color: #fff;
        min-height: 416px;
        overflow: hidden;
        .location{
          height: 46px;
          line-height: 46px;
          color: #999;
          font-size: 13px;
          p{
            span:hover{
              color: red;
            }
          }
        }
        .typelist{
          position: relative;
          z-index: 99;
          padding-bottom: 20px;
          li {
            float: left;
            position: relative;
            margin-right: 10px;
            display: inline;
            width: 224px;
            background: #454545;
            line-height: 36px;
            a{
              color: #fff;
              margin-left: 7px;
              margin-right: 12px;
              font-size: 12px;
            }
          }
        }
			}
		}
	}
</style>

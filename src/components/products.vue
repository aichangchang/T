<template>
	<div class="main">
		<div class="banner clear">
			<div class="menu-wrap">
				<menu-wrap></menu-wrap>
				<!-- <follow-us></follow-us> -->
				<div style="margin-top: 20px;">
					<contact-card-wrap></contact-card-wrap>
				</div>
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
          <li class="li1" v-for="(item, index) in items" :key="item.id" :class="{ 'active': isActive==index }" @click="isActive = index">
            <span>{{ item.text }}</span>
          </li>
        </ul>
		<fuel-dispenser-datas-wrap v-if="isActive == 0"></fuel-dispenser-datas-wrap>
		<spare-parts-data-wrap v-if="isActive == 1"></spare-parts-data-wrap>
		<system-datas-wrap v-if="isActive == 2"></system-datas-wrap>
			</div>
		</div>
	</div>
</template>

<script>
  import MenuWrap from '@/components/menu.vue'
	import FollowUs from '@/components/followus.vue'
  import ContactCardWrap from '@/components/contact-card.vue'

  import FuelDispenserDatasWrap from '@/components/fuel-dispenser-data.vue'
  import SparePartsDataWrap from '@/components/spare-parts-data.vue';
  import systemDatasWrap from '@/components/system-datas.vue';
	export default {
		components: {
			MenuWrap,
			FollowUs,
			ContactCardWrap,
			FuelDispenserDatasWrap,
			SparePartsDataWrap,
			systemDatasWrap
    },
    data() {
      return{
        items: [
          { text: 'Fuel Dispenser', id: '01' },
          { text: 'Spare Parts', id: '02' },
          { text: 'System', id: '03' }
        ],
        systemData: [],
        FuelDispenserData: [],
        SparePartsDatas: [],
        isActive: 0
      }
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
		.menu-wrap{
			float: left;
			width: 243px;
    }
		.banner {
      width: 100%;
			.slider {
				float: right;
				width: 707px;
        padding: 0 30px;
        padding-bottom: 20px;
        background-color: #fff;
        min-height: 570px;
        .location{
          height: 46px;
          line-height: 46px;
          color: #999;
          font-size: 13px;
          p{
            span{
              cursor: pointer;
            }
            span:hover{
              color: #ff6700;
            }
          }
        }
        .typelist{
          z-index: 99;
          padding-bottom: 20px;
          li {
            float: left;
            margin-right: 10px;
            display: inline;
            width: 204px;
            background: rgba(105,101,101,.6);
            line-height: 36px;
            cursor: pointer;
            span{
              color: #fff;
              margin-left: 7px;
              margin-right: 12px;
              font-size: 12px;
              text-decoration: none;
            }
          }
          .active{
            background: #ff6700;
            color: #fff;
          }
        }
			}
		}
	}
</style>

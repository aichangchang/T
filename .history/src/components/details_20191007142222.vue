<template>
	<div class="main">
		<div class="banner clear">
			<div class="menu-wrap">
				<menu-wrap></menu-wrap>
        <follow-us></follow-us>
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
            <span>»</span>
            <span>
              Detail
            </span>
          </p>
        </div>
        <ul v-if="this.systemData.length>0">
          <li v-for="(item, index) in systemData" class="goods_list" :key="index">
            <img v-bind:src="item.src" />
          </li>
			  </ul>
        <ul v-if="this.FuelDispenserSrcData.length>0" class="goods_lists">
          <li v-for="(item, index) in FuelDispenserSrcData" class="goods_list" :key="index">
            <img v-bind:src="item" />
          </li>
          <li v-for="(item, index) in FuelDispenserTitleData" class="goods_title" :key="index">
            <p :class="{ 'titleColor': item == 'Technical Specificatons' }">{{item}}</p>
          </li>
			  </ul>
        <ul v-if="this.SparePartsSrcDatas.length>0" class="goods_lists">
          <li v-for="(item, index) in SparePartsSrcDatas" class="goods_list" :key="index">
            <img v-bind:src="item" />
          </li>
          <li v-for="(item, index) in SparePartsSrcTitleDatas" class="goods_title" :key="index">
            <p :class="{ 'titleColor': item == 'Technical Specificatons' }">{{item}}</p>
          </li>
			  </ul>
			</div>
		</div>
	</div>
</template>

<script>
  import MenuWrap from '@/components/menu.vue'
	import FollowUs from '@/components/followus.vue'
  import ContactCardWrap from '@/components/contact-card.vue'
  import systemDatas from '../../static/SystemData.json';
  import FuelDispenserDatas from '../../static/FuelDispenser.json';
  import SparePartsData from '../../static/SpareParts.json';
	export default {
		components: {
			MenuWrap,
			FollowUs,
			ContactCardWrap
    },
    data() {
      return{
        items: [
          { text: 'Fuel Dispenser', id: '01' },
          { text: 'Spare Parts', id: '02' },
          { text: 'System', id: '03' }
        ],
        systemData: [],
        FuelDispenserSrcData: [],
        FuelDispenserTitleData: [],
        SparePartsSrcTitleDatas: [],
        SparePartsSrcDatas: [],
        isActive: 0,
      }
    },
    methods:{
      toHome:function(){
				this.$router.push('/home')
			},
      toProducts:function(){
				this.$router.push('/products')
      },
      detailGet(id, title){
        if(id == 'System'){
          this.systemData = [];
          this.FuelDispenserSrcData = [];
          this.FuelDispenserTitleData = [];
          this.SparePartsSrcTitleDatas = [];
          this.SparePartsSrcDatas = [];
          if(title == 'Central Control System'){
            this.systemData = systemDatas.CentralControlSystem
          }else if(title == 'Tank Monitor System'){
            this.systemData = systemDatas.TankMonitorSystem
          }
        }else if(id == 'Fuel Dispenser'){
          this.systemData = [];
          this.FuelDispenserSrcData = [];
          this.FuelDispenserTitleData = [];
          this.SparePartsSrcTitleDatas = [];
          this.SparePartsSrcDatas = [];
          FuelDispenserDatas.map((item, index)=>{
            if(item.title == title){
              this.FuelDispenserSrcData = item.src
              this.FuelDispenserTitleData = item.technicalTitle
            }
          })
        }else if(id == 'Spare Parts'){
          this.systemData = [];
          this.FuelDispenserSrcData = [];
          this.FuelDispenserTitleData = [];
          this.SparePartsSrcTitleDatas = [];
          this.SparePartsSrcDatas = [];
          SparePartsData.map((item, index)=>{
            if(item.title == title){
              this.SparePartsSrcDatas = item.src
              this.SparePartsSrcTitleDatas = item.technicalTitle
            }
          })
        }
      }
    },
    mounted(){
      this.detail = this.$route.params.detail
      this.detailGet(this.detail.id, this.detail.title)
    },
	}
</script>

<style lang="less" scoped="scoped">
	.main {
		width: 100%;
		.menu-wrap{
			float: left;
			width: 184px;
		}
		.banner {
			width: 100%;
			.slider {
				float: right;
				width: 766px;
        padding: 0 30px;
        padding-bottom: 20px;
        background-color: #fff;
        min-height: 635px;
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
              color: red;
            }
          }
        }
        ul{
          .goods_list{
            width: 100%;
            img{
              text-align: center;
              margin: 0 auto;
              margin-top: 8px;
              border: 1px #e9e9e9 solid;
            }
          }
        }
        .goods_lists{
          .goods_list{
            width: 500px;
            img{
              text-align: center;
              width: 100%;
              margin: 0 auto;
              margin-top: 8px;
              border: 1px #e9e9e9 solid;
            }
          }
          .goods_title{
            margin-top: 20px;
            p{
              line-height: 16px;
              font-size: 13px;
            }
            .titleColor{
              height: 28px;
              line-height: 28px;
              background-color: #db261f;
              font-size: 18px;
              color: #fff;
              font-weight: bold;
              padding-left: 8px;
              margin-top: 30px;
              margin-bottom: 20px;
            }
          }
        }
			}
		}
	}
</style>

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
          </p>
        </div>
        <ul class="typelist clearfix">
          <li class="li1" v-for="(item, index) in items" :key="item.id" :class="{ 'active': isActive==index }" @click="isActive = index">
            <span>{{ item.text }}</span>
          </li>
        </ul>
        <ul v-if="isActive == 0">
          <li v-for="(item, index) in FuelDispenserData" class="goods_list" :key="index">
            <router-link :to="{ name: 'Details', params: { detail: item }}">
              <a><img v-bind:src="item.proSrc" /></a>
              <div class="proTitle" >{{item.title}}</div>
            </router-link>
          </li>
			  </ul>
			  <ul v-if="isActive == 1">
          <li v-for="(item, index) in SparePartsDatas" class="goods_list" :key="index">
            <router-link :to="{ name: 'Details', params: { detail: item }}">
              <a><img v-bind:src="item.proSrc" /></a>
              <div class="proTitle" >{{item.title}}</div>
            </router-link>
          </li>
        </ul>
        <ul v-if="isActive == 2">
          <li v-for="(item, index) in systemData" class="goods_list" :key="index">
            <router-link :to="{ name: 'Details', params: { detail: item }}">
              <a><img v-bind:src="item.src" /></a>
              <div class="proTitle" >{{item.title}}</div>
            </router-link>
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
      // change: function (index, text) {
      //   this.isActive = index;
      //   if(text == 'System'){
      //     this.systemData = [];
      //     this.FuelDispenserData = [];
      //     systemDatas.CentralControlSystem.map((item, index)=>{
      //       if(index==0){
      //         this.systemData.push(item)
      //       }
      //     })
      //     systemDatas.TankMonitorSystem.map((item, index)=>{
      //       if(index==0){
      //         this.systemData.push(item)
      //       }
      //     })
      //     console.log(this.systemData, this.FuelDispenserData)
      //   }else if(text == 'Fuel Dispenser'){
      //     this.systemData = [];
      //     this.FuelDispenserData = [];
      //     FuelDispenserDatas.map((item, index)=>{
      //       this.FuelDispenserData.push(item)
      //     })
      //     console.log(this.systemData, this.FuelDispenserData)
      //   }else if(text == 'Spare Parts'){
      //     this.systemData = [];
      //     this.FuelDispenserData = [];
      //     console.log(this.systemData, this.FuelDispenserData)
      //   }
      // }
		},
		created:function(){
      this.FuelDispenserData = FuelDispenserDatas;
      this.SparePartsDatas = SparePartsData;
			systemDatas.CentralControlSystem.map((item, index)=>{
			  if(index==0){
			    this.systemData.push(item)
			  }
			});
			systemDatas.TankMonitorSystem.map((item, index)=>{
			  if(index==0){
			    this.systemData.push(item)
			  }
			})
		}
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
              color: red;
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
            width: 224px;
            background: #454545;
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
            background: red;
            color: #fff;
          }
        }
        .goods_list{
          padding-top: 3px;
          margin-top: 2px;
          float: left;
          width: 227px;
          margin-right: 8px;
          margin-bottom: 8px;
          overflow: hidden;
          a {
            a {
              display: block;
              width: 100%;
              overflow: hidden;
              img {
                border: 1px #e9e9e9 solid;
                width: 224px;
                height: 275px;
              }
            }
          }
          .proTitle{
            height: 32px;
            line-height: 18px;
            text-align: center;
            font-size: 11px;
            font-weight: bold;
          }
        }
			}
		}
	}
</style>

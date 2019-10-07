<template>
	<div class="main">
		<div class="banner clear">
			<div class="menu">
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
        <ul v-if="this.FuelDispenserData.length>0">
          <li v-for="(item, index) in FuelDispenserData.src" class="goods_list" :key="index">
            <img v-bind:src="item.src" />
          </li>
          <li v-for="(item, index) in FuelDispenserData.technicalTitle" class="goods_list" :key="index">
            <p>{{item.title}}</p>
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
          this.FuelDispenserData = [];
          if(title == 'Central Control System'){
            this.systemData = systemDatas.CentralControlSystem
          }else if(title == 'Tank Monitor System'){
            this.systemData = systemDatas.TankMonitorSystem
          }
        }else if(id == 'Fuel Dispenser'){
          this.systemData = [];
          this.FuelDispenserData = [];
          FuelDispenserDatas.map((item, index)=>{
            if(item.title == title){
              this.FuelDispenserData = item
            }
          })

        }else if(id == 'Spare Parts'){
          this.systemData = [];
          this.FuelDispenserData = [];
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
		.menu{
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
			}
		}
	}
</style>

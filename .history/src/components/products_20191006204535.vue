<template>
	<div class="main">
		<div class="banner">
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
          </p>
        </div>
        <ul class="typelist clearfix">
          <li class="li1" v-for="(item, index) in items" :key="item.id" :class="{ 'active': isActive==index }" @click="change(index, item.text)">
            <span>{{ item.text }}</span>
          </li>
        </ul>
        <ul v-if="this.systemData.length>0">
          <li v-for="(item, index) in systemData" class="goods_list" :key="index">
            <a @click="toDetail(item.id)"><img v-bind:src="item.src" /></a>
            <div class="proTitle" @click="toDetail(item.id)">{{item.title}}</div>
          </li>
			  </ul>
			</div>
		</div>
	</div>
</template>

<script>
  import MenuWrap from '@/components/menu.vue'
  import systemDatas from '../../static/SystemData.json';
	import FollowUs from '@/components/followus.vue'
	import ContactCardWrap from '@/components/contact-card.vue'
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
      toDetail:function(id){
				this.$router.push(`/details?${id}`)
      },
      change: function (index, text) {
        this.isActive = index;
        if(text == 'System'){
          this.systemData = []
          systemDatas.CentralControlSystem.map((item, index)=>{
            if(index==0){
              this.systemData.push(item)
            }
          })
          systemDatas.TankMonitorSystem.map((item, index)=>{
            if(index==0){
              this.systemData.push(item)
            }
          })
        }else if(text == 'Fuel Dispenser'){
          this.systemData = []
        }else if(text == 'Spare Parts'){
          this.systemData = []
        }
      }
		}
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
          padding-top: 5px;
          margin-top: 2px;
          float: left;
          width: 224px;
          margin-right: 10px;
          margin-bottom: 8px;
          a {
            display: block;
            width: 100%;
            img {
              border: 1px #e9e9e9 solid;
              width: 100%;
            }
          }
          .proTitle{
            line-height: 42px;
            text-align: center;
            font-size: 12px;
            font-weight: bold;
          }
        }
			}
		}
	}
</style>

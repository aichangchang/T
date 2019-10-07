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
      createPage:function(){
				var url = document.location.toString();//获取url地址
        var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
        console.log('urlParmStr')
        console.log(urlParmStr)
        console.log('urlParmStr')
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
      },
    },
    mounted(){
        this.goodId = this.$route.params.goodId
        console.log(this.goodId)
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
			}
		}
	}
</style>

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
				<p class="tip">
          <span @click="toHome">
            Home
          </span>
          <span>»</span>
          <span @click="toAboutus">
            About Us
          </span>
        </p>
				<img src="../assets/images/2.jpg" alt="">
				<div class="txt">
					<p>"TRIDENT TECKNO" is a registered trademark of Henan V.Giant Machinery and Equipment Co.,Ltd , Henan V.Giant is one of the large-scale manufacturers specialized in developing and producing high quality fuel dispenser and accessory spare parts.Our products cover:Automatic Nozzles;Dispensers;Hose for Dispensers;Pumping unit;Flowmeter etc,provides the whole fuel dispenser and the necessary parts to domestic and international fuel dispenser manufactory and gas station for a long time.</p>
					<p>The company in line with the running idea “to make the most outstanding product with the most favorable price ” , with the management mentality “to depend upon the advanced technology and superior quality ”,grows stronger unceasingly, our products receive international and domestic customer’s welcome after the long-term endeavor.</p>
					<p>We want to establish a long term business relation with your company on basis of mutual benefits.If you have any enquiry about our prodcuts,kindly let us know without delay.I will be very happy to offer you very competitive prices.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MenuWrap from '@/components/menu.vue'
	import FollowUs from '@/components/followus.vue'
	import ContactCardWrap from '@/components/contact-card.vue'
	export default {
		components: {
			MenuWrap,
			FollowUs,
			ContactCardWrap
    },
    methods:{
			toHome:function(){
				this.$router.push('/home')
			},
			toAboutus:function(){
				this.$router.push('/aboutus')
      }
    }
	}
</script>

<style lang="less" scoped="scoped">
	.main {
		width: 100%;
		.menu-wrap {
			float: left;
			width: 184px;
		}

		.banner {
			width: 100%;
			.slider {
				float: right;
				width: 766px;
				min-height: 570px;
				background: #fff;
				padding: 0 30px 20px;
				.tip {
					width: 100%;
					height: 46px;
					line-height: 46px;
					color: #999;
          border-bottom: 1px #db261f solid;
          font-size: 13px;
          span{
            cursor: pointer;
          }
          span:hover{
            color: red;
          }
				}
				img{
					width: 100%;
					height: 106px;
					display: block;
					margin-top: 30px;
				}
				.txt{
					width: 100%;
					padding-top: 20px;
					font-size: 12px;
					p{
						text-indent: 24px;
						margin-bottom: 10px;
						line-height: 18px;
					}
				}
			}
		}
	}
</style>

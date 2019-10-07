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
					<p>Zhejiang Lanfeng Machine Co., Ltd is one of the large-scale manufacturers specialized in developing and producing fuel dispenser ,gas dispenser and all components , the factory occupying total area of 10382 square meters , construction area 8818 square meters , possessing various precise processing equipment and production line 235(sets) formed the yearly production 30,000 fuel dispenser, 100,000sets of various fuel dispenser parts and LPG parts ,provides the whole fuel dispenser and the necessary parts to domestic and international fuel dispenser manufactory and gas station for a long time.</p>
					<p>The company in line with the running idea “to make the most outstanding product with the most favorable price ” , with the management mentality “to depend upon the advanced technology and superior quality ” , grows stronger unceasingly ,and has developed into the China well-know highly famed major factory providing completed spare parts ,various series, and reliable after-service, Lanfeng as the member of the American PEI oil equipment annual meeting organization and the China refueling equipment committee , devotes into creating the developing direction of world oil equipment brand ,persists in walking the road “quality to surpass all ,the service superior than all ,the technology to defeat all , the price to decide all”.</p>
					<p>LANFENG has passed the ISOO9001-2000 international quality control system “LANFENG” products receive international and domestic customer’s welcome after the long-term endeavor, selling goods abroad more than 50 countries.Since 2008 ,the company has obtained the ATEX certificate of the European Union explosions-proof Administration and OIML certificate of the international legal measurement organization ,moreover,we have obtained Russian, Kazakhstan ,Kirghiz Tanzania measurement and explosive-proof authentication and approved sale license from India , some important components have also obtained the American UL authentication 。”LANFENG” pursues the goal “the new basement in line advanced international standard, the world-class product foundation of fuel dispenser ,gas dispenser forever.
</p>
					<p>“LANFENG” sincerely anticipates to cooperate with the customers at the whole world by the finest equipment, the most favorable price, the most satisfactory service and the most reliable after-service ,lets the user be satisfied.
</p>
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
				min-height: 635px;
				background: #fff;
				padding: 0 30px 20px;
				.tip {
					width: 100%;
					height: 46px;
					line-height: 46px;
					color: #999;
          border-bottom: 1px #db261f solid;
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

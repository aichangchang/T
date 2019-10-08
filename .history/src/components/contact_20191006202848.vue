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
          <span @click="toContact">
            Contact
          </span>
        </p>
				<img class="b1" src="../assets/images/6.jpg" alt="">
				<div class="desc">
					<p class="t1">Zhejiang Lanfeng Machine Co., Ltd</p>
					<p class="t2">
						<span>Contact</span>
						<span>Sales Department</span>
					</p>
					<p class="t2">
						<span>Tel</span>
						<span>0086-577-86587777 86585888</span>
					</p>
					<p class="t2">
						<span>Fax</span>
						<span>0086-577-86581392</span>
					</p>
					<p class="t2">
						<span style="line-height: 40px;">Address</span>
						<span>Gaoyi Road, No.2 minor District of the Hi-Tech Park, Wenzhou Economic and Technical Development Zone, Wenzhou, Zhejiang, China</span>
					</p>
					<p class="t2">
						<span>ZIP</span>
						<span>Sales Department</span>
					</p><p class="t2">
						<span>URL</span>
						<span>http://www.chinalanfeng.com</span>
					</p>
					<p class="t2">
						<span>Admin</span>
						<span>tridentteckno@sina.com</span>
					</p>
					<p class="t2">
						<span>Sale department</span>
						<span>sale@chinalanfeng.com</span>
					</p>
					<p class="t2">
						<span>After-service</span>
						<span>chinalanfeng@vip.163.com</span>
					</p>
				</div>
				<img class="b2" src="../assets/images/20160608140657_156.jpg" alt="">
				<img class="b3" src="../assets/images/7.jpg" alt="">
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
			toContact:function(){
				this.$router.push('/contact')
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
          font-size: 13px;
          span{
            cursor: pointer;
          }
          span:hover{
            color: red;
          }
				}
				.b1{
					width: 100%;
					height: 403px;
					display: block;
					margin-top: 30px;
				}
				.b2{
					width: 120px;
					height: 120px;
					display: block;
					margin-top: 10px;
				}
				.desc{
					width: 100%;
					padding-top: 15px;
					.t1{
						font-weight: bold;
						line-height: 36px;
						font-size: 20px;
					}
					.t2{
						font-size: 12px;
						width: 100%;
						overflow: hidden;
						 span:nth-child(1){
							width: 110px;
							font-weight: bold;
							color: #000;
							line-height: 20px;
							float: left;
						}
						span:nth-child(2){
							width: 500px;
							line-height: 20px;
							color: #999;
							float: left;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="main">
		<div class="banner clear">
			<div class="menu-wrap">
				<menu-wrap></menu-wrap>
				<!-- <div style="margin-top: 130px;">
					<follow-us></follow-us>
				</div> -->
			</div>
			<div class="slider">
				<swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
					<swiper-slide class="border" v-for="(item,index) in banner" :key="index">
						<img :src="item" alt="" />
					</swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
					<div class="swiper-button-prev top40 swiper-button-prev1 swiper-button1" slot="button-prev"></div>
					<div class="swiper-button-next top40 swiper-button-next1 swiper-button1" slot="button-next"></div>
				</swiper>
			</div>

		</div>
		<div class="slider-2">
			<swiper :options="swiperOption2" class="swiper-wrap" ref="mySwiper">
				<swiper-slide class="clear border" v-for="(item,index) in list" :key="index">
          <router-link :to="{ name: 'Details', params: { detail: item }}">
            <img :src="item.proSrc" alt="" />
            <div class="left" style="margin-left: 15px;">
              <p>{{item.title}}</p>
              <p>
                <span v-for="(item, index) in item.technicalTitle" :key="index">{{item}}</span>
              </p>
            </div>
          </router-link>
				</swiper-slide>
				<div class="swiper-button-prev top40 swiper-button-prev2 swiper-button2" slot="button-prev"></div>
				<div class="swiper-button-next top40 swiper-button-next2 swiper-button2" slot="button-next"></div>
			</swiper>
		</div>
		<div class="can clear">
			<div class="contactus-wrap">
				<contact-card-wrap></contact-card-wrap>
			</div>
			<div class="aboutus-wrap">
				<div class="tit" @click="toAboutUs">
					<p>ABOUT US</p>
				</div>
				<!-- <img class="img1" src="../assets/images/index_r22_c15.jpg" alt=""> -->
				<p class="des">"TRIDENT TECKNO" is a registered trademark of Henan V.Giant Machinery and Equipment Co.,Ltd , Henan V.Giant is one of the large-scale manufacturers specialized in developing and producing high quality fuel dispenser and accessory spare parts.Our products cover:Automatic Nozzles;Dispensers;Hose for Dispensers;Pumping unit;Flowmeter etc,provides the whole fuel dispenser and the necessary parts to domestic and international fuel dispenser manufactory and gas station for a long time.</p>
			</div>
			<div class="aboutus-wrap" style="margin: 0;">
				<div class="tit" @click="toContact">
					<p>NETWORK</p>
				</div>
				<img class="img2" src="../assets/images/a.png" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import MenuWrap from '@/components/menu.vue'
	import FollowUs from '@/components/followus.vue'
	import ContactCardWrap from '@/components/contact-card.vue'
  import FuelDispenserDatas from '../../static/FuelDispenser.json';
	export default {
		components: {
			MenuWrap,
			FollowUs,
			ContactCardWrap
		},
		data() {
			const that = this;
			return {
				imgIndex: 1,
				banner: [
					require('../assets/images/lb0.jpg'),
					require('../assets/images/lb1.jpg'),
					require('../assets/images/lb2.jpg'),
					require('../assets/images/lb3.png')
				],
				list: FuelDispenserDatas,
				swiperOption: {
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: {
						delay: 2000,
						stopOnLastSlide: false,
						/* 触摸滑动后是否继续轮播 */
						disableOnInteraction: false
					},
					//滑动速度
					speed: 1000,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					grabCursor: false,
					on: {
						//滑动之后回调函数
						slideChangeTransitionStart: function() {
							/* realIndex为滚动到当前的slide索引值 */
							that.imgIndex = this.realIndex - 1;
						},
					},
					//分页器设置
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						type: "bullets"
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
				},
				swiperOption2: {
					loopedSlides: 3,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: {
						delay: 2000,
						stopOnLastSlide: false,
						/* 触摸滑动后是否继续轮播 */
						disableOnInteraction: false
					},
					//滑动速度
					speed: 1000,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					grabCursor: false,
					centeredSlides: false,
					spaceBetween: 10,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					slidesPerView: 3,
				}
			};
		},
		methods:{
			toAboutUs: function() {
				this.$router.push('/aboutus')
			},
			toContact: function() {
				this.$router.push('/contact')
			},
		},
		created() {}
	}
</script>

<style lang="less" scoped="scoped">
	.main {
		width: 100%;

		.banner {
			width: 100%;
			position: relative;

			.menu-wrap {
				float: left;
				width: 243px;
			}

			.slider {
				float: right;
				width: 707px;
				height: 375px;
        overflow: hidden;

        .swiper-wrap {
          .border{
            border-top: 1px solid #ff6700
          }
        }

				.swiper-slide {
					width: 765px;
          height: 375px;
					img {
						width: 100%;
						height: 100%;
						display: block;
						z-index: 999;
					}
				}

				.swiper-button1 {
					width: 40px;
					height: 100px;
					background-repeat: no-repeat;
					outline: 0;
					cursor: pointer;
					filter: alpha(opacity=20);
					opacity: .2;
				}

				.swiper-button-prev1 {
					left: 0;
					background-image: url(../assets/images/foucs.png);
					background-position: 0 0;
					background-size: 218px 249px;
					-webkit-transition: all .3s ease-out;
					transition: all .3s ease-out;
				}

				.swiper-button-prev1:hover {
					filter: alpha(opacity=80);
					opacity: .8;
				}

				.swiper-button-next1 {
					right: 0;
					background-image: url(../assets/images/foucs.png);
					background-position: -50px 0;
					background-size: 218px 249px;
					-webkit-transition: all .3s ease-out;
					transition: all .3s ease-out;
				}

				.swiper-button-next1:hover {
					filter: alpha(opacity=80);
					opacity: .8;
				}
			}
		}

		.slider-2 {
			width: 100%;
			height: 205px;
			background-color: #f5f5f5;
			overflow: hidden;
			margin-top: 20px;

			.swiper-wrap {
        height: 100%;
        .swiper-slide{
          background: #FFFFFF;
        }
        .border{
          // border-top: 1px solid #ff6700;
          // border-right: 10px solid #f5f5f5;
          // border-left: 1px solid #ff6700;
        }
			}

			.swiper-button2 {
				width: 24px;
				height: 27px;
				background-repeat: no-repeat;
				outline: 0;
				cursor: pointer;
				background-size: 36px 260px;
			}

			.swiper-button-prev2 {
				background-image: url(../assets/images/allbgs.png);
				background-position: 0 -197px;
			}

			.swiper-button-prev2:hover {}
			.swiper-button-next2 {
				background-image: url(../assets/images/allbgs.png);
				background-position: 0 -170px;
			}

			.swiper-button-next2:hover {}

			.swiper-slide {
				width: 235px;
				height: 100%;
				padding-top: 30px;
				padding-left: 20px;

				img {
					width: 111px;
					height: 126px;
					float: left;
				}

				div {
					width: 125px;
					height: 100%;
					float: left;

					p {
						width: 100%;
						line-height: 30px;
					}

					p:nth-child(1) {
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap
					}

					p:nth-child(2) {
						height: 100px;
						line-height: 24px;
						font-size: 12px;
						overflow: hidden;
						word-wrap: break-word
					}
				}
			}
		}

		.can {
			width: 100%;
			height: 312px;
			overflow: hidden;
			margin-top: 20px;

			.contactus-wrap {
				width: 183px;
				height: 100%;
				float: left;
			}

			.aboutus-wrap {
				width: 377px;
				height: 100%;
				margin: 0 10px;
				float: left;
				background: #fff;

				.tit {
					width: 100%;
					height: 40px;
					padding: 0 15px;
					line-height: 40px;
          background-color: #ff6700;
          color: #fff;
          cursor: pointer;
					p:nth-child(1) {
						float: left;
						font-size: 14px;
					}

					p:nth-child(2) {
						cursor: pointer;
						float: right;
						margin-top: 15px;
						display: inline;
						background-position: 0px -7px;
						height: 11px;
						padding-left: 14px;
						// background-image: url(../assets/images/allbgs.png);
						// background-repeat: no-repeat;
					}
				}

				.img1 {
					width: 100%;
					height: 98px;
					display: block;
				}

				.des {
					width: 100%;
					padding: 15px;
					line-height: 26px;
          font-size: 12px;
				}

				.img2 {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}

	}
</style>

<template>
	<div class="main">
		<div class="banner clear">
			<div class="menu-wrap">
				<menu-wrap></menu-wrap>
				<follow-us></follow-us>
			</div>
			<div class="slider">
				<swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="banner.length!=0">
				  <swiper-slide v-for="(item,index) in banner" :key="index" >
				    <img :src="item" alt="" />
				  </swiper-slide>
				  <!-- 常见的小圆点 -->
				  <div class="swiper-pagination"  v-for="(item,index) in banner" :key="index" slot="pagination" ></div>
				</swiper>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuWrap from '@/components/menu.vue'
	import FollowUs from '@/components/followus.vue'
	export default {
		components: {
			MenuWrap,
			FollowUs
		},
		data() {
			const that = this;
			return {
				imgIndex: 1,
				banner: [
					require('../assets/images/20140215171733_682.jpg'),
					require('../assets/images/20140215171733_682.jpg')
				],
				swiperOption: {
					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
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
					grabCursor: true,
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
					}
				}
			};
		},
		created() {
			this.swiperOption.autoplay = {
				delay: 2000,
				stopOnLastSlide: false,
				disableOnInteraction: false
			}
		}
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
				width: 184px;
			}
			.slider {
				float: right;
				width: 766px;
				height: 405px;
				overflow: hidden;
				.swiper-slide {
					width: 765px;
					height: 404px;

					img {
						width: 100%;
						height: 100%;
						display: block;
						z-index: 999;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="footer">
		<div class="findus"  @click="toContact">
			<p>Find Us</p>
			<p>Room 1617-1618,Block A Yinfeng Commercial Bldg,No.37 Nongye Road,Jinshui District,Zhengzhou,P.R.China</p>
			<p @click="toContact">View google map</p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toContact: function() {
				this.$router.push('/contact')
			},
		}
	}
</script>

<style lang="less" scoped="scoped">
	.footer{
		width: 100%;
		margin-top: 20px;
		.findus{
      cursor: pointer;
			width: 100%;
      height: 142px;
      background: rgba(105, 101, 101, 0.6);
			color: #fff;
      padding: 20px;

			p{
				text-align: center;
			}
			p:nth-child(1){
				// color: #ff6700;
				font-size: 16px;
				line-height: 30px;
				font-weight: bold;
			}
			p:nth-child(3){
				// color: #ff6700;
				line-height: 26px;
				text-align: right;
				cursor: pointer;
			}
		}
	}
</style>

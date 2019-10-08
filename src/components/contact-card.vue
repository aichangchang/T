<template>
	<div class="wrap">
		<p class="tit" @click="toContact">CONTACT US</p>
		<div class="card">
			<p>
				<span class="t1">E-MAIL:</span>
				<!-- <span class="t2">ADMIN</span> -->
				<span class="t3">tridentteckno@sina.com</span>
				<span class="t2">Tel:</span>
				<span class="t3">+86 13607663327</span>
				<span class="t2">Address:</span>
				<span class="t3">Room 1617-1618,Block A Yinfeng Commercial Bldg,No.37 Nongye Road,Jinshui District,Zhengzhou,P.R.China</span>
			</p>
		</div>
		<!-- <div class="card">
			<p>
				<span class="t1">TEL</span>
				<span class="t3">0086-577-86587777
				<br/>0086-577-86585888</span>
			</p>
		</div>
		<div class="card">
			<p>
				<span class="t1">FAX</span>
				<span class="t3">0086-577-86581392</span>
			</p>
		</div> -->
	</div>
</template>
<script>
	export default {
		methods:{
			toContact: function() {
				this.$router.push('/contact')
			},
		},
		created() {}
	}
</script>

<style lang="less" scoped="scoped">
	.wrap {
		width: 183px;
		height: 100%;

		p {
			padding-left: 15px;
		}

		.tit {
			width: 100%;
			height: 40px;
			line-height: 40px;
			background-color: #ff6700;
      color: #fff;
      cursor: pointer;
		}

		.card {
			width: 100%;
			background: #fff;
			padding: 5px 15px;
			p {
				padding: 0;
        border-bottom: 1px solid #eee;
			}

			span {
				width: 100%;
				display: block;
				font-size: 12px;
			}

			.t1 {
				// color: #ff6700;
				font-weight: bold;
				margin-bottom: 1px;
				line-height: 26px;
			}

			.t2 {
				font-weight: bold;
				margin-bottom: 1px;
				line-height: 26px;

			}

			.t3 {
				margin-bottom: 10px;
				line-height: 22px;

			}
		}
	}
</style>

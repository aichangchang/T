<template>
	<div class="wrap">
		<p class="tit">CONTACT US</p>
		<div class="card">
			<p>
				<span class="t1">E-MAIL</span>
				<span class="t2">ADMIN</span>
				<span class="t3">chinalanfeng@vip.sina.com</span>
				<span class="t2">SALE DEPARTMENT</span>
				<span class="t3">sale@chinalanfeng.com</span>
				<span class="t2">After-service</span>
				<span class="t3">chinalanfeng@vip.163.com</span>
			</p>
		</div>
		<div class="card">
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
		</div>
	</div>
</template>

<script>
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
			background-color: #db261f;
			color: #fff;
		}

		.card {
			width: 100%;
			background: #fff;
			padding:5px 15px;
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
				color: #db261f;
				font-weight: bold;
				margin-bottom: 1px;
				line-height: 18px;
			}

			.t2 {
				font-weight: bold;
				margin-bottom: 1px;
				line-height: 18px;

			}

			.t3 {
				margin-bottom: 10px;
				line-height: 14px;

			}
		}
	}
</style>

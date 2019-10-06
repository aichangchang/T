<template>
	<div class="follow">
		<p>Follow us</p>
		<div class="list clear">
			<a class="icon-1" href="javascript:;"></a>
			<a class="icon-2" href="javascript:;"></a>
			<a class="icon-3" href="javascript:;"></a>
			<a class="icon-4" href="javascript:;"></a>
			<a class="icon-5" href="javascript:;"></a>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.follow {
		margin-top: 15px;
		height: 62px;
		padding-left: 14px;
		margin-top: 20px;
		background-color: #fff;
		border-bottom: 1px #d0d1d1 solid;
		border-right: 1px #d0d1d1 solid;

		p {
			padding-top: 2px;
			height: 28px;
			line-height: 28px;
			color: #999;
		}

		.list {
			width: 100%;

			a {
				height: 20px;
				margin-left: 5px;
				float: left;
				background-image: url(../assets/images/allbgs.png);
				background-repeat: no-repeat;
				display: inline-block;
				margin-top: 1px;
				vertical-align: text-top;
			}

			.icon-1 {
				background-position: 0px -103px;
				height: 20px;
				padding-left: 20px;
				margin-left: 0;
			}

			.icon-2 {
				background-position: 0px -65px;
				height: 19px;
				padding-left: 22px;
			}

			.icon-3 {
				background-position: 0px -84px;
				height: 19px;
				padding-left: 21px;
			}

			.icon-4 {
				background-position: 0px -18px;
				height: 14px;
				margin-top: 3px;
				padding-left: 38px;
			}

			.icon-5 {
				background-position: 0px -123px;
				height: 20px;
				padding-left: 26px;
			}
		}
	}
</style>

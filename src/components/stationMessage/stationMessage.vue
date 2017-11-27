<template>
	<div class="page station-message">
		<div class="wrapper">
			<div class="bar">
				<div class="bar-title">
					<div>系统通知</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'station-message',

		props: [
		],

		data: function () {
			return {
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.station-message {
		$wrapperWidth   : 1200px;
		$barTitleHeight : 32px;
		$filterHeight   : 54px;

		.wrapper {
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding-top: 8px;
			padding-bottom: 20px;

			.bar {
				font-size: 13px;
				width: 100%;

				.bar-title {
					border-bottom : 1px solid #d43328;
					width: 100%;

					div {
						background-color: #d43328;
						color: #FFF;
						height: $barTitleHeight;
						line-height: $barTitleHeight;
						text-align: center;
						width: 94px;
					}
				}
			}

			.records {
				list-style: none;
				margin-top: 40px;
				width: 100%;

				.records-item {
					border-bottom: 1px solid #e6e6e6;
					padding-bottom: 36px;
					margin-bottom: 36px;
				}
			}
		}
	}
</style>
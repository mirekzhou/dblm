<template>
	<div class="home-progress">
		<div class="left-part">
			<div class="progress-bar border-radius">
				<div class="current border-radius" :style="'width:'+ getPercent">{{getPercent}}</div>
			</div>
		</div>

		<div class="right-part">
			<div class="current-qty">当前参与：{{item.current}}</div>
			<div class="available-qty">剩余：{{item.total - item.current}}</div>
			<div class="total-qty">总需人次：{{item.total}}次</div>
			<div class="clear"></div>
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	export default {
		name: 'home-progress',

		props: ['item'],

		data: function () {
			return {
			}
		},

		methods: {
		},

		computed: {
		 	getPercent: function () {
		 		var p = parseInt((this.item.current / this.item.total) * 100);

			    return p + '%';
		  	}
		}
	}
</script>

<style lang="scss" scoped>
	.home-progress {
		color: #000;
		width: 560px;

		.left-part {
			font-size:12px;
			float: left;
			width: 284px;

			.progress-bar {
				border-radius: 50px;
				width: 284px;
				height: 18px;
				line-height: 18px;
				background-color: #E5E5E5;

				.current {
					background-color: #d43328;
					border-radius: 50px;
					color: #FFF;
					height: 100%;
					text-align: center;
				}
			}
		}

		.right-part {
		 	font-size: 12px;
		 	float: left;
		 	margin-left: 8px;
		 	width: 266px;

			.current-qty {
				color: #333333;
				float: left;
				height: 18px;
				line-height: 18px;
			}

			.available-qty {
				color: #333333;
				float: left;
				height: 18px;
				line-height: 18px;
				margin-left: 8px;
			}

			.total-qty {
				color: #666666;
				float: left;
				height: 18px;
				line-height: 18px;
				margin-left: 17px;
			}
		}
	}
</style>
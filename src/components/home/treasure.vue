<template>
	<div class="treasure">
			<div class="treasure-inner" v-for="item in treasureData">
				<div class="cycle">
					<p>{{item.cycle}}</p>
				</div>
				<div class="box">
					<img src="../../assets/kaijiang.jpg" alt="">
					<p class="prize">{{item.prize}}</p>
					<p class="price">市场参考价：<span>{{item.price}}</span></p>

					<div class="progress"></div>
				</div>

				<div class="countdown"></div>
			</div>
			
	</div>
</template>

<script>
	export default {
		name: 'treasure',

		data: function () {
			return {
				treasureData: [
					{
						cycle: '125545121212期',
						prize: 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						price: '8999'
					},
					{
						cycle: '125545121212期',
						prize: 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						price: '8999'
					},
					{
						cycle: '125545121212期',
						prize: 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						price: '8999'
					},
					{
						cycle: '125545121212期',
						prize: 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						price: '8999'
					},
				]
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$boxWidth		: 	 510px;
	$imgHeight		:	 275px;
	.treasure {
		color: #6e6e6e;

		.treasure-inner {
			float: left;
			width: 596px;
			height: 504px;
			text-align: center;
			position: relative;
			border: 1px solid #ececec;

			&:nth-child(2n) {
				float: right;
			}


			.cycle {
				background: #d53328;
				position: absolute;
				top: 0;
				left: 0;
				width: 143px;
				height: 34px;
				color: #fff;
				font-size: 12px;
				padding-top: 10px; 
			}

			.box {
				width: $boxWidth;
				margin: 0 auto; 
				text-align: left;

				img {
					width: 100%;
					height: $imgHeight;
				}

				.prize {
					line-height: 26px;
				}

				.price {
					color: #b7b7b7;

					span {
						color: #d63328;
					}
				}

				.progress {
					height: 47px;
					margin-top: 12px;
					background: green;
				}
			}
 
			.countdown {
				background: #ececec;
				width: 100%;
				height: 74px;
				position: absolute;
				bottom: 0;
			}
		}
	}
</style>
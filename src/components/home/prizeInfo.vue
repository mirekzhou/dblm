<template>
	<div class="prize-info clear">
		<div class="box" v-for="item in prizeInfoData">
			<img src="../../assets/prize_info_1.jpg" alt="">

			<div class="shade">
				<p>{{item.title}}</p>
				<p class="red">{{item.cycle}}</p>
			</div>

			<div class="info-wrap">
				<div class="info-inner">
					<i class="left"></i>
					<div class="left">
						<p>中奖用户：{{item.phoneNumber}}</p>
						<p>中奖号码：{{item.winNumber}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	export default {
		name: 'prize-info',

		props: [
		],

		data: function () {
			return {
				prizeInfoData: [
					{
						imgUrl: '../../assets/prize_info_1.jpg',
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'

					},
					{
						imgUrl: '../../assets/prize_info_1.jpg',
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'

					},
					{
						imgUrl: '../../assets/prize_info_1.jpg',
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					}
				]
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$infoWidth		:	384px;
	.prize-info {
		.box {
			position: relative;
			height: 339px;
			float: left;
			margin-right: 5px;

			img {
				width: $infoWidth;
				height: 269px;
			}
			
			.info-wrap {
				width: $infoWidth;
				height: 90px;
				position: absolute;
				bottom: 0;
				color: #fff;
				background: url("../../assets/common-sprite.png") 0 -248px;

				.info-inner {
					width: 272px;
					height: 54px;
					margin: 20px 0px 0 50px;

					i {
						display: inline-block;
						width: 54px;
						height: 54px;
						border: 2px solid white;
						border-radius: 50%;
						background: url("../../assets/prize_info_header.png");
					}

					div {
						margin: 10px 0 0 30px;
					}
				}
			}

			.red {
				color: #d53328;
			}

			.shade {
				position: absolute;
				width: 251px;
				height: 81px;
				background-color: rgba(0,0,0,0.2);
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				text-align: center;
				padding-top: 25px;
				color: #fff;
			}
		}

	}
</style>
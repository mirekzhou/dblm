<template>
	<div class="win-info">
		<div class="wrapper">
			<div class="icon-wrap left">
				<i class="icon-camera"></i>
				<span>正在夺宝</span>
			</div>

			<div class="win-user left" v-for="item in winUserData">
				<img :src="item.imgUrl" class="left">
				<div class="user-data left">
					<span>{{item.number}}</span>
					<span class="prize">{{item.prize}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import headerImg from '../../assets/header.png';

	export default {
		name: 'win-info',

		props: [
		],

		data: function () {
			return {
				winUserData: [
					{
						number: '13257422145',
						prize: '康师傅来一桶酸菜牛肉24盒装',
						imgUrl: headerImg
					},
					{
						number: '13257422145',
						prize: 'IPHONE8 128G',
						imgUrl: headerImg
					},
					{
						number: '13257422145',
						prize: 'IPHONE8 128G',
						imgUrl: headerImg
					},
				],
			}
		},

		components: {
			
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$topWidth				: 19px;
	.win-info {
		float: left;
		width: 100%;
		height: 93px;

		.wrapper {
			margin: 0 auto;

			.icon-wrap {
				margin: 30px 60px 0 0;
				.icon-camera {
					display: inline-block;
					width: 29px;
					height: 20px;
					background: url("../../assets/common-sprite.png") 0 -81px;
					vertical-align: top;
				}
			}

			.win-user {
				margin-top: $topWidth;
				display: inline-block;
				margin-right: 10px;

				&:last-child {
					margin-right: 0;
				}

				img {
					width: 46px;
					height: 46px;
					margin-right: 30px;
				}

				.user-data {
					width: 262px;
					font-size: 13px;
					margin-top: 10px;

					.prize {
						color: #d94941;
						font-size: 15px;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="win-dialog-bg">
		<div class="win-dialog">
			<div class="close" v-on:click="hideDialog">✕</div>

			<div class="title">联盟夺宝成功!</div>

			<div class="content-zone">
				<div class="left-part">
					<img :src="imgSrc" />
				</div>

				<div class="right-part">
					<div class="lucky-code">幸运码：{{luckyCode}}</div>
					<div class="text">成功帮助{{friend}}获取幸运码</div>
				</div>

				<div class="clear"></div>
			</div>

			<div class="button-zone">
				<button class="close-dialog" v-on:click="hideDialog">关闭</button>
			</div>
		</div>
	</div>
</template>

<script>
	import winLosePicture from '../../assets/win-lose-picture.jpg';

	export default {
		name: 'shareDialog',

		data: function () {
			return {
				imgSrc     : winLosePicture,
				luckyCode  : 10000121,
				friend     : 'Kris'
			}
		},

		methods: {
			hideDialog: function () {
				this.$store.dispatch('hideWinDialog');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.win-dialog-bg {
		background: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;

		.win-dialog {
			background: #FFF;
			color: #000;
			height: 298px;
			width: 465px;
			padding: 0 20px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -233px;
			margin-top: -149px;

			.close {
				cursor: pointer;
				font-size: 20px;
				position: absolute;
				right: 10px;
				top: 0px;
			}

			.title {
				color: #333333;
				font-size: 20px;
				height: 60px;
				line-height: 60px;
				text-align: center;
			}

			.content-zone {
				height: 155px;
				width: 376px;
				margin: 0 auto;

				.left-part {
					float: left;
					width: 176px;
				}

				.right-part {
					float: left;
					font-size: 16px;
					margin-left: 30px;
					width: 170px;

					.lucky-code {
						color: #d53328;
						margin-top: 44px;
					}

					.text {
						color: #666666;
						margin-top: 13px;
					}
				}
			}

			.button-zone {
				width: 376px;
				margin: 0 auto;
				margin-top: 35px;
				text-align: center;

				.close-dialog {
					background-color: #d53328;
					border: 0;
					border-radius: 5px;
					cursor: pointer;
					color: #FFF;
					font-size: 14px;
					height: 32px;
					line-height: 32px;
					padding: 0;
					margin: 0;
					outline: none;
					text-align: center;
					width: 98px;
				}
			}
		}
	}
</style>
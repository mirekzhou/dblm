<template>
	<div class="lose-dialog-bg">
		<div class="lose-dialog">
			<div class="close" v-on:click="hideDialog">✕</div>

			<div class="title">联盟夺宝失败!</div>

			<div class="content-zone">
				<div class="left-part">
					<img :src="imgSrc" />
				</div>

				<div class="right-part">
					<div class="text">本期夺宝已经结束，暂无法进行助攻，请参与其他夺宝活动。</div>
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
				imgSrc     : winLosePicture
			}
		},

		methods: {
			hideDialog: function () {
				this.$store.dispatch('hideLoseDialog');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lose-dialog-bg {
		background: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;

		.lose-dialog {
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

					.text {
						color: #666666;
						margin-top: 53px;
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
<template>
    <div class="win-alert" v-show="showWinAlert">
	    <div class="wrapper">
          	<div class="title">
            	夺宝成功
            	<span class="close" v-on:click="hide">✕</span>
         	</div>

          	<div class="content">
            	<div class="section1">
            		恭喜您获得第
            		<span>{{winAlertData.issueDate}}期</span>
            	</div>
            	<div class="section2">
            		幸运码：
            		<span>{{winAlertData.luckyCode}}</span>
            	</div>
            	<div class="section3">夺宝助攻链接已产生，赶快分享让好友为你助攻</div>
          	</div>

          	<div class="buttons">
            	<button v-on:click="hide">知道了</button>
          	</div>
	    </div>
    </div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'win-alert',

		props: [],

		methods: {
			hide: function () {
				this.$store.dispatch('hideWinAlert');
			}
		},

		computed: mapState({
			showWinAlert: function (state) {
				return state.showWinAlert;
			},

			winAlertData: function (state) {
				return state.winAlertData;
			}
		}),
	}
</script>

<style lang="scss" scoped>
	.win-alert {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.8);
		z-index: 999;

		.wrapper {
			width: 378px;
			height: 206px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background: #fff;
			color: #8c8c8c;
			z-index: 999;

			.title {
				color: #000;
				font-size: 20px;
				height: 60px;
				line-height: 60px;
				width: 100%;
				text-align: center;
				position: relative;

				.close {
					cursor: pointer;
					position: absolute;
					top: -14px;
					right: 12px;

					&:hover {
						color: #8c8c8c;
					}
				}
			}

			.content {
				margin-top: 15px;

				.section1 {
					font-size: 16px;
					text-align: center;

					span {
						color: #d43328;
					}
				}

				.section2 {
					font-size: 16px;
					text-align: center;

					span {
						color: #d43328;
					}
				}

				.section3 {
					font-size: 12px;
					margin-top: 12px;
					text-align: center;
				}
			}

			.buttons {
				text-align: center;
				margin-top: 15px;
				width: 100%;

				button {
					background-color: #d43328;
					border: 0;
					border-radius: 4px;
					color: #FFF;
					cursor: pointer;
					font-size: 14px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					outline: none;
					width: 100px;
				}
			}
		}
	}
</style>
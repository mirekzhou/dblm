<template>
	<div class="page station-message">
		<div class="wrapper">
			<div class="bar">
				<div class="bar-title">
					<div>系统通知</div>
				</div>
			</div>

			<div class="content" v-show="messages.length > 0">
				<div class="section1">
					<span class="seclect-all" v-on:click="selectAll">全选</span>
					<span class="cancel-all" v-on:click="cancelAll">反选</span>
				</div>

				<div class="section2">
					<message-item v-for="item in messages" :item="item" key="item">
					</message-item>
				</div>

				<div class="section3">
					<div class="left-part">
						<button>标记已读</button>
						<button>全部已读</button>
						<button>删除选中</button>
					</div>

					<div class="right-part">
						<pager 	:pageIndex="pageIndex"
								:totalPage="totalPage"
								v-on:pageIndexChanged="pageIndexChanged">
						</pager>
					</div>
				</div>
			</div>

			<div class="no-data" v-show="messages.length == 0">
				<span class="speaker"></span>
				<span class="text">当前没有任何通知</span>
			</div>
		</div>
	</div>
</template>

<script>
	import messageItem from './messageItem';
	import pager       from '../common/pager2';

	export default {
		name: 'station-message',

		props: [
		],

		data: function () {
			return {
				pageIndex: 1,
				totalPage: 7,
				pageSize: 4,

				messages: []
			}
		},

		components: {
			'message-item' : messageItem,
			'pager' : pager
		},

		mounted: function () {
			this.getData();
		},

		methods: {
			getData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/stationMessage.json',
					callback: function (data) {
						var arr = data.data
						that.messages  = arr;
						that.totalPage = arr.length % that.pageSize == 0? Math.floor(arr.length/that.pageSize) : Math.floor((arr.length/that.pageSize) + 1);
					}
				};

				this.$store.dispatch('get', opt);
			},

			pageIndexChanged: function (value) {
				this.pageIndex = value;
			},

			selectAll: function () {
				var i;

				for (i = 0; i < this.messages.length; i++) {
					this.messages[i].checked = 'checked';
				}
			},

			cancelAll: function () {
				var i;

				for (i = 0; i < this.messages.length; i++) {
					this.messages[i].checked = false;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.station-message {
		$wrapperWidth   : 1200px;
		$barTitleHeight : 32px;

		.wrapper {
			color: #414141;
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

			.content {
				border: 1px solid #e5e5e5;
				border-top: 0;
				height: 432px;
				width: 100%;
				padding: 15px 18px 24px 18px;

				.section1 {
					color: #000;
					cursor: pointer;
					font-size: 16px;
					padding-left: 10px;

					span {
						&:hover {
							color: #888888;
						}
					}

					.cancel-all {
						margin-left: 32px;
					}
				}

				.section3 {
					padding-left: 10px;
					margin-top: 20px;

					.left-part {
						float: left;
						height: 80px;
						line-height: 80px;
						width: 450px;

						button {
							cursor: pointer;
							margin-left: 32px;

							&:first-child {
								margin-left: 0;
							}
						}
					}

					.right-part {
						float: right;
						height: 80px;
						line-height: 80px;
						width: 700px;
						text-align: right;
					}
				}
			}

			.no-data {
				border: 1px solid #e5e5e5;
				border-top: 0;
				font-size: 14px;
				height: 432px;
				text-align: center;
				width: 100%;

				.speaker {
					background-image: url("../../assets/no-data-sprite.png");
					background-position: 0 -51px;
					display: inline-block;
					height: 54px;
					margin-top: 196px;
					width: 63px;
				}

				.text {
					display: inline-block;
					text-align: center;
					line-height: 30px;
					width: 100%;
				}
			}
		}
	}
</style>
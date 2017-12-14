<template>
	<div class="my-lucky-board">
		<div class="title">我的幸运码：{{luckyNumber}}</div>

		<div class="content" v-bind:style="{height: len > 3? '500px' : '310px'}">
			<div class="table">
				<div class="thead">
					<div class="tr">
						<div class="left-part">
							<div class="td td1">助攻好友</div>
							<div class="td td2">日期</div>
							<div class="td td3">夺宝助攻获得号码</div>
							<div class="clear"></div>
						</div>

						<div class="right-part">
							<div class="td td1">助攻好友</div>
							<div class="td td2">日期</div>
							<div class="td td3">夺宝助攻获得号码</div>
							<div class="clear"></div>
						</div>

						<div class="clear"></div>
					</div>
				</div>

				<div class="tbody" v-bind:style="{height: len > 3? '476px' : '285px'}">
					<div class="tr" v-for="i in len">
						<div class="left-part">
							<div class="td td1">
								<span class="head-icon"></span>
								<span class="text">{{leftList[i-1].phone}}</span>
							</div>
							<div class="td td2">{{leftList[i-1].datetime}}</div>
							<div class="td td3">
								<span>{{leftList[i-1].helpNumber}}</span>
							</div>
							<div class="clear"></div>
						</div>

						<div class="right-part" v-if="rightList[i-1]">
							<div class="td td1">
								<span class="head-icon"></span>
								<span class="text">{{rightList[i-1].phone}}</span>
							</div>
							<div class="td td2">{{rightList[i-1].datetime}}</div>
							<div class="td td3">
								<span>{{rightList[i-1].helpNumber}}</span>
							</div>
							<div class="clear"></div>
						</div>

						<div class="clear"></div>
					</div>
				</div>

				<div class="line" v-bind:style="{height: len > 3? '470px' : '280px'}"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import headImg from '../../../assets/prize_info_header.png';

	export default {
		name: 'my-lucky-board',

		props: [
		],

		data: function () {
			return {
				luckyNumber: '10101010',
				list: []
			}
		},

        mounted () {
            this.getData()
        },

        methods: {
            getData: function () {
                var that = this;
                var opt = {
                    localUrl: true,
                    url: '../../../data/myLuckyBoard.json',
                    callback: function (data) {
                        var i;
                        var arr = data.data;

                        for (i = 0; i < arr.length; i++) {
                            arr[i].headImg = headImg;
                        }

                        that.list  = arr;
                        that.totalPage = arr.length % that.pageSize == 0? Math.floor(arr.length/that.pageSize) : Math.floor((arr.length/that.pageSize) + 1);
                    }
                };

                this.$store.dispatch('get', opt);
            }
        },

		computed: {
			leftList: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i % 2 == 0) {
						arr.push(this.list[i]);
					}
				}

				return arr;
			},

			rightList: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i % 2 == 1) {
						arr.push(this.list[i]);
					}
				}

				return arr;
			},

			len: function () {
				return this.leftList.length;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-lucky-board {
		margin-top: 30px;
		width: 100%;

		.title {
            background-color: #d43328;
            color: #FFF;
            height: 50px;
            line-height: 50px;
            text-align: center;
		}

		.content {
			border: 1px solid #F0F0F0;
			border-top: 0;
			height: 500px;

			.table {
				padding: 0 18px 0 35px;
				position: relative;

				.tr {
					width: 100%;

					.left-part {
						float: left;
					}

					.right-part {
						float: right;
					}

					.td {
						float: left;
						text-align: center;
					}

					.td1 {
						width: 180px;

						.head-icon {
							background-image: url("../../../assets/header.png");
							display: inline-block;
							width: 46px;
							height: 46px;
							line-height: 46px;
							margin-right: 20px;
							vertical-align: middle;
						}

						.text {
							vertical-align: top;
						}
					}

					.td2 {
						width: 200px;
					}

					.td3 {
						width: 140px;

						span {
							background-color: #e1e1e1;
							border-radius: 4px;
							padding: 0 20px;
						}
					}
				}

				.thead {
					.tr {
						height: 25px;
						margin-top: 10px;

						.td {
							height: 25px;
							line-height: 25px;
						}
					}
				}

				.tbody {
					overflow-y: auto;

					.tr {
						.td {
							border-bottom: 1px solid #F0F0F0;
							height: 95px;
							line-height: 95px;
						}

						&:first-child {
							margin-top: -10px;
						}

						&:last-child {
							.td {
								border-bottom: 0;
							}
						}
					}
				}

				.line {
					height: 445px;
					width: 1px;
					border-right: 1px solid #F0F0F0;
					position: absolute;
					top: 5px;
					left: 50%;
				}
			}
		}
	}
</style>
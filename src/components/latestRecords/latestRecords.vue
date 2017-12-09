<template>
	<div class="page latest-records">
		<div class="wrapper">
			<div class="bar">
				<div class="left-part">
					<div class="text">开奖时间:</div>

					<ul>
						<li v-for="item in timeOptions"
							v-bind:class="{'active': item.value == time}"
							v-on:click="setCurrentTime(item.value)">
							{{item.name}}
						</li>

						<div class="clear"></div>
					</ul>

					<div class="clear"></div>
				</div>

				<div class="middle-part">
					<div class="text">开奖状态:</div>

					<ul>
						<li v-for="item in statusOptions"
							v-bind:class="{'active': item.value == status}"
							v-on:click="setCurrentStatus(item.value)">
							{{item.name}}
						</li>

						<div class="clear"></div>
					</ul>

					<div class="clear"></div>
				</div>

				<div class="right-part">
					<span class="text">商品名称：</span>
					<input v-model="name" />
					<span class="search">搜索</span>
				</div>
			</div>

			<ul class="records">
				<li class="records-item" v-for="item in records">
					<issue-item :item="item"></issue-item>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/armani-watch.png';
	import IssueItem  from './issueItem';

	export default {
		name: 'latest-records',

		props: [
		],

		data: function () {
			return {
				timeOptions: [
					{name: '全部',      value: '0'},
					{name: '最近1天',   value: '1'},
					{name: '最近3天',   value: '2'},
					{name: '最近1个月', value: '3'}
				],

				statusOptions:  [
					{name: '全部',      value: '0'},
					{name: '开奖失败',  value: '1'},
					{name: '已开奖',    value: '2'}
				],

				time : '0',
				status: '0',
				name: '',

				records: [
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 2,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 3,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 4,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 5,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					}
				]
			}
		},

		components: {
			'issue-item' : IssueItem
		},

		methods: {
			setCurrentTime: function (value) {
				this.time = value;
			},

			setCurrentStatus: function (value) {
				this.status = value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.latest-records {
		$wrapperWidth   : 1200px;
		$barHeight      : 78px;

		.wrapper {
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding-top: 8px;
			padding-bottom: 20px;

			.bar {
				border: 1px solid #dedede;
				color: #676767;
				font-size: 13px;
				height: $barHeight;
				padding-left: 20px;
				padding-right: 38px;
				width: 100%;

				.left-part {
					float: left;
					width: 390px;

					.text {
						color: #676767;
						float: left;
						height: $barHeight;
						line-height: $barHeight;
						width: 80px;
						text-align: center;
					}

					ul {
						float: left;
						list-style: none;

						li {
							color: #676767;
							cursor: pointer;
							float: left;
							height: $barHeight;
							line-height: $barHeight;
							padding: 0 10px;
						}

						.active {
							color: #d43328;
							font-weight: bold;
						}
					}
				}

				.middle-part {
					float: left;
					width: 350px;

					.text {
						color: #676767;
						float: left;
						height: $barHeight;
						line-height: $barHeight;
						width: 80px;
						text-align: center;
					}

					ul {
						float: left;
						list-style: none;

						li {
							color: #676767;
							cursor: pointer;
							float: left;
							height: $barHeight;
							line-height: $barHeight;
							padding: 0 10px;
						}

						.active {
							color: #d43328;
							font-weight: bold;
						}
					}
				}

				.right-part {
					float: right;
					height: $barHeight;
					line-height: $barHeight;
					width: 400px;
					text-align: right;

					input {
						height: 22px;
						text-indent: 10px;
						width: 220px;
					}

					.search {
						background-color: #d43328;
						color: #FFF;
						cursor: pointer;
						display: inline-block;
						font-size: 12px;
						height: 28px;
						line-height: 28px;
						margin-left: 18px;
						text-align: center;
						width: 60px;
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
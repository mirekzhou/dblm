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

			<div class="pager-zone">
				<pager 	:pageIndex="pageIndex"
						:totalPage="totalPage"
						v-on:pageIndexChanged="pageIndexChanged">
				</pager>
			</div>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/armani-watch.png';
	import IssueItem  from './issueItem';
	import pager      from '../common/pager2';

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

				pageIndex: 1,
				totalPage: 7,

				//最新开奖列表只有2种状态：已开奖(drawStatus = 0)和组件联盟(drawStatus = 6)失败
				list: [
					{
						'issueDate': '20170203001',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '100',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203002',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '200',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203003',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '300',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203004',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '400',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203005',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '500',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203006',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '600',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203007',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '700',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203008',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '800',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203009',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '900',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203010',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1000',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203011',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1100',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203012',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1200',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203013',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1300',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203014',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1400',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203015',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1500',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203016',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1600',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203017',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1700',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203018',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1800',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203019',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1900',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203020',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '2000',
						'drawStatus': 0,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203021',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '2100',
						'drawStatus': 6,
						'imgSrc': watchImage,
						'deadline': '09:03:23 2017-12-19',
						'progressData': {
							'total': 220,
							'current': 120
						}
					}
				],

				records: [],
			}
		},

		mounted: function () {
			this.getData();
		},

		components: {
			'issue-item' : IssueItem,
			'pager'      : pager
		},

		methods: {
			getData: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i >= (this.pageIndex - 1) * 3 && i < this.pageIndex * 3) {
						arr.push(this.list[i]);
					}
				}

				this.records = arr;
			},

			pageIndexChanged: function (value) {
				this.pageIndex = value;
				this.getData();
			},

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

					&:last-child {
						border-bottom: none;
					}
				}
			}

			.pager-zone {
				text-align: center;
			}
		}
	}
</style>
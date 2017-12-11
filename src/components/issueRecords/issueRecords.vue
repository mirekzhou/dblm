<template>
	<div class="page issue-records">
		<div class="wrapper">
			<div class="bar">
				<div class="bar-title">
					<div>夺宝记录</div>
				</div>

				<div class="filter">
					<div class="text">状态:</div>

					<ul>
						<li v-for="item in types"
							v-bind:class="{'active': item.value == type}"
							v-on:click="setCurrentType(item.value)">
							{{item.name}}
						</li>

						<div class="clear"></div>
					</ul>

					<div class="clear"></div>
				</div>
			</div>

			<ul class="records" v-show="records.length > 0">
				<li class="records-item" v-for="item in records">
					<issue-item :item="item"></issue-item>
				</li>
			</ul>

			<div class="pager-zone" v-show="records.length > 0">
				<pager 	:pageIndex="pageIndex"
						:totalPage="totalPage"
						v-on:pageIndexChanged="pageIndexChanged">
				</pager>
			</div>

			<div class="no-data" v-show="records.length == 0">
				<div><span class="pig"></span></div>
				<span class="text">您未参与任何夺宝，请多多参与</span>
			</div>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/armani-watch.png';
	import IssueItem  from './issueItem';
	import pager      from '../common/pager2';

	export default {
		name: 'issue-records',

		props: [
		],

		data: function () {
			return {
				pageIndex: 1,
				totalPage: 3,

				types: [
					{name: '全部',     value: '0'},
					{name: '夺宝中',   value: '1'},
					{name: '开奖失败', value: '2'},
					{name: '等待开奖', value: '3'},
					{name: '中奖',     value: '4'},
					{name: '未中奖',   value: '5'}
				],

				type : '0',

				records: [],
				list: [
					{
						'issueDate': '20170203001',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '100',
						'drawStatus': 1,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203002',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '200',
						'drawStatus': 2,
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
						'drawStatus': 3,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203004',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '400',
						'drawStatus': 4,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203005',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '500',
						'drawStatus': 5,
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
						'drawStatus': 1,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203007',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '700',
						'drawStatus': 2,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203008',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '800',
						'drawStatus': 3,
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
						'drawStatus': 4,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203010',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1000',
						'drawStatus': 5,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203011',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1100',
						'drawStatus': 1,
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
						'drawStatus': 2,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203013',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1300',
						'drawStatus': 3,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					},
					{
						'issueDate': '20170203014',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '1400',
						'drawStatus': 4,
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
						'drawStatus': 5,
						'imgSrc': watchImage,
						'progressData': {
							'total': 220,
							'current': 120
						}
					}
				]
			}
		},

		components: {
			'issue-item' : IssueItem,
			'pager'      : pager
		},

		mounted: function () {
			this.getData();
		},

		methods: {
			getData: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i >= (this.pageIndex - 1) * 5 && i < this.pageIndex * 5) {
						arr.push(this.list[i]);
					}
				}

				this.records = arr;
			},

			pageIndexChanged: function (value) {
				this.pageIndex = value;
				this.getData();
			},

			setCurrentType: function (value) {
				this.type = value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.issue-records {
		$wrapperWidth   : 1200px;
		$barTitleHeight : 32px;
		$filterHeight   : 54px;

		.wrapper {
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

				.filter {
					border: 1px solid #dedede;
					height: $filterHeight;
					width: 100%;

					.text {
						color: #676767;
						float: left;
						height: $filterHeight;
						line-height: $filterHeight;
						width: 60px;
						text-align: center;
					}

					ul {
						float: left;
						list-style: none;

						li {
							color: #676767;
							cursor: pointer;
							float: left;
							height: $filterHeight;
							line-height: $filterHeight;
							padding: 0 10px;
						}

						.active {
							color: #d43328;
							font-weight: bold;
						}
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
						border-bottom: 0;
					}
				}
			}

			.pager-zone {
				text-align: center;
			}

			.no-data {
				color: #414141;
				border-top: 0;
				font-size: 14px;
				height: 500px;
				text-align: center;
				width: 100%;

				div {
					margin-top: 196px;
					width: 100%;
					text-align: center;

					.pig {
						background-image: url("../../assets/no-data-sprite.png");
						background-position: 0 -166px;
						display: inline-block;
						height: 80px;
						width: 80px;
					}
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
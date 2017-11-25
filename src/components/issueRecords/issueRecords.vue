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
		name: 'issue-records',

		props: [
		],

		data: function () {
			return {
				types: [
					{name: '全部',     value: '0'},
					{name: '夺宝中',   value: '1'},
					{name: '开奖失败', value: '2'},
					{name: '等待开奖', value: '3'},
					{name: '中奖',     value: '4'},
					{name: '未中奖',   value: '5'}
				],

				type : '0',

				records: [
					{
						'issueDate': '20170203112',
						'description': 'Armani 阿玛尼圆形石英表男士防水腕表潮流运动手表AR6099/5905',
						'price': '6388',
						'drawStatus': 1,
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
				}
			}
		}
	}
</style>
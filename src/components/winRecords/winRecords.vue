<template>
	<div class="page win-records">
		<div class="wrapper">
			<win-item v-for="item in records" :item="item" key="item" v-show="records.length > 0">
			</win-item>

			<div class="pager-zone" v-show="records.length > 0">
				<pager 	:pageIndex="pageIndex"
						:totalPage="totalPage"
						v-on:pageIndexChanged="pageIndexChanged">
				</pager>
			</div>

			<div class="no-data" v-show="records.length == 0">
				<span class="hand-shake"></span>
				<span class="text">您暂未中奖，请多多参与</span>
			</div>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/wine.jpg';
	import pager      from '../common/pager2';
	import winItem    from './winItem';

	export default {
		name: 'win-records',

		data: function () {
			return {
				pageSize: 3,
				pageIndex: 1,
				totalPage: 0,

				records: [],
				list: []
			}
		},

		components: {
			'win-item' : winItem,
			'pager'    : pager
		},

		mounted: function () {
			this.getAllData();
		},

		methods: {
			getAllData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/winRecords.json',
					callback: function (data) {
						var i;
						var arr = data.data;

						for (i = 0; i < arr.length; i++) {
							arr[i].imgSrc = watchImage;
						}

						that.list = arr;
						that.totalPage = arr.length % that.pageSize == 0? Math.floor(arr.length/that.pageSize) : Math.floor((arr.length/that.pageSize) + 1);
						that.getData();
					}
				};

				this.$store.dispatch('get', opt);
			},

			getData: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i >= (this.pageIndex - 1) * this.pageSize && i < this.pageIndex * this.pageSize) {
						arr.push(this.list[i]);
					}
				}

				this.records = arr;
			},

			pageIndexChanged: function (value) {
				this.pageIndex = value;
				this.getData();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.win-records {
		$wrapperWidth   : 1200px;

		.wrapper {
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding-top: 8px;
			padding-bottom: 20px;

			.pager-zone {
				margin-top: 30px;
				text-align: center;
			}

			.no-data {
				color: #414141;
				border-top: 0;
				border-bottom: 1px solid #e5e5e5;
				font-size: 14px;
				height: 500px;
				text-align: center;
				width: 100%;

				.hand-shake {
					background-image: url("../../assets/no-data-sprite.png");
					background-position: 0 -110px;
					display: inline-block;
					height: 50px;
					margin-top: 196px;
					width: 65px;
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
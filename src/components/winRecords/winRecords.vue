<template>
	<div class="page win-records">
		<div class="wrapper">
			<win-item v-for="item in records" :item="item" key="item" v-show="records.length > 0">
			</win-item>

			<div class="no-data" v-show="records.length == 0">
				<span class="hand-shake"></span>
				<span class="text">您暂未中奖，请多多参与</span>
			</div>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/wine.jpg';
	import winItem  from './winItem';

	export default {
		name: 'win-records',

		data: function () {
			return {
				records: [
					{
						productName: 'Armani 阿玛尼圆形石英表男士防水腕表',
						price: 9877,
						issueDate: '201709010023',
						startTime: '09:30:23 2017-09-01',
						imgSrc: watchImage,
						receiveStatus: 0,  //未填写收货地址
					},
					{
						productName: 'Armani 阿玛尼圆形石英表男士防水腕表',
						price: 9877,
						issueDate: '201709010023',
						startTime: '09:30:23 2017-09-01',
						imgSrc: watchImage,
						receiveStatus: 1,   //已填写收货地址，还未发货
						receiveInfo: {
							address: '重庆市XX区古镇路XXX街XX号',
							receiver: '小强',
							phone: '13812345678',
						}
					},
					{
						productName: 'Armani 阿玛尼圆形石英表男士防水腕表',
						price: 9877,
						issueDate: '201709010023',
						startTime: '09:30:23 2017-09-01',
						imgSrc: watchImage,
						receiveStatus: 2,   //已发货
						receiveInfo: {
							address: '重庆市XX区古镇路XXX街XX号',
							receiver: '小强',
							phone: '13812345678',
						},
						expressInfo: {
							expressName: '申通快递',
							serialNo: 'EM15353445453'
						}
					},
					{
						productName: 'Armani 阿玛尼圆形石英表男士防水腕表',
						price: 9877,
						issueDate: '201709010023',
						startTime: '09:30:23 2017-09-01',
						imgSrc: watchImage,
						receiveStatus: 1,   //已填写收货地址，还未发货
						receiveInfo: {
							address: '重庆市XX区古镇路XXX街XX号',
							receiver: '小强',
							phone: '13812345678',
						}
					},
					{
						productName: 'Armani 阿玛尼圆形石英表男士防水腕表',
						price: 9877,
						issueDate: '201709010023',
						startTime: '09:30:23 2017-09-01',
						imgSrc: watchImage,
						receiveStatus: 2,   //已发货
						receiveInfo: {
							address: '重庆市XX区古镇路XXX街XX号',
							receiver: '小强',
							phone: '13812345678',
						},
						expressInfo: {
							expressName: '申通快递',
							serialNo: 'EM15353445453'
						}
					}
				]
			}
		},

		components: {
			'win-item' : winItem
		},

		methods: {
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
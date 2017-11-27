<template>
	<div class="page win-records">
		<div class="wrapper">
			<win-item v-for="item in records" :item="item" key="item"></win-item>
		</div>
	</div>
</template>

<script>
	import watchImage from '../../assets/armani-watch.png';
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
		}
	}
</style>
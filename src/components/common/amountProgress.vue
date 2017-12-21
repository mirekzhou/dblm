<template>
	<div class="amount-progress">
		<label class="title">总需人次：{{item.total}}</label>

		<div class="middle-content">
			<div class="progress-bar border-radius">
				<div class="current border-radius" :style="'width:'+ getPercent">{{getPercent}}</div>
			</div>

			<div class="data">当前参与：{{item.current}} 剩余：{{item.total - item.current}}</div>

			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'amount-progress',

		props: [
			'item'
		],

		data: function () {
			return {
			}
		},

		methods: {
		},

		computed: {
		 	getPercent: function () {
		 		var p = parseInt((this.item.current / this.item.total) * 100);

			    return p + '%';
		  	}
		}
	}
</script>

<style lang="scss" scoped>
	.amount-progress {
		color: #000;
		width: 550px;
		height: 104px;
		padding: 18px 50px;
		background-color:#F5F5F5;

		.title {
			text-align: center;
			color: #d43328;
			width: 100%;
			display: block;
			font-size: 14px;
		}

		.middle-content {
			position:relative;
			width:100%;
			font-size: 12px;
			height: 12px;
			line-height:1;
			margin: 23px 0;

			.progress-bar {
				border-radius: 50px;
				float: left;
				width: 284px;
				height: 18px;
				background-color: #E5E5E5;

				.current {
					background-color:#d43328;
					border-radius: 50px;
					color: #FFF;
					font-size: 12px;
					height: 18px;
					line-height: 18px;
					text-align: center;
				}
			}

			.data {
				color: #4d4d4d;
				float: left;
				font-size: 12px;
				height: 18px;
				line-height: 18px;
				margin-left: 35px;
			}
		}
	}

</style>
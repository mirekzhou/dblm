<template>
	<div class="amount-progress">
		<label class="title">总需人次：{{item.total}}</label>

		<div class="middle-content">
			<div class="progress-bar border-radius">
				<div class="current border-radius" :style="'width:'+ getPercent"></div>
			</div>

			<div class="percent">{{getPercent}}</div>
		</div>

		<div class="text">
			<div class="current-qty">当前参与：{{item.current}}</div>
			<div class="available-qty">剩余：{{item.total - item.current}}</div>
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
		width:550px;
		height:102px;
		padding:10px 50px;
		background-color:#F5F5F5;

		.title {
			text-align:center;
			color:red;
			width:100%;
			display:block;
			font-size:12px;
		}

		.middle-content {
			position:relative;
			width:100%;
			font-size:12px;
			height:12px;
			line-height:1;
			margin:15px 0;

			.progress-bar {
				width:400px;
				height:10px;
				background-color:#E5E5E5;

				.current {
					background-color:red;
					height: 100%;
				}
			}

			.percent {
				position:absolute;
				right:0;
				top:0;
			}
		}

		.text {
		 	position:relative;
		 	color:#5E5E5E;
		 	font-size:12px;

			.current-qty{
				position:absolute;
				left:0
			}
			.available-qty{
				position:absolute;
				right:0;
			}
		}
	}

</style>
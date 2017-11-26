<template>
	<div class="home-progress clear">
		<label class="title">总需人次：{{item.total}}</label>

		<div class="left">
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
	</div>
</template>

<script>
	import '../../scss/common.scss';
	export default {
		name: 'home-progress',

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
	.home-progress {
		color: #000;
		width: 540px;

		.title {
			float: right;
			text-align:center;
			display:block;
			margin-top: 10px;
			font-size:12px;
			color:#5E5E5E;
		}

		.middle-content {
			position:relative;
			font-size:12px;
			height:12px;
			line-height:1;
			margin:12px 0;
			width: 427px;

			.progress-bar {
				width:392px;
				height:10px;
				background-color:#E5E5E5;

				.current {
					background-color:#d43328;
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
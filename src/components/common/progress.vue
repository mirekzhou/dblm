<template>
	<div class="progress">
		<label class="title">{{'总需人次：'+data.total+'人'}}</label>
		<div class="middle-content">
			<div class="progress-bar border-radius">
				<div class="current border-radius" :style="'width:'+ getLeftWidth +'%;'"></div>
			</div>
			<div class="percent">{{getLeftWidth+'%'}}</div>
		</div>
		<div class="text">
			<div class="current-qty">{{'当前参与：'+data.current}}</div>
			<div class="available-qty"">剩余：{{data.total-data.current}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'progress',

		props: {
			data:{
				total:Number,
				current:Number
			}
		},

		data: function () {
			return {
			}
		},

		methods: {
		},
		computed: {
		 	getLeftWidth: function () {
		 		console.log(this.data.current/this.data.total)
			    return (this.data.current/this.data.total)*100 
		  	}
		}
	}
</script>

<style lang="scss" scoped>
	.progress {
		color: #000;
		width:550px;
		height:102px;
		padding:10px 50px;
		background-color:#F5F5F5;
		.title{
			text-align:center;
			color:red;
			width:100%;
			display:block;
			font-size:12px;
		}
		.middle-content{
			position:relative;
			width:100%;
			font-size:12px;
			height:12px;
			line-height:1;
			margin:15px 0;
			.progress-bar{
				width:400px;
				height:10px;
				background-color:#E5E5E5;
				.current{
					background-color:red;
					height: 100%;
				}
			}
			.percent{
				position:absolute;
				right:0;
			}
		}
		
		
		.text{
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
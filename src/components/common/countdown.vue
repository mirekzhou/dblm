<template>
	<div class="count-down">
		<div class="content">
			<label>距离结束</label>
			<span>{{getTime.days}}天</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.hours)}}</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.minutes)}}</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.seconds)}}</span>
		</div>
		<div class="desc">{{desc}}</div>
		
	</div>
</template>

<script>
	export default {
		name: 'count-down',

		props: {
			seconds:Number,
			desc:String
		},

		data: function () {
			return {
			}
		},

		methods: {
			formatTimeString:function(number){
				if(number>9){
					return  number
				}else{
					return '0'+number
				}
			}
		},
		computed: {
		 	getTime:function(){

		 			var seconds=this.seconds/1000;
					var days    = seconds / 60 / 60 / 24;
					var daysRound   = Math.floor(days);
					var hours    = seconds / 60 / 60 - (24 * daysRound);
					var hoursRound   = Math.floor(hours);
					var minutes   = seconds /60 - (24 * 60 * daysRound) - (60 * hoursRound);
					var minutesRound  = Math.floor(minutes);
					var secondsRound   = Math.floor(seconds - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound));

					return{
						"days":daysRound,
						"hours":hoursRound,
						"minutes":minutesRound,
						"seconds":secondsRound
					}
			}
		},
		"mounted":function(){
	        var _this = this;
	        if(_this.seconds>0){
		        this.countDown=setInterval(function(){
		            _this.seconds=_this.seconds-1000;
		        },1000)
	        }else{
	        	clearInterval(this.countDown)
	        }
	        
	    },
	    "destroyed":function(){
	    	clearInterval(this.countDown)
	    }
	}
</script>

<style lang="scss" scoped>
	.count-down {
		color: #000;
		border:1px solid #F0F0F0;
		width:550px;
		padding:10px 50px 5px 50px;

		.content {
			label {
				margin-right:5px;
			}

			span {
				display:inline-block;
				width:20px;
				height:20px;
				line-height:20px;
				color:white;
				text-align:center;
				background-color:red;
				font-size:12px;
				over-flow:hidden;
			}

			i {
				display:inline-block;
				width:20px;
				height:20px;
				line-height:20px;
				color:red;
				font-style: normal;
			}
		}
		
		.desc {
			margin-top:10px;
			font-size:12px;
			color:#707070;
		}
	}
</style>
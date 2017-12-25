<template>
	<div class="win-info">
		<div class="wrapper">
			<div class="icon-wrap">
				<i class="icon-camera"></i>
				<span>{{count}}人正在夺宝</span>
			</div>

			<div class="marquee-box" >
				<div class="marquee-list" :class="{anim: animate}">
					<div class="marquee-section" v-for="data in formatWinUserData">
						<div class="win-user" v-for="item in data">
							<img :src="item.imgUrl" />

							<div class="user-data">
								<span>{{item.number}}</span>
								<span>参与夺宝</span>
								<div class="prize">{{item.prize}}</div>
							</div>

							<div class="clear"></div>
						</div>
					</div>

					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import headerImg from '../../assets/header.png';

	export default {
		name: 'win-info',

		props: [
		],

		data: function () {
			return {
				winUserData: [],

				formatWinUserData: [],

				animate: false,

				count: 100
			}
		},

		components: {

		},

		methods: {
			scroll: function(){
		       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
		       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
		               this.formatWinUserData.push(this.formatWinUserData[0]);  // 将数组的第一个元素添加到数组的
		               this.formatWinUserData.shift();               //删除数组的第一个元素
		               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
		           },2000)
		   },
		   getData: function () {
		   	var that = this;
		   	var opt = {
		   		localUrl: true,
		   		url: '../../../data/winInfo.json',
		   		callback: function (data) {
		   			that.winUserData = data.data;

		   			for (var i = 0; i < that.winUserData.length; i++) {
		   				if (!that.winUserData[i].imgUrl) {
		   					that.winUserData[i].imgUrl = headerImg;
		   				}
		   			}

		   			var tempLength = that.winUserData.length;
		   			var page = Math.ceil(tempLength/3);
		   			for (var i = 0; i < page; i++ ) {
		   				if (that.formatWinUserData[i] == undefined) {
		   					that.formatWinUserData[i] = [];
		   				}
		   				for (var j = 0; j < 3; j++) {
		   					if(that.winUserData[i*3 + j] != undefined) {
		   						that.formatWinUserData[i].push(that.winUserData[i*3 + j])
		   					}
		   				}
		   			}

		   			that.animate = true;
		   			setInterval(that.scroll,4000);
		   		}
		   	};

		   	this.$store.dispatch('get', opt);
		   },
		},

		mounted: function () {
            this.getData();

		},
	}
</script>

<style lang="scss" scoped>
$topWidth : 19px;

.win-info {
	float: left;
	width: 100%;
	height: 93px;

	.wrapper {
		margin: 0 auto;

		.icon-wrap {
			height: 34px;
			width: 195px;
			background: #d53328;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
			margin-top: 30px;
			float: left;
			color: #fff;
			line-height: 34px;
			font-size: 14px;

			.icon-camera {
				display: inline-block;
				width: 21px;
				height: 15px;
				background: url("../../assets/common-sprite.png") -112px -203px;
				float: left;
				margin: 10px 14px 0 14px;
			}

		}

		.marquee-box {
			float: right;
			width: 1005px;
            height: 73px;
            overflow: hidden;
            position: relative;

            .anim {
            	transition: all 2s;
            	margin-top: -73px;
            }

            .marquee-list {
            	position: absolute;
            	top:0;
            	right: 0;

            	.marquee-section {
            		height: 73px;

            		.win-user {
            			margin-top: $topWidth;
            			display: inline-block;
            			float: right;
            			margin-left: 35px;
            			// width: 300px;

            			&:last-child {
            				margin-right: 0;
            			}

            			img {
            				float: left;
            				width: 46px;
            				height: 46px;
            			}

            			.user-data {
            				float: left;
            				font-size: 13px;
            				margin-top: 10px;
            				margin-left: 20px;
            				width: 233px;

            				.prize {
            					color: #d94941;
            					font-size: 14px;
            				}
            			}
            		}
            	}
            }
        }
    }
}
</style>
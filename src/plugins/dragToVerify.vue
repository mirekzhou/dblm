<template>
	<div class="drag-to-verify">
		<div class="drag-canvas" v-bind:class="{ hide: isHideCanvas, flotage: isFloat}">
			<canvas width="313" height="100" ref="myCanvas"></canvas>
		<!-- 	<span ref="refresh" v-on:click="verification">刷新</span>
			<span class="drag-tip">{{tip}}</span> -->
		</div>

		<div class="drag-verify">
			<p>按住滑块，滑动完成上方拼图</p>
			<div  class="drag-range"
				  :class="{default: passFlag==0,red: passFlag==1,green: passFlag==2}"
				  ref="rang"
				  v-on:mousedown="onMouseDown($event)"
				  v-bind:style="{'left': end + 'px'}">

				  <span></span>
				  <span></span>
				  <span></span>
			</div>

			<i class="success" v-show="passFlag==2"></i>
			<span class="fail" v-show="passFlag==1">×</span>
		</div>
	</div>
</template>

<script>
	import img0 from '../assets/geetest/geetest0.jpg';
	import img1 from '../assets/geetest/geetest1.jpg';
	import img2 from '../assets/geetest/geetest2.jpg';
	import img3 from '../assets/geetest/geetest3.jpg';
	import img5 from '../assets/geetest/geetest5.jpg';
	import img6 from '../assets/geetest/geetest6.jpg';
	import img7 from '../assets/geetest/geetest7.jpg';

	export default {
		name: 'drag-to-verify',

		props: [
			'isHideCanvas',
			'isFloat'
		],

		data: function () {
			return {
				imgArr      : [ img0, img1, img2, img3, img5, img6, img7],
				cxt         : '',    //画布
				tip         : '',    //提示
				refresh     : '',    //刷新按钮
				rang        : '',    //小滑块

				img         : '',
				imgContext  : '',
				posX        : 0,
				posY        : 0,

				flag        : false,
				origin      : 0,
				start       : 0,
				end         : 0,

				passFlag    : 0
			}
		},

		mounted: function () {
			this.initCanvas();
			this.initEvents();

			this.verification();

		},

		methods: {
			initCanvas: function () {
				this.rang    = this.$refs.rang;
				this.refresh = this.$refs.refresh;
				this.cxt     = this.$refs.myCanvas.getContext("2d");
				this.img     = new Image();
			},

			verification: function () {
				var that = this;

				// 随机取图片
				this.img.src = this.imgArr[parseInt((this.imgArr.length - 1) * Math.random())];

				// 图片加载完成后执行
				this.img.onload = function(){
					// canvas图片渲染
					that.imgContext = that.cxt.createPattern(that.img, "no-repeat");
					// 随机拼图位置
					that.posX = 180 * Math.random() + 80;
					that.posY = 70 * Math.random();
					// 初始化拼块
					that.drawPuzzle(0)
				}
			},

			onMouseDown: function (e) {
				this.$emit('showCanvas', false);
				this.flag   = true;
				this.start  = e.screenX;
				this.origin = parseInt(this.rang.style.left || 0);
				this.tip    = '';
			},

			initEvents: function () {
				var that = this;

				// 移动-滑块
				document.addEventListener('mousemove',function(e) {
					if(that.flag) {
						that.end = that.origin + e.screenX - that.start;

						if(that.end <= 0) that.end = 0;
						if(that.end >= 260) that.end = 260;

						that.drawPuzzle(that.end)
					}
				}, false);

				// 离开-滑块
				window.addEventListener('mouseup',function(e){
					if(that.flag) {
						that.flag = false;

						if( that.end >= that.posX - 2 && that.end <= that.posX + 2) {
							that.tip = '检验成功 ==== 刷新检验';
							that.passFlag = 2;
							that.rang.style.left = 0;
							that.verification();
							that.$emit('showCanvas', true);
							that.$emit('setDragVerifyFlag', true);

						}else{
							that.tip = '检验失败 ==== 返回起点';
							that.rang.style.left = 0;
							that.passFlag = 1;
							that.drawPuzzle(0);

							setTimeout(() => {
								that.$emit('showCanvas', true);
								that.$emit('setDragVerifyFlag', false);
							}, 500)
						}
					}
				}, false);
			},

			drawPuzzle: function (value) {
				var that = this;
				// 绘制背景
				this.cxt.rect(0, 0, 313, 100);
				this.cxt.fillStyle = this.imgContext;
				this.cxt.fill();

				// 绘制缺口
				addPuzzle(true)
				// 调整原点将拼图块的初始位置调到左侧
				this.cxt.translate(0 - this.posX + value, 0);
				// 绘制拼图块
				addPuzzle(false)
				// 重置原点位置
				this.cxt.translate(this.posX - value, 0);

				// 绘制缺口或拼图块
				function addPuzzle(flag) {
					//绘制拼图
					var posX = that.posX;
					var posY = that.posY;

					that.cxt.beginPath();
					that.cxt.moveTo(posX,posY)
					that.cxt.lineTo(posX+10,posY)
					that.cxt.bezierCurveTo(posX+10,posY-8,posX+20,posY-8,posX+20,posY)
					that.cxt.lineTo(posX+30,posY)
					that.cxt.lineTo(posX+30,posY+10)
					that.cxt.bezierCurveTo(posX+38,posY+10,posX+38,posY+20,posX+30,posY+20)
					that.cxt.lineTo(posX+30,posY+30)
					that.cxt.lineTo(posX+20,posY+30)
					that.cxt.bezierCurveTo(posX+20,posY+22,posX+10,posY+22,posX+10,posY+30)
					that.cxt.lineTo(posX,posY+30)
					that.cxt.lineTo(posX,posY+20)
					that.cxt.bezierCurveTo(posX+8,posY+20,posX+8,posY+10,posX,posY+10)
					that.cxt.closePath()

					//判断是绘制拼图还是缺块
					if(flag) {
						that.cxt.fillStyle   = '#ccc';
						that.cxt.fill();
						that.cxt.shadowBlur  = 2;
						that.cxt.shadowColor = "#333";
						that.cxt.strokeStyle = '#fff';
						that.cxt.stroke();
					} else {
						that.cxt.fillStyle = that.imgContext;
						that.cxt.fill();
						that.cxt.stroke();
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.drag-to-verify {
		position: relative;
    	.drag-canvas {
			width: 313px;
			height: 100px;
    		background: #f2ece1;
    		border: 1px solid #dad2c5;
    		border-radius: 4px;
    		margin: 20px auto 0;
    		box-shadow: 0 2px 2px #fff inset;
    		font-size: 12px;
    		color:#8c6f48 ;
    		line-height: 20px;
    	}

    	.hide {
    		display: none;
    	}

    	.flotage {
    		position: absolute;
    		top: -150px;
    		left: 30px;
    		z-index: 9;
    	}

    	.drag-canvas canvas {
    		border-radius:6px;
    	}

    	.drag-canvas span:nth-child(2) {
    		cursor: pointer;
    	}

    	.drag-tip {
    		padding-left: 10px;
    		color: #444;
    	}

    	.drag-verify {
    		margin: 10px 0;
    		height: 32px;
    		border-radius:15px;
    		background: #f8f8f8;
    		border: 1px solid #d6cbbc;
    		position: relative;
    		text-align: center;
    		line-height: 32px;
    		color: #b5b5b5;

    		p {
    			font-size: 14px;
    			margin-left: 25px;
    		}
    	}

    	.default {
    		span {
    			background: #ccc;
    		}
    	}

    	.red {
    		span {
    			background: #d43328;
    		}
    	}

    	.green {
    		span {
    			background: #9ac37b;
    		}
    	}

    	.drag-range {
    		position: absolute;
    		margin-left: 2px;
    		top: 1px;
    		display: block;
    		width: 70px;
    		height: 28px;
    		line-height: 28px;
    		cursor: pointer;
    		background: #fff;
    		border: 1px solid #cebfb3;
    		border-radius: 20px;
    		padding: 14px;
    		padding: 5px 0 0 14px;

    		span {
    			display: inline-block;
    			width: 4px;
    			float: left;
    			height: 16px;
    			margin-left: 6px;
    			border-radius: 2px;
    		}
    	}

    	.success {
    		display: inline-block;
    		position: absolute;
    		right: -27px;
    		top: 7px;
    		background: url('../assets/common-sprite.png') -111px -61px; 
    		width: 19px;
    		height: 19px;
    	}

    	.fail {
    		display: inline-block;
    		position: absolute;
    		right: -27px;
    		top: 7px;
    		width: 19px;
    		height: 19px;
    		border-radius: 50%;
    		background: #d43328;
    		text-align: center;
    		line-height: 19px;
    		color: #fff;
    	}
	}
</style>
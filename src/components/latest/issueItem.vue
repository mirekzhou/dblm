<template>
	<li class="issue-item">
		<a>
		<div class="flex-center-x">
		<div class="item-left">
			<div class="title-badge">第1001期</div>
			<img src="../../assets/kaijiang.jpg" alt="">
		</div>
		<div class="flex flex-full flex-column item-right">
		<h4>IPhone8 128G 夺宝联盟世界杯巴西队高级item-right定制版</h4>
		<div class="item-price"><span class="desc">市场参考价</span><span class="price">￥19999</span></div>
		<div class="flex item-qty">
			<span class="desc">当前数量</span>
			<span class="qty">34件</span>
			<button class="btn-radius">联盟夺宝</button>
		</div>
		<div class="item-time">
		<label>距离开奖结束还剩</label>
		<span class="red">02</span>天
		<span class="red">05</span>时
		<span class="red">08</span>分
		<span class="red">06</span>秒
		</div>
		</div>

		</div>
		</a>
	</li>
</template>

<script>
	export default {
		name: 'issue-item',

		props: [
			'data'
		],

		data: function () {
			return {
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
    $grey-base:#666;
    $grey-deep:#333;
    $grey-light:#999;
    $grey-border:#ccc;
	.issue-item {
		color: #000;
		border:1px solid #ccc;
		a{
		    width: 100%;
		    -moz-box-sizing: border-box;
		    -webkit-box-sizing: border-box;
		    box-sizing: border-box;
   
		}
		&+li{
		 margin-top:10px;
		}

	}

	.flex-column {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-flow: column;
    -webkit-flex-flow: column;
    flex-flow: column;
}
	.item-left{
	  position: relative;
	  min-width:400px;
	  border-right:1px solid $grey-border;
	  img{
	  	width:320px;
	  	height:280px;
	  }
	  .title-badge{
		  position:absolute;
		  top:0;
		  left:0;
		  width:100px;
		  height:40px;
		  background-color:red;
		  text-align: center;
	      color: #fff;
	      line-height:40px;
	  }
	}
	.item-right{
	 h4,div{
	 padding-left:25px;
	 padding-right:25px;
	 }
	 .item-price{
	    font-size:14px;
		 .price{
		   color:red;
		   margin-left:15px;
		 }
	   
	 }
	 .item-qty{
	 	margin-top:15px;
	    font-size:12px;
	    position:relative;
	   .qty{
	     color:$grey-light;
	     margin-left:15px;
	   }
	   .desc{
	     color:$grey-base;
	     
	   }
	 }
	 button{
	   background-color:red;
	   padding:5px 25px;
	   color:#fff;
	   border:none;
	   position:absolute;
	   right:30px;
	   top:0
	 }
	}
	.item-time{
	  background-color:#F3F0E7;
	  padding-top:10px;
	  padding-bottom:10px;
	  margin-top:30px;
      font-size:14px;
      label{
      margin-right:20px;
      }
	}
	.red{
	 color:red;
	}

</style>
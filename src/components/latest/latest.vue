<template>
	<div class="page latest">
	<div class="wrapper">
		<div class="nav">
			首页 > 最新开奖列表
		</div>

		<div class="bar-zone">
			<search></search>
		</div>

		<div class="line-saparate">
			<div class="flex flex-center-xy">
		   <div class="line-with-square flex-full square-right"></div>
		   <h3>夺宝区</h3>
		   <div class="line-with-square flex-full square-left"></div>
		   </div>
		</div >

		<div class="issues">
			<ul>
				<issue-item v-for="item in list" :data="item" key="item"></issue-item>
			</ul>
		</div>
		</div>
	</div>
</template>

<script>
	import search    from './search';
	import IssueItem from './issueItem';

	export default {
		name: 'latest',

		props: [
		],

		data: function () {
			return {
				list : [
				{title:'werjiewr',price:1214},
				{title:'werjiewr',price:1214},
				{title:'werjiewr',price:1214}
				]
			}
		},

		components: {
			'search'      :  search,
			'issue-item'  :  IssueItem
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.latest {
		color: #000;
		.line-with-square{
			position: relative;
		    height: 2px;
		    margin :15px 0;
		    background-color: #e0e0e0;

		    &:after{
		    content:"";
		    position:absolute;
		    top:50%;
		    width:2px;
		    height:2px;
		    border:2px solid #ccc;
		    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
		    }

    	}
    	.square-right{
    	  &:after{
    	  right:0;
    	  }
    	}
    	.square-left{
    	  &:before{
    	  left:0;}
    	   
    	}
	}

	h3{
	margin:0 20px;
	}
	
	
</style>
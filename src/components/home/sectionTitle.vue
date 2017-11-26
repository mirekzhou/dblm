<template>
	<div class="section-title" :style="{borderLeft:sectionData.border}" v-if="sectionData">
		<div class="icon-title">
			<i :style="{ width:sectionData.width+'px', 
						 height:sectionData.height+'px',
				         backgroundPosition: sectionData.iconPosition}">
	        </i>
			<span  :style="{color:sectionData.color,}">{{title}}</span>
		</div>

		<div class="more" v-show="sectionData.isMore">
			<router-link to="/latest">
				<i></i>
				<span>更多</span>
			</router-link>

		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	export default {
		name: 'section-title',

		props: [
			'title',
			'sectionData'
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
	.section-title {
		height: 57px;
		background: url("../../assets/sectionTitleBG.png") no-repeat;
		padding-top: 15px;
		position: relative;
		
		.icon-title {
			width: 140px;
			margin: 0 auto;

			i {
				display: inline-block;
				background: url("../../assets/common-sprite.png");
				vertical-align: top;
				margin-right: 10px;
			}
		}

		.more {
			position: absolute;
			margin-right: 10px;
			right: 0;
			top: 50%;
			transform: translate(0,-50%);	
			cursor: pointer;	

			a {
				text-decoration: none;
				color: #484848;
				
				i {
					width: 16px;
					height: 16px;
					display: inline-block;
					background: url("../../assets/common-sprite.png") 0 -132px;
					vertical-align: middle;
					margin: -2px 2px 0 0;
				}
			}
		}
	}
</style>
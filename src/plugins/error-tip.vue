<template>
	<div class="error-tip" v-show="showErrorTip">
		<span class="icon-error">×</span>
		<span>{{errorText}}</span>
	</div>
</template>

<script>
	export default {
		name: 'error-tip',
		
		data: function () {
			return {
				
			}
		},
		props: [
			'errorText',
			'showErrorTip'
		],

		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.error-tip {
	height: 20px;
	color: #d43328;
	margin-top: 7px;
	font-size: 13px;
	.icon-error {
		display: inline-block;
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
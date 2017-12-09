<template>
	<div class="code-input">
		<input type="text" placeholder="请输入短信验证码">
		<div class="code-btn" v-on:click="getCode">
			<span>获取验证码</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'code-input',
		
		data: function () {
			return {
				
			}
		},
		props: [
		],

		methods: {
			getCode: function () {
				console.log('222')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.code-input {
		height: 33px;
		border-radius: 3px;
		line-height: 33px;
		border: 1px solid #ddd;
		margin-bottom: 15px;
		position: relative;

		input {
			border: none;
			background: transparent;
			margin-left: 24px;
			text-align: center;

			&:focus {
				outline: none;
			}
		}

		.code-btn {
			position: absolute;
			right: 0;
			top: 0;
			width: 88px;
			height: 30px;
			border-left: 1px solid #ddd;
			background: #f6f6f6;
			color: #8a8a8a;
			text-align: center;
			cursor: pointer;
		}
	}
</style>
<template>
	<div class="phone-input">
		<i></i>
		<input type="text" :placeholder="text" v-on:input="updateValue($event.target.value)">
	</div>
</template>

<script>
	export default {
		name: 'phone-input',

		data: function () {
			return {

			}
		},
		props: [
			'text'
		],

		methods: {
			getCode: function () {
			},

			updateValue: function (value) {
				this.$emit('input', value);
			}
		}
	}
</script>

<style lang="scss" scoped>
.phone-input {
	height: 33px;
	line-height: 29px;
	border: 1px solid #dddddd;
	border-radius: 3px;
	padding-left: 10px;

	i {
		display: inline-block;
		background: url('../assets/common-sprite.png') -134px -52px;
		width: 10px;
		height: 18px;
		vertical-align: middle;
	}

	input {
		border: none;
		text-indent: 10px;
		background: transparent;
		margin-right: 12px;

		&:focus {
			outline: none;
		}
	}
}
</style>
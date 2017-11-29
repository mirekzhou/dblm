<template>
	<div class="message-item">
		<div class="part1">
			<input type="checkbox" :checked="item.checked" />
		</div>

		<div class="part2">
			{{item.message}}
		</div>

		<div class="part3">
			{{item.datetime}}
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		name: 'message-item',

		props: [
			'item'
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
	.message-item {
		$itemHeight: 75px;

		border-bottom: 1px solid #e5e5e5;
		height: $itemHeight;
		width: 100%;

		.part1 {
			cursor: pointer;
			height: $itemHeight;
			line-height: $itemHeight;
			width: 36px;
			float: left;

			input {
				cursor: pointer;
			}
		}

		.part2 {
			cursor: pointer;
			font-size: 13px;
			height: $itemHeight;
			line-height: $itemHeight;
			padding-left: 10px;
			width: 900px;
			float: left;
		}

		.part3 {
			font-size: 13px;
			height: $itemHeight;
			line-height: $itemHeight;
			width: 180px;
			float: right;
		}
	}
</style>
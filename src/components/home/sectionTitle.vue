<template>
	<div class="section-title">
		{{title}}
	</div>
</template>

<script>
	export default {
		name: 'section-title',

		props: [
			'title'
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
		color: #000;
	}
</style>
<template>
	<div class="drawing-zone">
		<section-title title="开奖区"></section-title>

		<div class="numbers">
		</div>
	</div>
</template>

<script>
	import SectionTitle  from './sectionTitle';

	export default {
		name: 'drawing-zone',

		props: [
		],

		data: function () {
			return {
			}
		},

		components: {
			'section-title'  :  SectionTitle
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.drawing-zone {
		.numbers {

		}
	}
</style>
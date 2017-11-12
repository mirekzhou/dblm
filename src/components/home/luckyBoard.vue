<template>
	<div class="lucky-board">
		<section-title title="幸运码排行榜"></section-title>

		<div class="lucky-items">
		</div>
	</div>
</template>

<script>
	import SectionTitle  from './sectionTitle';

	export default {
		name: 'lucky-board',

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
	.lucky-board {
		.lucky-items {

		}
	}
</style>
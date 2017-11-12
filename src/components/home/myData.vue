<template>
	<div class="my-data">
		<section-title title="我的夺宝数据"></section-title>

		<div class="summary">
		</div>

		<div class="table">
		</div>
	</div>
</template>

<script>
	import SectionTitle  from './sectionTitle';

	export default {
		name: 'my-data',

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
	.my-data {
		.summary {

		}

		.table {

		}
	}
</style>
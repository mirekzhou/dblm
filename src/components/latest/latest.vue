<template>
	<div class="page latest">
		<div class="nav">
			首页 > 最新开奖列表
		</div>

		<div class="bar-zone">
			<search></search>
		</div>

		<div class="issues">
			<issue-item v-for="item in list" :data="item"></issue-item>
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
				list : []
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
	}
</style>
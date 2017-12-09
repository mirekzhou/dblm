<template>
	<div class="pager">
		<div v-if="totalPage <= 6">
			<span class="page-item prev" v-on:click="prevPage">&lt;</span>
			<span 	class="page-item"
					v-for="i in totalPage"
					v-bind:class="{'active': i == pageIndex}"
					v-on:click="setCurrentPage(i)">
				{{i}}
			</span>
			<span class="page-item next" v-on:click="nextPage">&gt;</span>
			<span class="jump-text">跳转至</span>
			<input class="page-num" type="text" v-model="pageNum" v-on:keyup.enter="goToPage" />
			<span class="go-to" v-on:click="goToPage">Go</span>
		</div>

		<div v-if="totalPage > 6">
			<span class="page-item prev" v-on:click="prevPage">&lt;</span>

			<span class="more" v-show="dividerIndex >= totalPage - 4">...</span>

			<span class="page-item"
				  v-on:click="setCurrentPage(dividerIndex - 1)"
				  v-bind:class="{'active': dividerIndex - 1 == pageIndex}">
				{{dividerIndex - 1}}
			</span>

			<span class="page-item"
				  v-on:click="setCurrentPage(dividerIndex)"
				  v-bind:class="{'active': dividerIndex == pageIndex}">
				{{dividerIndex}}
			</span>

			<span class="page-item"
				  v-on:click="setCurrentPage(dividerIndex + 1)"
				  v-bind:class="{'active': dividerIndex + 1 == pageIndex}">
				{{dividerIndex + 1}}
			</span>

			<span class="page-item"
				  v-on:click="setCurrentPage(dividerIndex + 2)"
				  v-bind:class="{'active': dividerIndex + 2 == pageIndex}">
				{{dividerIndex + 2}}
			</span>

			<span class="more" v-show="dividerIndex < totalPage - 4">...</span>

			<span class="page-item"
				  v-on:click="setCurrentPage(totalPage - 1)"
				  v-bind:class="{'active': totalPage - 1 == pageIndex}">
				{{totalPage - 1}}
			</span>

			<span class="page-item"
			      v-on:click="setCurrentPage(totalPage)"
			      v-bind:class="{'active': totalPage == pageIndex}">
			  {{totalPage}}
			</span>

			<span class="page-item next" v-on:click="nextPage">&gt;</span>
			<span class="jump-text">跳转至</span>
			<input class="page-num" type="text" v-model="pageNum" v-on:keyup.enter="goToPage" />
			<span class="go-to" v-on:click="goToPage">Go</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pager',

		props: [
			'pageIndex',
			'totalPage'
		],

		data: function () {
			return {
				pageNum: '',
				dividerIndex: Number(this.pageIndex) + 1
			}
		},

		methods: {
			prevPage: function () {
				if (this.pageIndex <= 1) {
					return;
				}

				if (this.totalPage > 6) {
					if (this.pageIndex <= this.dividerIndex && this.dividerIndex > 2) {
						this.dividerIndex--;
					}
				}

				this.$emit('pageIndexChanged', this.pageIndex - 1);
			},

			nextPage: function () {
				if (this.pageIndex >= this.totalPage) {
					return;
				}

				if (this.totalPage > 6) {
					if (this.pageIndex + 1 > this.dividerIndex && this.dividerIndex < this.totalPage - 4) {
						this.dividerIndex++;
					}
				}

				this.$emit('pageIndexChanged', this.pageIndex + 1);
			},

			setCurrentPage: function (value) {
				this.$emit('pageIndexChanged', value);
			},

			goToPage: function () {
				if (!Number(this.pageNum) || Number(this.pageNum) < 1 || Number(this.pageNum) > this.totalPage) {
					this.pageNum = '';
					return;
				}

				if (this.totalPage > 6) {
					if (this.pageNum <= this.totalPage && this.pageNum >= this.totalPage - 5) {
						this.dividerIndex = this.totalPage - 4;
					} else if (this.pageNum <= 4) {
						this.dividerIndex = 2;
					} else {
						this.dividerIndex = Number(this.pageNum)+ 1;
					}
				}

				this.$emit('pageIndexChanged', Number(this.pageNum));
				this.pageNum = '';
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pager {
		color: #000;
		display: inline-block;

		.page-item {
			border: 1px solid #e5e5e5;
			cursor: pointer;
			display: inline-block;
			height: 35px;
			line-height: 35px;
			margin-left: 10px;
			text-align: center;
			width: 35px;
			user-select: none;

			&:hover {
				background-color: #d43328;
				border: 1px solid #d43328;
				color: #FFF;
			}
		}

		.active {
			background-color: #d43328;
			border: 1px solid #d43328;
			color: #FFF;
		}

		.jump-text {
			margin-left: 10px;
		}

		.page-num {
			border: 1px solid #e5e5e5;
			outline: none;
			height: 24px;
			width: 76px;
			margin-left: 8px;
			text-indent: 10px;
		}

		.go-to {
			border: 1px solid #d43328;
			border-radius: 6px;
			color: #d43328;
			cursor: pointer;
			display: inline-block;
			height: 35px;
			line-height: 35px;
			margin-left: 10px;
			width: 76px;
			text-align: center;
		}
	}
</style>
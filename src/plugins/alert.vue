<template>
    <div class="alert" v-show="showAlert">
	    <div class="wrapper">
          	<div class="title">
            	{{alertData.title || '温馨提示'}}
            	<span class="close" v-on:click="hide">✕</span>
         	</div>

          	<div class="content">
            	{{alertData.message}}
          	</div>

          	<div class="buttons">
            	<button v-for="item in alertData.buttons" v-on:click="buttonClicked(item)">
            		{{item.name}}
            	</button>
          	</div>
	    </div>
    </div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'alert',

		props: [],

		methods: {
			buttonClicked: function (item) {
				if (item.callback && typeof item.callback === 'function') {
					item.callback();
				} else {
					this.hide();
				}
			},

			hide: function () {
				this.$store.dispatch('hideAlert');
			}
		},

		computed: mapState({
			showAlert: function (state) {
				return state.showAlert;
			},

			alertData: function (state) {
				return state.alertData;
			}
		}),
	}
</script>

<style lang="scss" scoped>
	.alert {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.8);
		z-index: 999;

		.wrapper {
			width: 378px;
			height: 206px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background: #fff;
			color: #8c8c8c;
			z-index: 999;

			.title {
				color: #000;
				font-size: 20px;
				height: 60px;
				line-height: 60px;
				width: 100%;
				text-align: center;
				position: relative;

				.close {
					cursor: pointer;
					position: absolute;
					top: -14px;
					right: 12px;

					&:hover {
						color: #8c8c8c;
					}
				}
			}

			.content {
				height: 80px;
				line-height: 80px;
				text-align: center;
			}

			.buttons {
				text-align: center;
				margin-top: 15px;
				width: 100%;

				button {
					background-color: #d43328;
					border: 0;
					border-radius: 4px;
					color: #FFF;
					cursor: pointer;
					font-size: 14px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					outline: none;
					width: 100px;

					&:last-child {
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>
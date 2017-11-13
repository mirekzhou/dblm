<template>
	<div class="marquee">
		<div class="section1" ref="origin">
			<slot name="origin"></slot>
		</div>

		<div class="section2">
			<slot name="copy"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'marquee',

		data: function () {
			return {
				interval : ''
			}
		},

		mounted: function () {
			this.startAnimation();
		},

		activated: function () {
			this.startAnimation();
		},

		deactivated: function () {
			this.stopAnimation();
		},

		methods: {
			startAnimation: function () {
				var item;
				var len;
				var height;
				var limit;
				var that = this;
				const speed = 100;

				var rolling = function () {
					if (!that.$refs.origin) {
						return;
					}

					item = that.$refs.origin.children[0];

					if (!item) {
						return;
					}

					height = item.offsetHeight;
					len    = that.$refs.origin.children.length;
					limit  = height * len;

					if (limit <= that.$refs.mq.offsetHeight) {
						that.stopAnimation();
						return;
					}

					if (Math.abs(that.$refs.mq.scrollTop - limit) <= 10) {
						that.refs.mq.scrollTop = 0;
					} else {
						that.refs.mq.scrollTop += 1;
					}
				};

				if (this.interval) {
					return;
				}

				this.interval = setInterval(rolling, speed);

				this.$refs.mq.onmouseover = function () {
					clearInterval(that.interval);
				};

				this.$refs.mq.onmouseout = function () {
					that.interval = setInterval(rolling, speed);
				};
			},

			stopAnimation: function () {
				window.clearInterval(this.interval);
				this.interval = null;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.marquee {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
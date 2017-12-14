<template>
	<div class="page detail-page">
		<div class="wrapper">
            <product></product>
            <joinFlow></joinFlow>

            <div class="bottom-content">
                <div class="left-part">
                    <luckyBoard></luckyBoard>
                </div>

                <div class="right-part">
                    <lastList></lastList>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
    import product      from '../common/detailParts/product';
    import joinFlow     from '../common/detailParts/joinFlow';
    import luckyBoard   from '../common/detailParts/luckyBoard';
    import lastList     from '../common/detailParts/last50';

	export default {
		name: 'detail-page',

		props: [
		],

        data: function () {
            return {
            }
        },

        components: {
            'joinFlow'       : joinFlow,
            'product'        : product,
            'luckyBoard'     : luckyBoard,
            'lastList'       : lastList
        }
	}
</script>

<style lang="scss" scoped>
	.detail-page {
        color:#000;

        .bottom-content {
            float:left;
            width:100%;
            margin-top:30px;
            margin-bottom:50px;

            .left-part {
                float:left;
            }

            .right-part{
                float:right;
            }
        }
	}
</style>
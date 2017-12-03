<template>
	<div class="page detail-page">
		<div class="wrapper">
            <product></product>
            <joinFlow></joinFlow>

            <div class="bottom-content">
                <div class="left-part">
                    <luckyBoard :rankList='rankList'></luckyBoard>
                </div>

                <div class="right-part">
                    <lastList :joinList='joinList'></lastList>
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
    import userImg      from '../../assets/header.png';
    import prizeHeader  from '../../assets/prize_info_header.png';

	export default {
		name: 'detail-page',

		props: [
		],

        data: function () {
            return {
                list : [
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214}
                ],

                rankList:[
                    {
                        img:prizeHeader,
                        phone:'139****1234',
                        luckyQty:200
                    },
                    {
                        img:prizeHeader,
                        phone:'139****1234',
                        luckyQty:200
                    },
                    {
                        img:prizeHeader,
                        phone:'139****1234',
                        luckyQty:200
                    }
                ],

                joinList:[
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    },
                    {
                        img:userImg,
                        phone:'139****1234',
                        date:'2017-09-03 17:30:23.586',
                        no:173294832
                    }
                ]
            }
        },

        components: {
            'joinFlow'       : joinFlow,
            'product'        : product,
            'luckyBoard'     : luckyBoard,
            'lastList'       : lastList
        },

		methods: {
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
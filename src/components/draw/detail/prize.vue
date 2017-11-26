<template>
    <div class="prize">
        <div class="left-part">
            <img :src="image">
        </div>
        <div class="right-part">
            <div class='item-title'>[低至14382]低至低至低至低至低至低至低至低至</div>
            <div class='item-desc'>低至低至低至低至低至低至低至低至</div>
            <div class='item-no'>第142141241期</div>
            <div class="item-price">参考价格：<span class="price">3432432元</span></div>
            <div class="item-progress"><progres :item="datas"></progres></div>
            <countDown :secs="seconds" :desc="desc"></countDown>
            <div class="item-button">
                <button class="btn-radius">分享夺宝</button>
            </div>
        </div>
    </div>
</template>

<script>
    import awardImage from '../../../assets/1.jpg';
    import progres    from '../../common/amountProgress';
    import countDown    from '../../common/countdown';
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                image:awardImage,
                list : [
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214}
                ],
                datas:{
                    total:100,
                    current:50
                },
                seconds:(new Date('2017-11-30')-new Date()),
                desc:'倒计时结束时参与人数达到或超过总需人数，则随机抽取1人获得该商品'
            }
        },

        components:{
            'progres': progres,
            'countDown':countDown,
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .prize   {
        margin-top:30px;
        height:415px;
        .left-part{
            width:474px;
            height:100%;
            float:left;
            img{
                width:415px;
                height:415px;
            }
        }

        .right-part{
            width:550px;
            height:100%;
            float:left;
            .item-title {


            }

            .item-desc {
                font-size:12px;
                color:#707070;
                margin:5px 0;
            }

            .item-no{
                position:relative;
                background-color: #d43328;
                color: #FFF;
                font-size: 12px;
                height: 24px;
                line-height: 24px;
                width: 118px;
                text-align: center;
                &:after{
                    position:absolute;
                    right:-12px;
                    height:24px;
                    width:24px;
                    content:'';
                    -moz-border-radius: 50%;
                    -webkit-border-radius: 50%;
                    border-radius: 50%;
                    background-color: #d43328;
                }
            }

            .item-price {
                margin:5px 0;
                font-size:12px;
                color:#707070;
                .price{
                    margin-left:5px;
                    color:red;
                }
            }

            .item-progress {
                margin-bottom:30px;
            }

            .item-button {
                position:relative;
                margin-top:30px;
                width:100%;
                button{
                    position: absolute;
                    left: 200px;
                    height:30px;
                    line-height:30px;
                    width:150px;
                    text-align:center;
                    background-color:#d43328;
                    color:#fff;
                    border:none;
                }
            }
        }

    }


</style>

<template>
    <div class="step">
        <div class="title">夺宝流程</div>
        <div class="content">
            <ul class="flex steps-list">
                <li class="flex flex-full steps-item">
                    <div><i class="first"></i></div>
                    <div class="flex-full extra-page">
                        <p class="item-title">参与夺宝</p>
                        <div class="item-text">选择商品参与夺宝</div>
                    </div>
                    <div class="flex-full"></div>
                </li>
                <li class="flex flex-full steps-item">
                    <div><i class="second"></i></div>
                    <div class="flex-full extra-page">
                        <p class="item-title">分享夺宝链接</p>
                        <div class="item-text">选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝</div>
                    </div>
                    <div class="flex-full"></div>
                </li>
                <li class="flex flex-full steps-item">
                    <div><i class="last"></i></div>
                    <div class="flex-full">
                        <p class="item-title">查看是否中奖</p>
                        <div class="item-text">选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝</div>
                    </div>
                    <div class="flex-full"></div>
                </li>
            </ul>
        </div>
        
        
    </div>
</template>

<script>
    import sprite from '../../../assets/common-sprite.png';

    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                list : [
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214}
                ],
                spriteImg:sprite
            }
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .step   {
        margin-top:30px;
        height:190px;
        border:1px solid #F0F0F0;
        .title{
            background-color:#F7F7F7;
            height:50px;
            line-height:50px;
            padding-left:15px;
        }

        .content {
            margin:40px 15px;
            .steps-list {
                height:50px;
                .steps-item{
                    i{
                        width: 35px;
                        height: 35px;
                        color: #ffffff;
                        border-radius: 50%;
                        background-color:red;
                        display:block;
                        margin-right:15px;
                        background-image: url(../../../assets/common-sprite.png);
                        background-size: auto;
                        background-repeat: no-repeat;
                    }

                    .first {
                        background-position:-73px -58px;
                    }

                    .second {
                        background-position:-73px -26px;
                    }

                    .last {
                        background-position:-72px 5px;
                    }

                    .item-title {
                        font-size:14px;
                        color:red;
                        margin-bottom:5px;
                    }

                    .item-text {
                        font-size:12px;
                        color:#707070;
                    }
                }
            }
            

        }

    }
    
    
</style>

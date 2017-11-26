<template>
    <div class="join-flow">
        <div class="title">夺宝流程</div>
        <div class="content">
            <ul class="flex flow-list">
                <li class="flex flex-center-y flow-item first">
                    <i></i>
                    <div class="flex-full">
                        <p class="item-title">参与夺宝</p>
                        <div class="item-text">选择商品参与夺宝</div>
                    </div>
                    <div class="flex-full separate-arrow" ></div>
                </li>
                <li class="flex flex-full flex-center-y flow-item second">
                    <i class="second"></i>
                    <div class="flex-full">
                        <p class="item-title">分享夺宝链接</p>
                        <div class="item-text">选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝</div>
                    </div>
                    <div class="flex-full separate-arrow" ></div>
                </li>
                <li class="flex flex-full flex-center-y flow-item last">
                    <i></i>
                    <div class="flex-full">
                        <p class="item-title">查看是否中奖</p>
                        <div class="item-text">选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝选择商品参与夺宝</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                
            }
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .join-flow   {
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
            .flow-list {
                height:50px;
                .flow-item{
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

                    .separate-arrow {
                        height:30px;
                        width:40px;
                        max-width: 40px;
                        margin:0 30px;
                        background-image: url(../../../assets/common-sprite.png);
                        background-max-size: auto;
                        background-position:-35px -132px;
                        background-repeat: no-repeat;
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

                .first {

                    i {
                        background-position:-73px -58px;
                    }

                    .item-desc {
                        width:100px;
                        max-width:100px;
                    }
                }

                .second {
                    i {
                        background-position:-73px -26px;
                    }
                    
                }

                .last {
                    i {
                        background-position:-72px 5px;
                    }
                }
            }
            

        }

    }
    
    
</style>

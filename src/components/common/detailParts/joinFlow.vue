<template>
    <div class="join-flow">
        <div class="title">夺宝流程</div>
        <div class="content">
            <ul class="flex flow-list">
                <li class="flex flex-center-y flow-item first">
                    <div class="item-icon"><i></i></div>
                    <div class="flex-full">
                        <p class="item-title">参与夺宝</p>
                        <div class="item-text">参与夺宝获取自己的第一组幸运号码</div>
                    </div>
                    <div class="flex-full separate-arrow" ></div>
                </li>
                <li class="flex flex-full flex-center-y flow-item second">
                    <div class="item-icon"><i></i></div>
                    <div class="flex-full middle-content">
                        <p class="item-title">分享夺宝链接</p>
                        <div class="item-text">将夺宝链接分享给朋友，好友根据提示为我助攻，获得更多幸运码</div>
                    </div>
                    <div class="flex-full separate-arrow" ></div>
                </li>
                <li class="flex flex-full flex-center-y flow-item last">
                    <div class="item-icon"><i></i></div>
                    <div class="flex-full">
                        <p class="item-title">查看是否中奖</p>
                        <div class="item-text">
                            到达开奖时间后，平台在所有参与者中抽出一组幸运码，持有该幸运码的用户获得本期大奖
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'join-flow',

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

                .flow-item {

                    .item-icon {
                        padding:10px;
                        color: #ffffff;
                        border-radius: 50%;
                        background-color:red;
                        margin-right:15px;
                        i{
                            width: 30px;
                            height: 30px;
                            color: #ffffff;
                            background-color:red;
                            display:block;
                            background-image: url(../../../assets/common-sprite.png);
                            background-size: auto;
                            background-repeat: no-repeat;
                        }
                    }

                    .separate-arrow {
                        height:30px;
                        width:40px;
                        max-width: 40px;
                        margin:0 45px;
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
                        background-position:-75px -58px;
                    }

                    .item-desc {
                        width:100px;
                        max-width:100px;
                    }
                }

                .second {
                    .middle-content {
                        max-width:220px;
                    }

                    i {
                        background-position:-75px -28px;
                    }

                }

                .last {
                    i {
                        background-position:-75px 2px;
                    }
                }
            }


        }

    }


</style>

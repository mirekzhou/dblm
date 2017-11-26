<template>
    <div class="rank">
        <div class="left-part">
            <div class="left-header">幸运码排行榜</div>
            <ul>
                <li class="flex flex-center-y" v-for="item in rankList">
                    <div class="left"><img :src="item.img"></div>
                    <div class="right-content flex-full flex-column flex-center-x">
                        <p>{{item.phone}}</p>
                        <p>共获得幸运码<span class="red">{{item.luckyQty}}个</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right-part">
            <div class="right-header">最后50名用户参与记录</div>
            <ul class="half-box">
                <li class="flex flex-center-y" v-for="item in joinList">
                    <div class="left"><img :src="item.img"></div>
                    <div class="right-content flex-full">
                        <span>{{item.phone}}</span>
                        <span>{{item.date}}</span>
                        <span>{{item.no}}</span>
                    </div>
                </li>
            </ul>
            <ul class="half-box">
                <li class="flex flex-center-y" v-for="item in joinList">
                    <div class="left"><img :src="item.img"></div>
                    <div class="right-content flex-full">
                        <span>{{item.phone}}</span>
                        <span>{{item.date}}</span>
                        <span>{{item.no}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import userImg from '../../../assets/header.png';
    import prizeHeader from '../../../assets/prize_info_header.png';
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                userImg:userImg,
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

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .rank {
        margin-top:30px;
        margin-bottom:50px;
        height:430px;
        .left-part {
            width:250px;
            height:100%;
            float:left;
            border:1px solid #F0F0F0;

            .left-header {
                background-color:#d43328;
                height:40px;
                line-height:40px;
                text-align:center;
                color:#fff;
            }

            li{
                height:130px;
                border-bottom:1px solid #F0F0F0;

                .left {
                    margin:0 15px;
                    img {
                        width:60px;
                        height:60px;
                    }
                }
            }
        }

        .right-part {
            width:940px;
            height:100%;
            float:left;
            text-align:center;
            margin-left:10px;
            border:1px solid #F0F0F0;
            overflow:hidden;
            .right-header {
                background-color:#F7F7F7;
                height:40px;
                line-height:40px;
                text-align:center;
            }

            .half-box {
                width:50%;
                font-size:12px;
                color:#707070;
                text-align: left;
                float:left;
                li{
                    height:76px;
                }
            }

            .left {
                margin:0 15px;
                img {
                    width:40px;
                    height:40px;
                }
            }
        }

        .red {
            color:#d43328;
        }

    }
    
    
</style>

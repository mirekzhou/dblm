<template>
    <div class="last-list">
        <div class="header">最后50名用户参与记录</div>
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

    .last-list {
        width:940px;
        height:430px;
        text-align:center;
        border:1px solid #F0F0F0;
        overflow:hidden;
        .header {
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

</style>

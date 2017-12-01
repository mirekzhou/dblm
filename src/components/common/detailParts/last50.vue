<template>
    <div class="last-list">
        <div class="header">最后50名用户参与记录</div>
        <div class="flex">
            <ul class="half-box flex-full">
                <li class="flex flex-center-y" v-for="item in joinList">
                    <div class="left"><img :src="item.img"></div>
                    <div class="right-content flex-full">
                        <span>{{item.phone}}</span>
                        <span>{{item.date}}</span>
                        <span>{{item.no}}</span>
                    </div>
                </li>
            </ul>
            <div class="line-middle"></div>
            <ul class="half-box flex-full">
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
    
    export default {
        name: 'page',

        props: {
            joinList:Array
        },

        data:function () {
            return {

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
        .line-middle {
            margin-top:30px;
            margin-right:15px;
            max-height:330px;
            border-right:1px solid #F0F0F0;
        }

        .half-box {
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

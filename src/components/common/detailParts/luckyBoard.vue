<template>
    <div class="lucky-board">
        <div class="header"><i class="icon"></i><span>幸运码排行榜</span></div>
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
</template>

<script>
    import userImg from '../../../assets/header.png';
    import prizeHeader from '../../../assets/prize_info_header.png';
    export default {
        name: 'page',

        props: {
            rankList:Array
        },

        data: function () {
            return {
                

            }
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .lucky-board {
        width:250px;
        height:430px;
        border:1px solid #F0F0F0;
        color:#000;
        .header{
            background-color:#d43328;
            padding:9px 0;
            text-align:center;
            color:#fff;
            .icon {
                width: 25px;
                height: 22px;
                color: #ffffff;
                display:inline-block;
                margin-right:15px;
                background-image: url(../../../assets/common-sprite.png);
                background-position:-40px -190px;
                background-repeat: no-repeat;
                vertical-align: top;
            }
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

        .red {
            color:#d43328;
        }

    }
    
    
</style>

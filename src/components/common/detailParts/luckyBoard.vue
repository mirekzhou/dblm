<template>
    <div class="lucky-board">
        <div class="header"><i class="icon"></i><span>幸运码排行榜</span></div>
        <ul>
            <li class="flex flex-center-y item-rank" v-for="item in rankList">
                <div class="left"><i class="icon-rank"></i><img :src="item.headImg"></div>
                <div class="right-content flex-full flex-column flex-center-x">
                    <p>{{item.phone}}</p>
                    <p>共获得幸运码<span class="red">{{item.luckyNumberCount}}个</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import prizeHeader from '../../../assets/prize_info_header.png';

    export default {
        name: 'lucky-board',

        props: {
        },

        data: function () {
            return {
                rankList: []
            }
        },

        mounted () {
            this.getData()
        },

        methods: {
            getData: function () {
                var that = this;
                var opt = {
                    localUrl: true,
                    url: '../../../data/luckyBoard.json',
                    callback: function (data) {
                        var i;
                        var arr = data.data;

                        for (i = 0; i < arr.length; i++) {
                            arr[i].headImg = prizeHeader;
                        }

                        that.rankList  = arr;
                    }
                };

                this.$store.dispatch('get', opt);
            }
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
                position:relative;
                img {
                    width:60px;
                    height:60px;
                }
                .icon-rank{
                    position:absolute;
                    width:30px;
                    height:30px;
                    background-image: url(../../../assets/common-sprite.png);
                    background-repeat: no-repeat;
                    top: -10px;
                    left: -10px;
                }
            }

        }

        .item-rank:first-child{
            .icon-rank{
                background-position: -75px -90px;
            }
        }

        .item-rank:nth-child(2){
            .icon-rank{
                background-position: -75px -120px;
            }
        }

        .item-rank:last-child{
            .icon-rank{
                background-position: -75px -150px;
            }
        }

        .red {
            color:#d43328;
        }

    }


</style>

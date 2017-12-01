<template>
    <div class="draw-zone">
        <div class="title">夺宝联盟开奖区</div>

        <div class="waiting" v-if="status == 0">
            <span class="waiting-icon"></span>
            <span>等待{{treasureName}}第{{issueDate}}期开奖中</span>
        </div>

        <div class="win" v-if="status == 1">
            <div class="user flex flex-center-xy">
                <div class="user-header"></div>
                <div class="prize-info">
                    <strong>中奖用户：139****1234</strong>
                    <strong>中奖号码：8485743897594375</strong>
                    <p>共获得幸运码200个</p>
                </div>
            </div>

            <div class="separate-line">
                <span class="detail-title">计算详情</span>
            </div>

            <div class="detail">
                <p>中奖号码=【A+B】/参与人数，取余数再+10000001，得到的号码为中奖号码</p>
                <p>A=截止该商品公布时间点击最后50名用户参与记录之和=
                    <span class="red">343432423234</span>
                </p>
                <p>
                    B=最近一期XXX彩开奖结果=
                    <span class="red">00000（第XXX1期）</span>
                    参与人数=19999人
                </p>
            </div>
        </div>

        <div class="lose" v-if="status == 2">
            <div class="sad-face"></div>
            <span>未能收集到要求夺宝的主攻人数，本期联盟组建失败, 暂时无法开奖</span>
        </div>
    </div>
</template>

<script>
    import userImg from '../../../assets/header.png';
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

                status       : 2,
                treasureName : 'Iphone X',
                issueDate    : '20171201005',

                userImg:userImg
            }
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .draw-zone {
        margin-top:30px;
        border:1px solid #F0F0F0;

        .title{
            background-color:#F7F7F7;
            height:50px;
            line-height:50px;
            padding-left:15px;
        }

        .waiting {
            height: 168px;
            line-height: 168px;
            text-align: center;
            color: #d43328;
        }

        .win {
            height:250px;
            padding:0 20px;

            .user {
                padding:45px 0;
                height:125px;
                text-align: center;
                .user-header{
                    width: 60px;
                    height: 60px;
                    margin-right:15px;
                    background-image: url(../../../assets/prize_info_header.png);
                    background-repeat: no-repeat;
                    vertical-align: top;
                }
                .prize-info {
                    text-align:left;
                    strong {
                        font-size:16px;
                        color:#d43328;
                        +strong{
                            margin-left:10px;
                        }
                    }
                    p{
                        color:#666;;
                        font-size:12px;
                    }

                }

            }

            .separate-line{
                position:relative;
                height:12px;
                line-height:12px;
                width:100%;
                text-align: center;
                .detail-title{
                    &:before{
                        position:absolute;
                        content:'';
                        right:0;
                        top:6px;
                        width:450px;
                        border-bottom:1px solid #F0F0F0;
                    }

                    &:after{
                        position:absolute;
                        content:'';
                        left:0;
                        top:6px;
                        width:450px;
                        border-bottom:1px solid #F0F0F0;
                    }

                }

            }

            .detail {
                p{
                    margin-top:15px;
                    width:100%;
                    text-align:center;
                    +p{
                        margin-top:10px;
                    }

                    .red{
                        color:#d43328;
                    }
                }

            }
        }

        .lose {
            color: #999999;
            font-size: 14px;
            height: 168px;
            padding-top: 18px;
            width: 100%;
            text-align: center;

            .sad-face {
                background-color: #cccccc;
                height: 96px;
                width: 96px;
                margin: 0 auto;
                margin-bottom: 18px;
            }
        }
    }
</style>

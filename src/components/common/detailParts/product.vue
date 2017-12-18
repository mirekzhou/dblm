<template>
    <div class="product">
        <div class="left-part">
            <div class="img-list">
                <swiper :options="swiperOption" class="img-left" ref="swiperLeft">
                    <swiper-slide  class="img-item" v-for="item in imgList" key="item">
                        <img :src="item.smallImgUrl">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                </swiper>

                <div class="img-box">
                    <img :src="bigImgUrl">

                    <div class="win-user">
                        <div class="left-sec">
                            <img :src="winUserHead" />
                        </div>

                        <div class="right-sec">
                            <div>中奖用户：{{winUser}}</div>
                            <div>中奖号码：{{winNumber}}</div>
                        </div>

                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-part">
            <div class='item-title'>{{productInfo.title}}</div>
            <div class='item-desc'>{{productInfo.desc}}</div>
            <div class='item-no'>第{{productInfo.no}}期</div>
            <div class="item-price">参考价格：<span class="price">{{productInfo.price}}元</span></div>
            <div class="item-progress"><progres :item="progressData"></progres></div>

            <countDown :secs="countdownData.seconds" :desc="countdownData.desc"></countDown>

            <div class="item-button">
                <button class="btn-radius" v-on:click="share">分享夺宝</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import headerImg  from '../../../assets/prize_info_header.png';
    import imgItem1   from '../../../assets/2.jpg';
    import imgItem2   from '../../../assets/3.jpg';
    import bigImg1    from '../../../assets/1.jpg';
    import bigImg2    from '../../../assets/prize_info_2.jpg';
    import bigImg3    from '../../../assets/prize_info_1.jpg';
    import arrow      from '../../../assets/page-left-arrow.png';
    import progres    from '../../common/amountProgress';
    import countDown  from '../../common/countdown';

    export default {
        name: 'product',

        props: [
        ],

        data: function () {
            var that = this;

            return {
                winUserHead: headerImg,
                winUser: '13557225656',
                winNumber: '10010',

                productInfo:{
                    title:'[低至14382]低至低至低至低至低至低至低至低至',
                    desc:'低至低至低至低至低至低至低至低至',
                    no:142141241,
                    price:3432432
                },

                progressData:{
                    total:100,
                    current:50
                },

                countdownData:{
                    seconds:(new Date('2017-12-30')-new Date()),
                    desc:'倒计时结束时参与人数达到或超过总需人数，则随机抽取1人获得该商品'
                },

                bigImgUrl: bigImg2,

                imgList:[
                    {
                        smallImgUrl : imgItem1,
                        bigImgUrl   : bigImg1
                    },
                    {
                        smallImgUrl : imgItem2,
                        bigImgUrl   : bigImg2
                    },
                    {
                        smallImgUrl : imgItem1,
                        bigImgUrl   : bigImg3
                    },
                    {
                        smallImgUrl : imgItem2,
                        bigImgUrl   : bigImg2
                    },
                    {
                        smallImgUrl : imgItem2,
                        bigImgUrl   : bigImg1
                    }
                ],

                swiperOption: {
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true,
                    direction: 'vertical',
                    height:415,
                    loop : true,
                    notNextTick: true,
                    nextButton:'.swiper-button-next',
                    prevButton:'null',

                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },

                    onSlideChangeEnd: function (swiper) {
                        that.bigImgUrl = that.imgList[swiper.realIndex].bigImgUrl;
                    }
                }
            }
        },
        mounted:function() {
        },

        components:{
            'progres': progres,
            'countDown':countDown,
            swiper,
            swiperSlide
        },

        methods: {
            share: function () {
                this.$store.dispatch('setShareDialogStatus', {status: true});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        margin-top:30px;
        height:415px;

        .left-part {
            position:relative;
            width:500px;
            height:100%;
            float:left;

            .img-list {
                float:left;
                width:100%;
                height:415px;
                overflow:hidden;
                position:relative;

                .progress-list {
                    position:absolute;
                }

                .img-item{
                    img {
                        cursor: pointer;
                        width:100%;
                        height:80px;
                    }
                }
            }

            .img-left {
                float:left;
                width:20%!important;
                .swiper-slide-active {
                    border:1px solid red;
                }
            }

            .img-box {
                float:left;
                width:80%!important;
                position: relative;

                img {
                    width:100%;
                    height:415px;
                    border:1px solid #F0F0F0;
                }

                .win-user {
                    display: none;
                    width: 100%;
                    height: 100px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    color: #fff;
                    background-repeat: no-repeat;
                    background-size: 100% 100px;
                    background-image: url("../../../assets/red-bg.png");

                    .left-sec {
                        float: left;
                        width: 120px;
                        text-align: right;

                        img {
                            border: 2px solid white;
                            border-radius: 50%;
                            height: 54px;
                            width: 54px;
                            margin-top: 26px;
                        }
                    }

                    .right-sec {
                        color: #FFF;
                        font-size: 16px;
                        float: right;
                        line-height: 25px;
                        width: 250px;
                        text-align: left;
                        margin-top: 30px;
                    }
                }
            }

            .swiper-button-prev {
                position: absolute;
                top:10px;
                left:35px;
                content:'';
                display: block;
                width: 15px;
                height: 15px;
                border-bottom: 2px solid;
                border-right: 2px solid;
                border-color: #afafaf;
                -webkit-transform: rotate(-135deg);
                -moz-transform: rotate(-135deg);
                -o-transform: rotate(-135deg);
                transform: rotate(-135deg);
            }

            .swiper-button-next {
                position: absolute;
                bottom:10px;
                left:35px;
                content:'';
                display: block;
                width: 15px;
                height: 15px;
                border-bottom: 2px solid;
                border-right: 2px solid;
                border-color: #afafaf;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
            }

        }

        .right-part {
            width:550px;
            height:100%;
            float:left;
            margin-left:80px;

            .item-desc {
                font-size:12px;
                color:#707070;
                margin:12px 0;
            }

            .item-no {
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
                margin:10px 0 15px 0;
                font-size:12px;
                color:#707070;
                .price{
                    margin-left:5px;
                    color:red;
                }
            }

            .item-progress {
                margin-bottom:35px;
            }

            .item-button {
                position:relative;
                margin-top:30px;
                width:100%;

                button{
                    cursor: pointer;
                    position: absolute;
                    left: 200px;
                    height:35px;
                    line-height:35px;
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

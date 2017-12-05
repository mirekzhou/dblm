<template>
    <div class="product">
        <div class="left-part">
            
            <div class="img-list">
                 <swiper :options="swiperOption" class="img-left" ref="swiperLeft">
                    <swiper-slide  class="img-item" v-for="item in imgList" :key="item.id">
                        <img :src="item.url">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>
                  <swiper :options="swiperOptionTop" class="img-box" ref="swiperRight">
                    <swiper-slide v-for="item in imgList" :key="item.id">
                        <img :src="item.imgDetail">
                    </swiper-slide>
                  </swiper>
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
    import awardImage from '../../../assets/1.jpg';
    import imgItem1 from '../../../assets/2.jpg';
    import imgItem2 from '../../../assets/3.jpg';
    import arrow from '../../../assets/page-left-arrow.png';
    import  detailImg1 from '../../../assets/prize_info_2.jpg';
    import  detailImg2 from '../../../assets/prize_info_1.jpg';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    import progres    from '../../common/amountProgress';
    import countDown    from '../../common/countdown';
    var count=0;
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                detailUrl:awardImage,
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
                    seconds:(new Date('2017-11-30')-new Date()),
                    desc:'倒计时结束时参与人数达到或超过总需人数，则随机抽取1人获得该商品'
                },
                imgList:[
                    {
                        id:'1',
                        url:imgItem1,
                        imgDetail:awardImage
                    },
                    {
                        id:'2',
                        url:imgItem2,
                        imgDetail:detailImg1
                    },
                    {
                        id:'3',
                        url:imgItem1,
                        imgDetail:detailImg2
                    },
                    {
                        id:'4',
                        url:imgItem2,
                        imgDetail:detailImg1
                    },
                    {
                        id:'5',
                        url:imgItem2,
                        imgDetail:awardImage
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
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    notNextTick: true, 
                    nextButton:'.swiper-button-next',
                    prevButton:'null',
                    onSlideChangeEnd: swiper => { 
                        //调试
                        console.log(swiper)
                        if(swiper&&swiper.controller&&swiper.controller.control){
                            swiper.controller.control.slideTo(swiper.realIndex)
                        }
                        //swiper.controller.control.slideTo(swiper.realIndex)
                        this.page = swiper.realIndex+1; 
                        this.index = swiper.realIndex; 
                      }
                },
                swiperOptionTop: {
                    direction: 'vertical',
                    height:415,
                    loop: true,
                    notNextTick: true,
                },
                moveCount:count,
                arrowImg:arrow
            }
        },
        mounted:function() {
            console.log("asdasd")
            var self=this
            this.$nextTick(function() {
                var swiperRight=self.$refs.swiperRight.swiper
                var swiperLeft=self.$refs.swiperLeft.swiper
                swiperRight.controller.control = swiperLeft
                swiperLeft.controller.control = swiperRight
            })
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
                img{
                    width:100%;
                    height:415px;
                    border:1px solid #F0F0F0;
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

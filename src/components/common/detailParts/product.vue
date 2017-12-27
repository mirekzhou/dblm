<template>
    <div class="product">
        <div class="left-part">
            <div class="big-image">
                <img :src="bigImgUrl">
            </div>

<!--             <swiper :options="swiperOption" class="small-images" ref="swiperLeft">
                <swiper-slide  class="img-item" v-for="item in productInfo.imgList" key="item">
                    <img :src="item.smallImgUrl" />
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper> -->

            <div class="small-images">
                <div    class="img-item" v-for="(item, index) in productInfo.imgList"
                        v-bind:class="{'active': currentIndex == index}"
                        v-on:click="smallImageClicked(index)"
                        key="item">
                    <img :src="item.smallImgUrl" />
                </div>

                <div class="clear"></div>
            </div>
        </div>

        <div class="right-part">
            <div class='item-date'>第{{productInfo.issueDate}}期</div>
            <div class='item-title'>{{productInfo.title}}</div>
            <div class='item-desc'>{{productInfo.description}}</div>

            <div class="item-price">参考价格：<span class="price">{{productInfo.price}}元</span></div>
            <div class="item-progress"><progres :item="productInfo.progressData || {}"></progres></div>

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

        data: function () {
            return {
                currentIndex: 0,
                productInfo: '',
                bigImgUrl: bigImg2
            }
        },

        components:{
            'progres': progres,
            'countDown':countDown,
            swiper,
            swiperSlide
        },

        mounted: function () {
            this.getProductInfo();
        },

        methods: {
            smallImageClicked: function (index) {
                this.currentIndex = index;
                this.bigImgUrl    = this.productInfo.imgList[index].bigImgUrl;
            },

            getProductInfo: function () {
                var that = this;
                var opt = {
                    localUrl: true,
                    url: '../../../data/productInfo.json',
                    callback: function (data) {
                        that.productInfo = data.data;
                        that.productInfo.imgList = [
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
                        ]
                    }
                };

                this.$store.dispatch('get', opt);
            },

            share: function () {
                this.$store.dispatch('setShareDialogStatus', {status: true});
            }
        },

        computed: {
            countdownData: function () {
                if (!this.productInfo || !this.productInfo.deadline) {
                    return {
                        seconds: 0,
                        desc: '--'
                    };
                }

                return {
                    seconds : (new Date(this.productInfo.deadline) - new Date()),
                    desc    : '倒计时结束时参与人数达到或超过总需人数，则随机抽取1人获得该商品'
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        margin-top: 40px;
        height:440px;

        .left-part {
            position: relative;
            width: 453px;
            height: 100%;
            float: left;

            .img-item {
                float: left;
                width: 80px;
                overflow: hidden;

                img {
                    cursor: pointer;
                    height: 80px;
                    width: 80px;
                }
            }

            .active {
                border:1px solid red;
            }

            .big-image {
                border:1px solid #F0F0F0;
                height: 350px;
                overflow: hidden;
                width: 100%;

                img {
                    width: 100%;
                }
            }

            .swiper-container {
                height: 80px;
                margin-top: 10px;
                width: 100%;

                .swiper-slide-active {
                    border:1px solid red;
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

            .item-date {
                position:relative;
                background-color: #d43328;
                color: #FFF;
                font-size: 14px;
                height: 24px;
                line-height: 24px;
                width: 140px;
                text-align: center;

                &:after {
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

            .item-title {
                margin-top: 11px;
                margin-left: -8px;
            }

            .item-desc {
                font-size: 12px;
                color: #707070;
                margin: 11px 0;
            }

            .item-price {
                margin:11px 0 15px 0;
                font-size: 14px;
                color: #707070;

                .price {
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
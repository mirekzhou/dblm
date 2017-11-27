<template>
    <div class="product">
        <div class="left-part">
            <div class=left-column>
                <div class="img-list">
                    <ul class="progress-list"  v-bind:style="{ top: -100*moveCount + 'px' }" ref="move">
                        <li class="img-item" v-for="item in imgList">
                            <img :src="item.url">
                        </li>
                    </ul>
                </div>
                <div class="move-up" v-on:click="moveUp()"></div>
            </div>
            <div class="img-box">
                <img :src="image">
            </div>
        </div>
        <div class="right-part">
            <div class='item-title'>[低至14382]低至低至低至低至低至低至低至低至</div>
            <div class='item-desc'>低至低至低至低至低至低至低至低至</div>
            <div class='item-no'>第142141241期</div>
            <div class="item-price">参考价格：<span class="price">3432432元</span></div>
            <div class="item-progress"><progres :item="datas"></progres></div>
            <countDown :secs="seconds" :desc="desc"></countDown>
            <div class="item-button">
                <button class="btn-radius">分享夺宝</button>
            </div>
        </div>
    </div>
</template>

<script>
    import awardImage from '../../../assets/1.jpg';
    import imgItem1 from '../../../assets/2.jpg';
    import imgItem2 from '../../../assets/3.jpg';
    import arrow from '../../../assets/page-left-arrow.png';
   
    
    import progres    from '../../common/amountProgress';
    import countDown    from '../../common/countdown';
    var count=0;
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                image:awardImage,
                list : [
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214}
                ],
                datas:{
                    total:100,
                    current:50
                },
                seconds:(new Date('2017-11-30')-new Date()),
                desc:'倒计时结束时参与人数达到或超过总需人数，则随机抽取1人获得该商品',
                imgList:[
                    {
                        id:'1',
                        url:imgItem1
                    },
                    {
                        id:'2',
                        url:imgItem2
                    },
                    {
                        id:'2',
                        url:imgItem1
                    },
                    {
                        id:'2',
                        url:imgItem2
                    },
                    {
                        id:'2',
                        url:imgItem2
                    }
                ],
                moveCount:count,
                arrowImg:arrow
            }
        },

        components:{
            'progres': progres,
            'countDown':countDown,
        },

        methods: {
            moveUp:function(){
                var len=this.$refs.move.children.length
                if(len-4>this.moveCount){
                    ++this.moveCount;
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product {
        margin-top:30px;
        height:450px;

        .left-part {
            position:relative;
            width:532px;
            height:100%;
            float:left;

            .left-column {
                position:relative;
                float:left;
                height:100%;
            }

            .img-list {
                float:left;
                width:80px;
                height:410px;
                overflow:hidden;
                position:relative;

                .progress-list {
                    position:absolute;
                }

                .img-item{

                    + .img-item {
                        margin-top:20px;
                    }

                    img {
                        width:80px;
                        height:80px;
                    }
                } 
            }

            .img-box {
                float:left;
                img{
                    width:450px;
                    height:450px;
                    border:1px solid #F0F0F0;
                }
            }
            .move-up {
                position:relative;
                height:30px;
                width:100%;
                float:left;
                &:after {
                    content: "";
                    position: absolute;
                    bottom:10px;
                    left: 35px;
                    display: block;
                    width: 8px;
                    height: 8px;
                    margin-top: -5px;
                    border-bottom: 2px solid;
                    border-right: 2px solid;
                    border-color: #afafaf;
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }
        }

        .right-part {
            width:550px;
            height:100%;
            float:left;
            margin-left:90px;

            .item-desc {
                font-size:12px;
                color:#707070;
                margin:5px 0;
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
                margin:5px 0;
                font-size:12px;
                color:#707070;
                .price{
                    margin-left:5px;
                    color:red;
                }
            }

            .item-progress {
                margin-bottom:30px;
            }

            .item-button {
                position:relative;
                margin-top:30px;
                width:100%;
                button{
                    position: absolute;
                    left: 200px;
                    height:30px;
                    line-height:30px;
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

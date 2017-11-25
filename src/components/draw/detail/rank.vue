<template>
    <div class="rank">
        <div class="left-part">
            <div class="left-header">幸运码排行榜</div>
            <ul>
                <li class="flex flex-center-y">
                    <div class="left"><img :src="userImg"></div>
                    <div class="right-content flex-full flex-column flex-center-xy">
                        <p>139****1234</p>
                        <p>共获得幸运码<span class="red">20个</span></p>
                    </div>
                </li>
                <li class="fle flex-center-y">
                    <div class="left"><img :src="userImg"></div>
                    <div class="right-content flex-full flex-column flex-center-xy">
                        <p>139****1234</p>
                        <p>共获得幸运码<span class="red">20个</span></p>
                    </div>
                </li>
                <li class="flex flex-center-y">
                    <div class="left"><img :src="userImg"></div>
                    <div class="right-content flex-full flex-column flex-center-xy">
                        <p>139****1234</p>
                        <p>共获得幸运码<span class="red">200个</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right-part">
            <div class="right-header">最后50名用户参与记录</div>
            <ul>
                <li class="flex flex-center-y">
                    <div class="left"><img :src="userImg"></div>
                    <div class="right-content flex-full">
                        <span>139****1234</span>
                        <span>2017-09-03 17:30:23.586</span>
                        <span>173294832984958</span>
                    </div>
                </li>
                <li class="fle flex-center-y">
                    <div class="left"><img :src="userImg"></div>
                    <div class="right-content flex-full">
                        <span>139****1234</span>
                        <span>2017-09-03 17:30:23.586</span>
                        <span>173294832984958</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import userImg from '../../../assets/3.jpg';
    export default {
        name: 'page',

        props: [
        ],

        data: function () {
            return {
                userImg:userImg
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
            width:760px;
            height:100%;
            float:left;text-align:center;
            margin-left:10px;
            border:1px solid #F0F0F0;

            .right-header {
                background-color:#F7F7F7;
                height:40px;
                line-height:40px;
                text-align:center;
            }

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

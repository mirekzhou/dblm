<template>
    <div class="last-list">
        <div class="header">最后50名用户参与记录</div>
        <div class="flex" v-show="joinList.length > 0">
            <ul class="half-box flex-full">
                <li class="flex flex-center-y" v-for="item in joinList">
                    <div class="left"><img :src="item.img"></div>
                    <div class="right-content flex-full">
                        <span>{{item.phone}}</span>
                        <span class="date">{{item.date}}</span>
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
                        <span class="date">{{item.date}}</span>
                        <span>{{item.no}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <pager
             v-show="joinList.length > 0"
            :page-index="currentPage"
            :total="count"
            :page-size="pageSize"
            @change="pageChange">
        </pager>

        <div class="no-data" v-show="joinList.length == 0">
            <div><span class="icon-user"></span></div>
            <span>抓紧机会！暂无用户参与</span>
        </div>
    </div>
</template>

<script>
    import pager      from '../../common/pager';

    export default {
        name: 'page',

        props: {
            joinList:Array
        },

        data:function () {
            return {
                pageSize : 50 , //每页显示20条数据
                currentPage : 1, //当前页码
                count : 400, //总记录数
            }
        },
        components:{
            'pager': pager,
        },

        methods: {
            //获取数据
            getList () {
                //模拟
                //let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
                //this.$http.get(url)
                //.then(({body}) => {

                    //子组件监听到count变化会自动更新DOM
                    //this.count = body.count
                    //this.items = body.list
                //})
                this.count = 400

            },
            //从page组件传递过来的当前page
            pageChange (page) {
                this.currentPage = page
                this.getList()
            }
        },
        mounted() {
            //请求第一页数据
            this.getList()
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
        ul{
            height:345px;
            max-height:345px;
            overflow:hidden;
        }

        .half-box {
            font-size:12px;
            color:#707070;
            text-align: left;
            float:left;
            li{
                height:69px;
                .right-content .date {
                    &:after{
                        display: inline-block;
                        content: '';
                        width: 25px;
                        height: 10px;
                        background-image: url(../../../assets/common-sprite.png);
                        background-size: auto;
                        background-repeat: no-repeat;
                        background-position: -110px -80px;
                        margin: 0 5px;
                    }

                }
            }
        }

        .left {
            margin:0 15px;
            img {
                width:40px;
                height:40px;
            }
        }

        .no-data {
            color: #999999;
            height: 382px;
            text-align: center;
            width: 100%;

            div {
                height: 50px;
                margin-top: 125px;
                margin-bottom: 30px;
                text-align: center;
                width: 100%;

                .icon-user {
                    background-image: url("../../../assets/no-data-sprite.png");
                    background-position: 0 0;
                    display: inline-block;
                    height: 50px;
                    width: 52px;
                }
            }
        }
    }

    .red {
        color:#d43328;
    }

</style>

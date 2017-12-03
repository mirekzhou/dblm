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
        <pager 
            :page-index="currentPage" 
            :total="count" 
            :page-size="pageSize" 
            @change="pageChange"></pager>
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

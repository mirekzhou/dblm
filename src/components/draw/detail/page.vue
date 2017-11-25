p<template>
    <div class="page latest">
    <div class="wrapper">
        <progres :data="datas"></progres>
        <countDown  :seconds="seconds"></countDown>
    </div>
    </div>
</template>

<script>
    import progres    from '../../common/progress';
    import countDown    from '../../common/countdown';
    export default {
        name: 'latest',

        props: [
        ],

        data: function () {
            return {
                list : [
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214},
                    {title:'werjiewr',price:1214}
                ],
                datas:{
                    total:100,
                    current:50
                },
                seconds:(new Date('2017-11-30')-new Date())
            }
        },
        components: {
            'progres'      :  progres,
            'countDown':countDown
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .latest {
        color: #000;
        .line-with-square{
            position: relative;
            height: 2px;
            margin: 15px 0;
            background-color: #e0e0e0;

            &:after{
                content:"";
                position:absolute;
                top:50%;
                width:2px;
                height:2px;
                border:2px solid #ccc;
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                transform: rotate(45deg);
            }

        }
        .square-right{
          &:after{
          right:0;
          }
        }
        .square-left{
          &:before{
          left:0;}
           
        }
    }

    h3{
    margin:0 20px;
    }
    
    
</style>

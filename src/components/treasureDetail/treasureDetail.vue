<template>
    <div class="page latest">
    <div class="wrapper">
        <prize></prize>
        <steps></steps>
        <award></award>
        <rank></rank>
    </div>
    </div>
</template>

<script>
    import steps    from './steps';
    import award    from './awardRegion';
    import prize    from './prize';
    import rank    from './rank';

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
                ]
            }
        },
        components: {
            'steps':steps,
            'award':award,
            'prize':prize,
            'rank':rank
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

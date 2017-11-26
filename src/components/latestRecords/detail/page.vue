p<template>
    <div class="page draw-list">
        <div class="wrapper">
            <prize></prize>
            <joinFlow></joinFlow>
            <drawZone></drawZone>
            <div class="bottom-content">
                <div class="left-part">
                    <luckyBoard></luckyBoard>
                </div>
                <div class="right-part">
                    <lastList></lastList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import prize    from './prize';
    import lastList    from '../../common/detailParts/last50';
    import joinFlow    from '../../common/detailParts/joinFlow';
    import luckyBoard    from '../../common/detailParts/luckyBoard';
    import drawZone    from '../../common/detailParts/drawZone';
    
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
            'joinFlow':joinFlow,
            'drawZone':drawZone,
            'prize':prize,
            'luckyBoard':luckyBoard,
            'lastList':lastList
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .draw-list{
        color:#000;
        .bottom-content {
            float:left;
            width:100%;
            margin-top:30px;
            margin-bottom:50px;
            .left-part {
                float:left;
            }
            .right-part{
                float:right;
            }
        }
        
    }
</style>

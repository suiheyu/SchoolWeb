<template>
    <div>
        <SSMainItem :title="dataInfo.title">
            <SSImgList :rows="dataInfo.rows" :item-show-border="Boolean('false')"/>
        </SSMainItem>
    </div>
</template>
<script>

import CommonUtil from '@/assets/js/CommonUtil';

export default {
    props:{
        id:{
            type: Number
        }
    },
    computed:{
        dataInfo:function(){
            let id = this.id;
            let info = this.viewDatas[id];
            if(id != undefined && info){
                return {
                    title: info.title,
                    rows:CommonUtil.toTable(info.pics,this.colN)
                };
            }else{
                return [];
            }
        }
    },
    data:function(){
        return {
            colN: 4,
            viewDatas:[
                {
                    title: '2018年暑期华东分区贵州铜仁支教',
                    pics:[
                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},

                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},
                        { imageUrl: '/img/pic1.png'},

                        // { imageUrl: ''},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                    ]
                },
                {
                    title: '2018年青岛黄海学院河南支教队',
                    pics:[
                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},

                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},

                        { imageUrl: '/img/pic2.png'},
                        { imageUrl: '/img/pic2.png'},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                    ]
                },
                {
                    title: '2018年暑期华东分区贵州铜仁支教',
                    pics:[
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},

                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},

                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                        { imageUrl: '/img/pic3.jpg'},
                    ]
                },
                {
                    title: '2018年暑期华东分区贵州铜仁支教',
                    pics:[
                        { imageUrl: '/img/pic4.jpg'},
                        { imageUrl: '/img/pic4.jpg'},
                        { imageUrl: '/img/pic4.jpg'},
                        { imageUrl: '/img/pic4.jpg'},

                        { imageUrl: '/img/pic4.jpg'},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
// 
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                        // { imageUrl: ''},
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
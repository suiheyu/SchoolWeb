<template>
    <div>
        <SSMainItem :title="dataInfo.title">
            <SSImgList :rows="dataInfo.rows" :item-show-border="Boolean('false')" row-margin-height="1rem" row-align-type="end" row-height="16rem" :hover-enlarge="Boolean('true')" />
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
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/1.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/2.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/3.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/4.jpg'},

                        { imageUrl: '/img/page/dynamic/share/trzj_2018/5.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/6.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/7.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/8.jpg'},
                        
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/9.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/10.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/11.jpg'},
                        { imageUrl: '/img/page/dynamic/share/trzj_2018/12.jpg'}
                    ]
                },
                {
                    title: '2018年青岛黄海学院河南支教队',
                    pics:[
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/1.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/2.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/3.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/4.jpg'},

                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/5.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/6.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/7.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/8.jpg'},

                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/9.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/10.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/11.jpg'},
                        { imageUrl: '/img/page/dynamic/share/hnzj_2018/12.jpg'}
                    ]
                },
                {
                    title: '2018年童愿计划苗楼小学支教队',
                    pics:[
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/1.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/2.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/3.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/4.jpg'},

                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/5.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/6.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/7.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/8.jpg'},

                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/9.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/10.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/11.jpg'},
                        { imageUrl: '/img/page/dynamic/share/mlzj_2018/12.jpg'}
                    ]
                },
                {
                    title: '创客英语梦之翼暑期支教团队',
                    pics:[
                        { imageUrl: '/img/page/dynamic/share/sqzj/1.png'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/2.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/3.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/4.jpg'},

                        { imageUrl: '/img/page/dynamic/share/sqzj/5.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/6.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/7.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/8.jpg'},

                        { imageUrl: '/img/page/dynamic/share/sqzj/9.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/10.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/11.jpg'},
                        { imageUrl: '/img/page/dynamic/share/sqzj/12.jpg'}
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
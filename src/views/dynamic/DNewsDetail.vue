<template>
    <div>
        <SSMainItem :title="dataInfo.title" >
            <div class="ss-clothes-sharing">
                <img :src="dataInfo.imageUrl"/>
            </div>
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
            return this.viewDatas[this.id];
        }
    },
    data:function(){
        return {
            useContextMargin: true,
            viewDatas:[
                {
                    title: '云教室2019年春季学期志愿者招募入选名单公布',
                    imageUrl:'/img/page/dynamic/d0.jpg'
                },
                {
                    title: '河南支教队石恺璐支教总结',
                    imageUrl:'/img/page/dynamic/d1.jpg'
                },
                {
                    title: '关于文某违反梦之队纪律公告的通报',
                    imageUrl:'/img/page/dynamic/d2.jpg'
                },
                {
                    title: '梦之队2018年干事招募入选名单公布',
                    imageUrl:'/img/page/dynamic/d3.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.ss-clothes-sharing{
  > img{
    margin: 0 auto;
    display: block;
  }
}
</style>
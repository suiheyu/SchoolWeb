<template>
    <div>
        <SSMainItem title="2018年暑期支教活动分享">
            <SSImgList :rows="getData()" :item-show-border="isShowBorder" item-font-size="0.88rem" row-align-type="end" row-height="17rem" :hover-active="Boolean('true')" />
        </SSMainItem>
    </div>
</template>
<script>
import CommonUtil from '@/assets/js/CommonUtil';
export default {
    data:function(){
        return {
            isShowBorder: false,
            colN: 4,
            viewDatas: [
                {linkUrl:"/dynamic/share/0",name:"2018年暑期华东分区贵州铜仁支教",imageUrl:"/img/page/dynamic/share/trzj_2018/head.jpg"},
                {linkUrl:"/dynamic/share/1",name:"2018年青岛黄海学院河南支教队",imageUrl:"/img/page/dynamic/share/hnzj_2018/head.jpg"},
                {linkUrl:"/dynamic/share/2",name:"2018年童愿计划苗楼小学支教队",imageUrl:"/img/page/dynamic/share/mlzj_2018/head.jpg"},
                {linkUrl:"/dynamic/share/3",name:"创客英语梦之翼暑期支教团队",imageUrl:"/img/page/dynamic/share/sqzj/head.png"},
            ]
        };
    },
    methods:{
        getData:function(){
            return CommonUtil.toTable(this.viewDatas,this.colN);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
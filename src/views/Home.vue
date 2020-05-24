<template>
  <div class="home">
    <ItemSlot :title="'核心项目'">
      <SSImgItem v-for="(data,i) in coreProject" :key="i" v-bind="data" img-position="bottom" t-width="20rem"  t-height="13.38rem" t-font-size="0.88rem"  :hover-active="Boolean('true')" />
    </ItemSlot>
    <ItemSlot :title="'新闻实事'">
      <NewsTab :datas="news" />
    </ItemSlot>
    <ItemSlot :title="'联系我们'">
      <ContactItem v-for="(data,i) in contactUs" :key="i" v-bind="data" />
    </ItemSlot>
  </div>
</template>

<script>
import p from '@/components/ModuleIdentifier';

export default {
  extends: p,
  name: "home",
  data() {
    return {
      moduleId: 0,
      coreProject:[
        {
          name: "云教室课堂",
          imageUrl: "/img/page/home/pic1.gif",
          linkUrl: "/project/cloud-classroom"
        },
        {
          name: "长期支教",
          imageUrl: "/img/page/home/pic2.gif",
          linkUrl: "/project/support-education"
        },
        {
          name: "短期志愿者",
          imageUrl: "/img/page/home/pic3.gif",
          linkUrl: "/project/volunteer"
        },
        {
          name: "一对一助学",
          imageUrl: "/img/page/home/pic4.gif",
          linkUrl: "/project/help-study"
        }
      ],
      news:[
        {
          name: "最新资讯",
          moreUrl: "/dynamic/news",
          messages:[
            {
              name: "云教室2019年春季学期志愿者招募入选名单公布",
              url: "/dynamic/news/0",
              time: "2018-12-31"
            },
            {
              name: "河南支教队石恺璐支教总结",
              url: "/dynamic/news/1",
              time: "2018-12-31"
            },
            {
              name: "通告/关于文某违反梦之队纪律公告的通报",
              url: "/dynamic/news/2",
              time: "2018-12-11"
            },
            {
              name: "梦之队2018年干事招募入选名单公布",
              url: "/dynamic/news/3",
              time: "2018-12-10"
            }
          ]
        },
        {
          name: "活动分享",
          moreUrl: "/dynamic/share",
          messages:[
            {
              name: "2018年暑期华东分区贵州铜仁支教记录",
              url: "/dynamic/share/0"
            },
            {
              name: "2018年青岛黄海学院河南支教队",
              url: "/dynamic/share/1"
            },
            {
              name: "2018年童愿计划苗楼小学支教队",
              url: "/dynamic/share/2"
            },
            {
              name: "创客英语梦之翼暑期支教团队",
              url: "/dynamic/share/3"
            }
          ]
        }
      ],
      contactUs:[
        {
          "filedName": "电话",
          "filedValue": "18290444597"
        },
        {
          "filedName":"地址",
          "filedValue":"贵州省贵阳市平坝区十字乡马场小学"
        },
        {
          "filedName":"邮箱",
          "filedValue":"229862763@qq.com"
        }
      ]
    }
  }
};
</script>

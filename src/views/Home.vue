<template>
  <div class="home">
    <ItemSlot :title="'核心项目'">
      <ProjectItem v-for="(data,i) in coreProject" :key="i" v-bind="data"/>
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
export default {
  name: "home",
  data() {
    return {
      coreProject:[
        {
          name: "云教室课堂",
          imageUrl: "/img/pic1.png"
        },
        {
          name: "长期支教",
          imageUrl: "/img/pic2.png"
        },
        {
          name: "短期志愿者",
          imageUrl: "/img/pic3.jpg"
        },
        {
          name: "一对一助学",
          imageUrl: "/img/pic4.jpg"
        }
      ],
      news:[
        {
          name: "最新资讯",
          moreUrl: "/te1",
          messages:[
            {
              name: "云教室2019年春季学期志愿者招募入选名单公布",
              url: "/te1/云教室2019年春季学期志愿者招募入选名单公布",
              time: "2018-12-31"
            },
            {
              name: "河南支教队石恺璐支教总结",
              url: "/te1/河南支教队石恺璐支教总结",
              time: "2018-12-31"
            },
            {
              name: "通告/关于文某违反梦之队纪律公告的通报",
              url: "/te1/通告/关于文某违反梦之队纪律公告的通报",
              time: "2018-12-11"
            },
            {
              name: "云教室2019年春季学期志愿者招募入选名单公布",
              url: "/te1/云教室2019年春季学期志愿者招募入选名单公布",
              time: "2018-12-10"
            }
          ]
        },
        {
          name: "活动分享",
          moreUrl: "/te2",
          messages:[
            {
              name: "2018年暑期华东分区贵州铜仁支教记录",
              url: "/te2/2018年暑期华东分区贵州铜仁支教记录"
            },
            {
              name: "2018年青岛黄海学院河南支教队",
              url: "/te2/2018年青岛黄海学院河南支教队"
            },
            {
              name: "2018年童愿计划苗楼小学支教队",
              url: "/te2/2018年童愿计划苗楼小学支教队"
            },
            {
              name: "创客英语梦之翼暑期支教团队",
              url: "/te2/创客英语梦之翼暑期支教团队"
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

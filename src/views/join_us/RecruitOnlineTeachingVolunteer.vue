<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
        <div class="ss-online-teaching">
        志愿者要求：<br />
        热爱公益，服从安排<br />
        有责任心，应变能力较强<br />
        有一定的专业基础，并注重自身授课质量（着重需求音乐、美术、国学方面的志愿者老师）<br />
        至少坚持1学年。授课时间：周一至周五9:00-17:00之间，每周固定时间授课40分钟。<br />
        完成培训、试讲后。才能成为真正的在线授课志愿者。<br />
        授课期间主动与助教沟通，优化授课内容。重视教学成果的产出和收集，并配合数据信息的收集。<br />
        招募长期有效。但每学期的老师开学前半个月停止招募，后面的志愿者以下学期为准；上半年为6月进行面试审核，下半年为12月份进行面试审核，其后进行一个月的培训及一个月的试讲。<br />
        <hr />

        你可以获得<br />
        <ol>
          <li>志愿者服务证明：童年一课为每位支教志愿者提供志愿服务证明。（务时长计算：每授课一节计一小时，培训时间计入时长。）</li>
          <li>实习证明：表现优异（综评95分以上）的高校志愿者提供由小学盖章的实习证明。</li>
          <li>试听老师：优秀志愿者有机会成为听新晋志愿者的试讲。并额外给所在团队加分，利于团队期末评分。</li>
          <li>培训：除了满满干货的授课前培训、期中教学培训，还有与微辣青年、益修学院、嗨创教育等合作，导入个人成长、职业发展等培训课程。</li>
          <li>实习机会：获得童年一课，及合作公益机构、基金会、教育机构的推荐实习机会。</li>
        </ol>
        <hr />

        你需要做<br />
        <span class="arrow">进咨询群</span><span class="arrow">下载报名表</span><span class="arrow">填写报名表</span><span class="arrow">发送至邮箱229862763@qq.com</span><span class="arrow">面试</span><span class="arrow">培训</span>线上授课<br />
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "云教室课堂线上志愿者招募",
        useContextMargin: true
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-online-teaching{
  font-size: $ssContentFontSize * 1.1;

  ol{
    list-style: none;
    padding-left: 0;
    counter-reset: xxx 0;
    > li::before{
      content: counter(xxx,decimal) "）";
      counter-increment: xxx 1;
    }
  }
}

.arrow{
  position: relative;
  margin-right: 3rem;
  margin-left: 0.5rem;
}
.arrow::after{
  content: "";
  position: absolute;
  right: -3rem;
  top: 0.44rem;
  border-left: .6rem solid $ssBlueColor;
  border-top: 0.3rem solid transparent;
  border-bottom: 0.3rem solid transparent;
}
.arrow::before{
content: "";
    position: absolute;
    width: 2rem;
    height: 0.15rem;
    background-color: $ssBlueColor;
    right: -2.5rem;
    top: 0.66rem;
}
</style>
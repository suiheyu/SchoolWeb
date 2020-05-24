<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
        <div class="ss-short-volunteer">
          2017年夏，是梦之队第一次完整地独立开展短期支教活动，炎炎夏日，我们一行人在贵阳相遇，然后兵分两路，去了两所贵州的山区小学，28天。<br />
          2018年初，我们在冰雪天再次走进山区小学，这一次我们的队员更丰富了，真正地来自天南海北，我们一起在贵州看了很多场雪，梦之队的第二次短期支教，18天。<br />
          2018年夏，梦之队地第三次短期支教活动，总队共36人，分区31人参与贵州元宝小学  高峰小学  新花小学<br />
          那些你很冒险的梦，我陪你去疯~<br />
          我不知道看到这篇文章的你有没有了解过梦之队的故事，如果没有，那就看到最后，听我们讲讲我们的故事吧！<br />
          无论如何，我想尝试，以伙伴的身份，让你关心的这一切，都能与你有关。<br />
          这里是来自梦之队支教助学公益的招募令，是给你的一封邀请函。<br />
          如果你感兴趣，欢迎认真地读下去。<br />
          <img src="/img/page/project/volunteer_1.jpg" />
          团队介绍<br />
          梦之队支教助学公益协会是由重庆酷宝教育信息咨询服务有限公司负责人、自由公益人、长期支教老师曾俊刚发起的公益性组织，团队成员均为热爱公益和支教的充满热情的志愿者，我们致力于改善贫困落后地区教育状况，引导更多大学生以及社会人生关注乡村教育发展，树立社会责任感。活动通过网络面向全国招募志愿者，开展以春秋长期支教为主，寒暑假短期支教为辅的山区乡村志愿服务活动。至2018年2月，已和多所乡村小学完成长期支教合作，并已成功完成两届短期支教活动。<br />
          项目介绍<br />
          这里是梦之队支教助学公益协会的第三次短期支教活动，这一次我们将和更多的需要帮助的乡村小学合作，以更成熟的团队形象出现在学生和志愿者面前。本次活动预计会与7所贵州、河南等地区的乡村小学合作，所以我们也需要更多对支教感兴趣的你，来加入我们。<br />
          支教时间（暂定）：<br />
            <p class="tab1">2019年7月21日-8月19日（具体以放假时间为准）</p>
          支教内容：<br />
          <ol>
            <li>辅导学生的暑期作业，以基础知识巩固为主，辅以思维方式、学习习惯的教授；</li>
            <li>开展音乐、阅读、演讲、体育、手工、美术等多重多样的艺术类课程，丰富学生们的暑假生活，激发学生艺术天分；</li>
            <li>为山区的孩子们带去更多丰富世界的模样，展示美好世界，开阔其眼界，树立更积极向上的价值观；</li>
            <li>也欢迎志愿者们更好地发挥主观能动性，和我们一起开展更有意义的支教活动……</li>
          </ol>
          <img src="/img/page/project/volunteer_2.jpg" />
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "2019年暑期短期支教",
        useContextMargin: true
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-short-volunteer{
  font-size: $ssContentFontSize * 1.1;

  >img{
    margin: 1rem auto;
    display: block;
    &:nth-of-type(1){
      width: 40rem;
    }
    &:nth-of-type(2){
      width: 44.5rem;
    }
  }

  p{
    margin: 0;
    padding: 0;
  }

  ol{
    list-style: none;
    padding-left: 0;
    counter-reset: xxx 0;
    > li::before{
      content: counter(xxx,decimal) "、";
      counter-increment: xxx 1;
    }
  }
}
</style>
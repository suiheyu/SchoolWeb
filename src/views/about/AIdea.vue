<template>
  <SSMainItem :title="title" :use-context-margin="useContextMargin">
    <div class="ss-a-idea">
      <section class="m-0">
        <p> ●价值观：“拥有梦、成就梦，团结一致、奋发努力” </p>
        <p> ●奋斗目标：“开启梦想、成就梦想” </p>
        <p> ●服务宗旨：“认真务实、传授知识、吃苦耐劳” </p>
        <p> ●团队精神：“世界上一成不变的东西，只有‘任何事物都是在不断变化的’这条真理。” </p>
      </section>
      <section>
        <h6 class="ss-title-font">支教意义</h6>
        <p>把知识传播给孩子们，给他们带去新知识，拓展他们的视野，增加他们生活、学习的兴趣及对于课外世界的认知。</p>
        <p>希望对孩子的未来的生活和学习有所启发和引导。</p>
        <p>通过支教活动了解当下中国边远山区的教育现状，深刻反思、当代青年在具有良好的资源储备的情况下，能为中国的现代化建设做点什么以及如何尽自己绵薄之力的问题。</p>
        <p>活动无疑是一种重要的人生经历，更是一种历练。通过支教活动，我们对于祖国的国情会更为清晰；对于自身的世界观、人生观有更好的理解；使自己的思想更上一层楼。</p>
        <p>通过锻炼提高了自身方面的素质，为成为先进的思想人群和肩负祖国未来发展重任的合格建设者做好准备。</p>
      </section>
    </div>
  </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "梦之队支教助学中心",
        useContextMargin: true
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-a-idea{
    font-size: $ssContentFontSize * 1.1;
    letter-spacing: 0.03rem;
    color: rgb(38, 38, 38);
}
section {
    margin-top: 1rem;
    > p{
        margin-top: 0.25rem;;
        margin-bottom: 0.25rem;;
    }
}

</style>
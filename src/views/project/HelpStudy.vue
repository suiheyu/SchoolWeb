<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
        <div class="ss-help-study">
          <div class="d-flex justify-content-md-between">
            <div>
              <p>（1）一对一助学模式</p>
              <img src="/img/pic1.png"/>
            </div>
            <div>
              <p>（2）助学学校</p>
              <img src="/img/pic2.png"/>
            </div>
          </div>
          <div>
            （3）助学形式<br />
            资助学校：根据学校的需求，提供物质支持，例如捐助衣服、学习品、教学设备、体育器材<br />
            一对一资助：对家庭困难的学生提供物质帮助，每月或每年给予一定的生活费。例如，小学生200/月，中学生300元/月，高中生500/月。<br />
          </div>
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
.ss-help-study{
  font-size: $ssContentFontSize * 1.1;
  >div{
    &:nth-child(1){
      margin-bottom: 2rem;
      img{
        margin-left: 2rem;
        width: 20rem;
        display: block;
      }
    }
  }
}
</style>
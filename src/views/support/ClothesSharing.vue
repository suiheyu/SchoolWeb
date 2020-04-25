<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
        <div class="ss-clothes-sharing">
          <img src="/img/page/support/v2_pkwfwu.jpg"/>
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        title: "",
        useContextMargin: true
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
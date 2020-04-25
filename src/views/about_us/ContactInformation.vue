<template>
  <SSMainItem :title="title" :use-context-margin="useContextMargin">
    <div class="ss-contact-info d-flex justify-content-around">
      <ContactItem v-for="(data,i) in contactUs" :key="i" v-bind="data" />
    </div>
  </SSMainItem>
</template>
<script>
export default {
  data: function () {
    return {
      title: "联系我们",
      useContextMargin: true,
      contactUs: [
      {
        "filedName": "电话",
        "filedValue": "18290444597"
      },
      {
        "filedName": "地址",
        "filedValue": "贵州省贵阳市平坝区十字乡马场小学"
      },
      {
        "filedName": "邮箱",
        "filedValue": "229862763@qq.com"
      }]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
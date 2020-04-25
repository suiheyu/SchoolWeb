<template>
      <SSMainItem :title="title" :use-context-margin="useContextMargin">
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

</style>
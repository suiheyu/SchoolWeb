<template>
<h1></h1>
</template>
<script>
export default {
  data() {
    return { menus: "testData" };
  },
  mounted: function () {
      this.$emit('ss-change',this.moduleId ? this.moduleId : -1);
  }
};
</script>
<style lang="scss" scoped>
</style>

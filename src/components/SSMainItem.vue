<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title: {
      type: String
    }
  },
  data() {
    return { menus: "testData" };
  }
};
</script>
<style lang="scss" scoped>
</style>

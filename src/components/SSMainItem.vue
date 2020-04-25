<template>
  <div>
    <h1 v-if="title" class="text-center ">{{ title }}</h1>
    <div :class="{'ss-content': useContextMargin}">
      <slot name="default"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title: {
      type: String
    },
    useContextMargin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { menus: "testData" };
  }
};
</script>
<style lang="scss" scoped>
h1{
  font-size: 1.75rem;
  margin: 0.3rem 0.5%;
  width: 99%;
  color: $ssBlueColor;
  padding: 2rem 0;
  border-bottom: 0.06rem solid $ssBlueColor;
}
.ss-content{
    margin: 2rem 6rem; 
}
</style>

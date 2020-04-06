<template>
<div>
<SSBreadcrumb></SSBreadcrumb>
<div v-if="subTitle.length != 0" class="ss-sub-title text-center mt-3 mb-4 ss-blue">
    {{ subTitle }}
</div>
<div class="container">
    <slot name="default"></slot>
</div>
</div>
</template>
<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return { menus: "testData" };
  }
};
</script>
<style lang="scss" scoped>
.ss-sub-title{
    front-size: 1.75rem;
    border-bottom: $ssBlueColor .06rem solid
}
</style>
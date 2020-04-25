<template>
    <div class="ss-contract-item d-flex flex-column justify-content-around align-items-center">
        <span>red</span>
        <span>{{filedName}}</span>
        <span>{{filedValue}}</span>
    </div>
</template>
<script>
export default {
  props: ["filedName", "filedValue"]
};
</script>
<style lang="scss" scoped>
.ss-contract-item {
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 8.3rem;
  height: 8.3rem;
  border-radius: 4.15rem 4.15rem;
  border: 0.35rem solid $ssBlueColor;
  font-size: 0.88rem;
  > span{
      white-space: nowrap;
  }
  > span:first-child{
      color: white;
  }
}
</style>

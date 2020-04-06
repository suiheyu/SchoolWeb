<template>
    <div class="ss-item-slote">
      <div class="ss-item-slote-titile ">{{title}}</div>
      <div class="ss-item-slote-body" :class="classes">
        <slot name="default"></slot>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        classes : {
            type: Object,
            default: function () {
                return {
                    'd-flex': true,
                    'justify-content-md-around': true
                };
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ss-item-slote-titile{
    padding-left: 5rem;
    height: 2.88rem;
    line-height: 2.88rem;
    font-size: 1.6rem;
    color: $ssBlueColor;
    background-color: #E8E5E5;
}
.ss-item-slote{
    padding-top: .1rem;
}
</style>
<template>
    <div class="ss-project-item card" @click="jumpTo" :class="{'border-0' : !showBorder }" :style="itemStyle">
        <div class="card-body" v-if="name && name.length != 0">
            <span>{{name}}</span>
        </div>
        <img :class="imgClass" :src="imageUrl" :style="imgStyle" />
    </div>
</template>
<script>
export default {
    props:{
        name: String,
        imageUrl: String,
        linkUrl: String,
        showBorder: {
            type: Boolean,
            default: true
        },
        cursor: {
            type: String,
            default: 'pointer'
        },
        imgPosition: {
            type: String,
            default: 'top',
            validator: function(value){
                return ['bottom','top','overlay'].indexOf(value) !== -1
            }
        },
        tWidth: String,
        tHeight: String,
        tFontSize: String
    },
    methods:{
        jumpTo: function(){
            if( this.linkUrl ){
                this.$router.push(this.linkUrl)
            }
        }
    },
    data: function(){
        return {
            imgClass: ['card-img',this.imgPosition].filter(str => str).join('-'),
            itemStyle: {
                cursor: this.linkUrl ? this.cursor : undefined,
                width: this.tWidth,
                fontSize: this.tFontSize
            },
            imgStyle: {
                height: this.tHeight,
                order: this.imgPosition == 'bottom' ? 99 : -1
            }
        }
    }
}
</script>
<style lang="scss">
.ss-project-item{
    background-color: transparent;
    text-align: center;
}
</style>
<template>
    <div class="d-flex flex-column justify-content-around align-items-center" :style="{margin: tMargin}">
        <ul v-for="(row,i) in rows" :key="i" class="d-flex justify-content-start p-0 m-0" :class="rowAlignClass" :style="{'height': rowHeight}">
            <li v-for="(item,j) in row" :key="j" >
                <SSImgItem v-bind="bindItemData(item)" :style="{margin: '0 ' + rowMarginWidth}"/>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    props:{
        rows: Array,
        hoverActive: {
            type: Boolean,
            default: false
        },
        hoverEnlarge: {
            type: Boolean,
            default: false
        },
        tMargin: {
            type: String,
            default: "3rem 0"
        },
        rowMarginWidth:{
            type: String,
            default: "1rem"
        },
        rowAlignType:{
            type: String,
            default: "center"
        },
        rowHeight: {
            type: String,
            default: "12.44rem"
        },
        itemShowBorder:{
            type: Boolean,
            default: true
        },
        itemCursor: {
            type: String,
            default: 'pointer'
        },
        itemImgPosition: {
            type: String,
            default: 'top',
            validator: function(value){
                return ['bottom','top','overlay'].indexOf(value) !== -1
            }
        },
        itemWidth: {
            type: String,
            default: "16.75rem"
        },
        itemHeight: String,
        itemFontSize: String
    },
    data:function(){
        return {
            rowAlignClass: `align-items-${this.rowAlignType}`
        };
    },
    methods: {
        bindItemData: function (itemData) {
            return {
                name: itemData.name,
                imageUrl: itemData.imageUrl,
                linkUrl: itemData.linkUrl,
                showBorder: this.itemShowBorder,
                tWidth: this.itemWidth,
                tHeight: this.itemHeight,
                tFontSize: this.itemFontSize,
                cursor: this.itemCursor,
                imgPosition: this.itemImgPosition,
                hoverActive: this.hoverActive,
                hoverEnlarge: this.hoverEnlarge
            }
        }
    }
}
</script>
<style lang="scss" scoped>
li{
    list-style: none;
}
</style>
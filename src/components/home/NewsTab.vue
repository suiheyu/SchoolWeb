<template>
    <div class="ss-news-tab container-fluid">
        <table class="table table-hover container-fluid">
            <caption>
                <span class="mx-4 my-7 text-nowrap" v-for="(item,id) in datas" :class="{'ss-news-active-tab': id == $data.activeIndex}" :key="id" @click="changeActiveIndex(id)">{{item.name}}</span>
                <router-link class="align-self-center text-center float-right mr-5" :to="activeMoreUrl">+更多</router-link>
            </caption>
            <tbody>
                <tr v-for="(message,id) in activeData.messages" :key="id" :url="message.url" @click="doLink(message.url)">
                    <td>{{message.name}}</td>
                    <td class="text-center">{{message.time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

// interface NewsData{
//     name: string;
//     moreUrl: string;
//     message: Array<MessageItem>
// }
// interface MessageItem{
//     name: string;
//     url: string;
//     time: string;a
// }

export default {
    props:{
        datas:{
            type: Array,
            require: true
        }
    },
    data: function(){
        return {
            activeIndex: 0
        };
    },
    methods:{
        changeActiveIndex:function (id) {
            this.activeIndex = id;
        },
        doLink:function(url) {
            this.$router.push(url);
            console.log("click",url);
        }
    },
    computed: {
        activeData: function(){
            return this.datas[this.activeIndex];
        },
        activeMoreUrl: function(){
            return this.datas[this.activeIndex].moreUrl;
        },
        activeClass: function() {
            return {'ss-news-active-tab': true};
        }
    },
}
</script>
<style lang="scss" scoped>
caption {
    caption-side: top;
    > span{
        cursor: pointer;
        &::after{
            content: "";
            width: 0rem;
            transition: all .3s ease;
            left: 1.6rem;
            bottom: -0.3rem;
        }
    }
}
tbody {

    > tr{
        cursor: pointer;
    }
}
.ss-news-tab{
    font-size: 0.88rem;
}

.ss-news-active-tab{
    position: relative;
}

.ss-news-active-tab::after{
    background-color: #ec5b23;
    width: 4rem;
    height: .1rem;
    position: absolute;
    left: -0.3rem;
    bottom: -0.3rem;
}
</style>
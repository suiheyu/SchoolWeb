<template>
    <div class="ss-news-tab container-fluid">
        <table class="table table-hover container-fluid">
            <caption class=" d-flex flex-column justify-content-start">
                <div class="ss-news-tab-year">
                <span class="mx-4 my-7 text-nowrap" v-for="(item,year) in dataList" :class="{'ss-news-active-tab': year == $data.activeYear}" :key="year" @click="changeActiveYear(year)">{{year + '年'}}</span>
                </div>
                <div class="ss-news-tab-month my-1">
                <span class="mx-4 my-7 text-nowrap" v-for="(month) in dataMonthList" :class="{'ss-news-active-tab': month == $data.activeMonth}" :key="month" @click="changeActiveMonth(month)">{{month  + '月'}}</span>
                </div>
            </caption>
            <tbody>
                <tr v-for="(message,id) in activeData" :key="id" :url="message.url" @click="doLink(message.url)">
                    <td>{{message.name}}</td>
                    <td class="text-center">{{message.time}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import DateUtil from '@/assets/js/DateUtil'

function groupBy(array,fKeyGet,fValueGet = item => item, innterGroupBy = item1 => item1){
    let gpMap = {};array.forEach( v => gpMap[fKeyGet(v)] != undefined ? gpMap[fKeyGet(v)].push(fValueGet(v)) : gpMap[fKeyGet(v)]=[fValueGet(v)] );
    for( let key in gpMap ){
        gpMap[key] = innterGroupBy(gpMap[key]);
    }
	return gpMap;
}


export default {
    props:{
        datas:{
            type: Array,
            require: true
        }
    },
    data: function(){
        return {
            activeMonth: 1,
            activeYear: "2018"
        };
    },
    methods:{
        changeActiveYear:function (year) {
            this.activeYear = year;
        },
        changeActiveMonth:function (month) {
            this.activeMonth = month;
        },
        doLink:function(url) {
            console.log("click",url);
        }
    },
    computed: {
        dataList: function(){
            let d = groupBy(
                this.datas, 
                item => item.time.split('-')[0], 
                value => value, 
                array => groupBy(
                    array, 
                    item => Number(item.time.split('-')[1]),
                    value => value
                    )
                );
            return d;
        },
        dataMonthList(){
            return Object.keys(this.dataList[this.activeYear]).sort((a,b) => b - a);
        },
        activeData: function(){
            let d = [];
            try{
                d = this.dataList[this.activeYear][this.activeMonth] || [{name :'无'}];
            }catch(error){
                d = [{name :'无'}];
            }
            return d.sort((p,q) => (p.time < q.time) - 1);
        },
        activeMoreUrl: function(){
            return this.datas[this.activeIndex].moreUrl;
        }
    },
}
</script>
<style lang="scss" scoped>
caption {
    margin: 1rem 0;
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
    width: 120%;
    position: absolute;
    left: -10%;
    bottom: 0;
}

span::after{
    content: "";
    left: 50%;
    width: 0rem;
    bottom: 0;
    transition: all .3s ease;
}

.ss-news-tab-year{
    > span {
        cursor: pointer;
        margin: 0 1rem;
        &::after{
            height: .1rem;
        }
    }
    font-size: 1.25rem;
    color: $ssBlueColor;
    border-bottom: $ssGrayColor 0.07rem solid;
    margin: 0.07rem 0;
}

.ss-news-tab-month{
    > span {
        font-size: 1rem;
        cursor: pointer;
        &::after{
            height: .05rem;
        }
    }
}
</style>
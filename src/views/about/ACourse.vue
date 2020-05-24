<template>
      <SSMainItem :use-context-margin="useContextMargin">
        <div class="ss-a-course">
          <div>
            <h6 class="ss-title-font">2018年支教团队成员</h6>
            <div class="org-structure">
              <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center align-items-center flex-column department-top">
                  <span class="d-block">会长</span>
                  <span class="d-block">曾俊刚</span>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-around align-items-center">
                <div class="d-flex flex-column align-items-center">
                  <div class="department d-flex justify-content-center align-items-center">财务部</div>
                  <div class="member">
                    <span>王英杰</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="department d-flex justify-content-center align-items-center">项目部</div>
                  <div class="member">
                    <span>薛静玲</span>
                    <span>王茂旭</span>
                    <span>何丽</span>
                    <span>郑威</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="department d-flex justify-content-center align-items-center">宣传部</div>
                  <div class="member">
                    <span>许芊芊</span>
                    <span>冉军艳</span>
                    <span>马左莲</span>
                    <span>王红</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="department d-flex justify-content-center align-items-center">支教部</div>
                  <div class="member">
                    <span>侯良婧</span>
                    <span>冯申尧</span>
                    <span>黄雪</span>
                    <span>成敏</span>
                    <span>周丹</span>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="department d-flex justify-content-center align-items-center">外联部</div>
                  <div class="member">
                    <span>陈琪</span>
                    <span>文路祎</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 class="ss-title-font">现有长期支教合作地点</h6>
            <div class="row places">
              <div :class="rendorClass(item.isInsert)" v-for="(item,id) in rendorPlaces" :key="id" class="d-flex justify-content-center align-items-center">
                <SSImgItem  v-bind="item" v-show="!item.isInsert" img-position="bottom" :show-border="showBorder" t-width="17.5rem" t-height="11.56rem"/>
              </div>
            </div>
          </div>
          <div>
            <h6 class="ss-title-font">短期支教历史记录</h6>
            <div class="history">
              <table class="table table-bordered">
                <thead>
                  <th v-for="(title,id) in historyTableHead" :key="id">{{title}}</th>
                </thead>
                <tbody>
                  <tr v-for="(row,id) in historyTableBody" :key="id">
                    <td v-for="(col,id) in row" :key="id">{{col}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SSMainItem>
</template>
<script>
export default {
    data: function(){
      return {
        useContextMargin: true,
        columnNumber: 3,
        showBorder: false,
        places: [
          {
            name: "湖南省株洲市炎陵县船形乡学校",
            imageUrl: "/img/page/support/school1.jpg"
          },
          {
            name: "湖南省株洲市炎陵县下村乡学校",
            imageUrl: "/img/page/support/school4.jpg"
          },
          {
            name: "湖南省株洲市炎陵县职业技术学校",
            imageUrl: "/img/page/support/school2.jpg"
          },
          {
            name: "湖南省株洲市炎陵县炎陵中学",
            imageUrl: "/img/page/support/school3.jpg"
          },
          {
            name: "湖南省株洲市炎陵县水口镇学校",
            imageUrl: "/img/page/support/school5.jpg"
          },
          {
            name: "湖南省株洲市炎陵县沔渡镇学校",
            imageUrl: "/img/page/support/school6.jpg"
          },
          {
            name: "湖南省株洲市炎陵县鹿原镇学校",
            imageUrl: "/img/page/support/school7.jpg"
          },
          {
            name: "贵州毕节市大方县对江镇元宝小学",
            imageUrl: "/img/page/support/school9.jpg"
          },
          {
            name: "河南省南阳市方城县柳河乡孙沟学校",
            imageUrl: "/img/page/support/school8.jpg"
          }
        ],
        historyTable:[
          ["时间","分队","人数","地区","学校"],
          ["2017年暑假","2个分队","28人","贵州省毕节织金县","龙井小学 补花小学"],
          ["2017年暑假","2个分队","28人","贵州省平坝区 毕节大方县","马场小学 元宝小学"],
          ["2018年暑假","3个分队","36人","贵州省毕节大方县 册亨县","元宝小学 高峰小学 新花小学"],
          ["2018年暑假华东分区","2个分队","31人","贵州省铜仁市沿河县","杨楠完小 柏杨小学"]
        ]
      }
    },
    methods:{
      rendorClass: function (isInsert) {
        return {
          col: !isInsert,
          'w-100': isInsert
        };
      }
    },
    computed:{
      rendorPlaces: function(){
        let rendorPlaces = [];
        for( let i in this.places ){
          let temp = Object.assign({isInsert: false},this.places[i]);
          temp.name = Number(i) + 1 + "." + temp.name;
          rendorPlaces.push(temp);
          if( i != 0  && (i + 1) % this.columnNumber == 0){
            rendorPlaces.push({isInsert: true});
          }
        }
        return rendorPlaces;
      },
      historyTableHead: function () {
        return this.historyTable[0];
      },
      historyTableBody: function () {
        return this.historyTable.slice(1);
      }
    }
}
</script>
<style lang="scss" scoped>
.ss-a-course {
  >div {
    padding: 1.5rem 6rem;
    margin: 0 -6rem 0 -6rem;
    font-size: $ssContentFontSize;
    >h6{
      margin: 1rem 0 1rem -0.5rem;
    }
    &:nth-child(1) {
      ~div {
        border-top: 0.06rem solid $ssGrayColor
      }
    }
  }
}
.places{
  > div[class~="w-100"]{
    margin-bottom: 2rem;
  }
}
.member{
  writing-mode:vertical-lr;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.95rem;
  > span{
    display: block;
    margin: 0 0.25rem;
    letter-spacing: 0.3rem;
  }
}
.department{
  position: relative;
  width: 12.5rem;
  height: 4.44rem;
  border: 0.06rem solid $ssBlueColor;
  margin: 1rem 0;
  font-size: 1rem;
  &::before{
    content: "";
    position: absolute;
    width: 1rem;
    border-left: 0.06rem solid $ssBlueColor;
    height: 1rem;
    left: 50%;
    top: -1rem;
  }
}
.department-top{
  position: relative;
  width: 12.5rem;
  height: 4.44rem;
  border: 0.06rem solid $ssBlueColor;
  margin: 1rem 0;
  font-size: 1rem;
    &::before{
    content: "";
    position: absolute;
    width: 1rem;
    border-left: 0.06rem solid $ssBlueColor;
    height: 1rem;
    left: 50%;
    bottom: -1.1rem;
  }
}
.org-structure{
  >div:nth-child(2) {
    position: relative;

    &::before {
      content: "";
      width: 80%;
      height: 1rem;
      border-top: 0.06rem solid $ssBlueColor;
      position: absolute;
      top: 0;
    }
  }
}

</style>
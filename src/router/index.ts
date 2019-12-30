import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
  titile: "网站首页",
  link: "",
  children: []
}, {
  titile: "关于梦之队",
  link: "",
  children: [
  {
    titile: "简介",
    link: "",
    children: []
  }, {
    titile: "理念",
    link: "",
    children: []
  }, {
    titile: "历程",
    link: "",
    children: []
  }, {
    titile: "合作伙伴",
    link: "",
    children: []
  }]
}, {
  titile: "梦之队动态",
  link: "",
  children: [{
    titile: "新闻动态",
    link: "",
    children: []
  }, {
    titile: "教育资源",
    link: "",
    children: []
  }, {
    titile: "活动分享",
    link: "",
    children: []
  }]
}, {
  titile: "梦之队项目",
  link: "",
  children: [{
    titile: "云教室课堂",
    link: "",
    children: []
  }, {
    titile: "长期支教",
    link: "",
    children: []
  }, {
    titile: "短期志愿者",
    link: "",
    children: []
  }, {
    titile: "一对一助学",
    link: "",
    children: []
  }]
}, {
  titile: "爱心资助",
  link: "",
  children: [{
    titile: "衣物分享",
    link: "",
    children: []
  }, {
    titile: "资金捐赠",
    link: "",
    children: []
  }, {
    titile: "产品义卖",
    link: "",
    children: []
  }]
}, {
  titile: "加入我们",
  link: "",
  children: [{
    titile: "支教志愿者",
    link: "",
    children: []
  }, {
    titile: "干事招聘",
    link: "",
    children: []
  }, {
    titile: "云教室课堂",
    link: "",
    children: []
  }]
}, {
  titile: "联系我们",
  link: "",
  children: [{
    titile: "联系方式",
    link: "",
    children: []
  }, {
    titile: "支持我们",
    link: "",
    children: []
  }, {
    titile: "信息反馈",
    link: "",
    children: []
  }]
}];

console.log(routes)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

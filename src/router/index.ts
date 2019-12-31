import Vue from "vue"; 
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const menuRoutes = [
  {
    titile: "网站首页",
    path: "/",
    name: "Home",
    component: Vue.component("Home"),
    children: []
  },
  {
    titile: "关于梦之队",
    path: "/about",
    name: "About",
    component: Vue.component("About");
    children: [
    {
      titile: "简介",
      path: "introduction",
      name: "Introduction",
      component: Vue.component("Introduction");
      children: []
    },
    {
      titile: "理念",
      path: "idea",
      name: "Idea",
      component: Vue.component("Idea"),
      children: []
    },
    {
      titile: "历程",
      path: "course",
      name: "Course",
      component: Vue.component("Course"),
      children: []
    },
    {
      titile: "合作伙伴",
      path: "patner",
      name: "Patner",
      component: Vue.component("Patner"),
      children: []
    }]
  },
  {
    titile: "梦之队动态",
    path: "/dynamic",
    name: "Dynamic",
    component: Vue.component("Dynamic"),
    children: [{
      titile: "新闻动态",
      path: "news",
      name: "News",
      component: Vue.component("News"),
      children: []
    },
    {
      titile: "教育资源",
      path: "resource",
      name: "Resource",
      component: Vue.component("Resource"),
      children: []
    },
    {
      titile: "活动分享",
      path: "share",
      name: "Share",
      component: Vue.component("Share"),
      children: []
    }]
  },
  {
    titile: "梦之队项目",
    path: "/project",
    name: "Project",
    component: Vue.component("Project"),
    children: [{
      titile: "云教室课堂",
      path: "cloud-classroom",
      name: "CloudClassroom",
      component: Vue.component("CloudClassroom"),
      children: []
    },
    {
      titile: "长期支教",
      path: "support-education",
      name: "SupportEducation",
      component: Vue.component("SupportEducation"),
      children: []
    },
    {
      titile: "短期志愿者",
      path: "volunteer",
      name: "Volunteer",
      component: Vue.component("Volunteer"),
      children: []
    },
    {
      titile: "一对一助学",
      path: "help-study",
      name: "HelpStudy",
      component: Vue.component("HelpStudy"),
      children: []
    }]
  },
  {
    titile: "爱心资助",
    path: "/support",
    name: "Support",
    component: Vue.component("Support"),
    children: [{
      titile: "衣物分享",
      path: "clothes-sharing",
      name: "ClothesSharing",
      component: Vue.component("ClothesSharing"),
      children: []
    },
    {
      titile: "资金捐赠",
      path: "fund-donation",
      name: "FundDonation",
      component: Vue.component("FundDonation"),
      children: []
    },
    {
      titile: "产品义卖",
      path: "product-sale",
      name: "ProductSale",
      component: Vue.component("ProductSale"),
      children: []
    }]
  },
  {
    titile: "加入我们",
    path: "/join-us",
    name: "JoinUs",
    component: Vue.component("JoinUs"),
    children: [{
      titile: "支教志愿者",
      path: "recruit-offline-teaching-volunteer",
      name: "RecruitOfflineTeachingVolunteer",
      component: Vue.component("RecruitOfflineTeachingVolunteer"),
      children: []
    },
    {
      titile: "干事招聘",
      path: "recruit-officer",
      name: "RecruitOfficer",
      component: Vue.component("RecruitOfficer"),
      children: []
    },
    {
      titile: "云教室课堂",
      path: "recruit-online-teaching-volunteer",
      name: "RecruitOnlineTeachingVolunteer",
      component: Vue.component("RecruitOnlineTeachingVolunteer"),
      children: []
    }]
  },
  {
    titile: "联系我们",
    path: "/about-us",
    children: [{
      titile: "联系方式",
      path: "contact-information",
      name: "ContactInformation",
      component: Vue.component("ContactInformation"),
      children: []
    },
    {
      titile: "支持我们",
      path: "support-us",
      name: "SupportUs",
      component: Vue.component("SupportUs"),
      children: []
    },
    {
      titile: "信息反馈",
      path: "feedback",
      name: "Feedback",
      component: Vue.component("Feedback"),
      children: []
    }]
  }
]

const routes = [
{
  path: "/",
  name: "Home",
  component: Vue.component("Home")
},
{
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import( /* webpackChunkName: "about" */ "../views/About.vue")
}
];



console.log(routes)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

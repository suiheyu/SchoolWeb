import Vue from "vue"; 
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const menuRoutes = [
  {
    path: "/",
    name: "网站首页",
    title: "网站首页",
    component: () => Promise.resolve(Vue.component("Home")),
    children: []
  },
  {
    title: "关于梦之队",
    path: "/about",
    name: "关于梦之队",
    component: () => Promise.resolve(Vue.component("About")),
    children: [
    {
      title: "简介",
      path: "introduction",
      name: "简介",
      component: () => Promise.resolve(Vue.component("AIntroduction")),
      children: []
    },
    {
      title: "理念",
      path: "idea",
      name: "理念",
      component: () => Promise.resolve(Vue.component("AIdea")),
      children: []
    },
    {
      title: "历程",
      path: "course",
      name: "历程",
      component: () => Promise.resolve(Vue.component("ACourse")),
      children: []
    },
    {
      title: "合作伙伴",
      path: "patner",
      name: "合作伙伴",
      component: () => Promise.resolve(Vue.component("APatner")),
      children: []
    }]
  },
  {
    title: "梦之队动态",
    path: "/dynamic",
    name: "梦之队动态",
    component: () => Promise.resolve(Vue.component("Dynamic")),
    children: [{
      title: "新闻动态",
      path: "news",
      name: "新闻动态",
      component: () => Promise.resolve(Vue.component("DNews")),
      children: []
    },
    {
      title: "教育资讯",
      path: "information",
      name: "教育资讯",
      component: () => Promise.resolve(Vue.component("DInformation")),
      children: []
    },
    {
      title: "活动分享",
      path: "share",
      name: "活动分享",
      component: () => Promise.resolve(Vue.component("DShare")),
      children: []
    },
    {
      hide: true,
      title: "活动分享",
      path: "share/:id",
      name: "活动分享",
      component: () => Promise.resolve(Vue.component("DShareDetail")),
      props: (route:any) => ({id:Number(route.params.id)}),
      children: []
    }]
  },
  {
    path: "/project",
    name: "梦之队项目",
    title: "梦之队项目",
    component: () => Promise.resolve(Vue.component("Project")),
    children: [{
      title: "云教室课堂",
      path: "cloud-classroom",
      name: "云教室课堂",
      component: () => Promise.resolve(Vue.component("PCloudClassroom")),
      children: []
    },
    {
      title: "长期支教",
      path: "support-education",
      name: "长期支教",
      component: () => Promise.resolve(Vue.component("SupportEducation")),
      children: []
    },
    {
      title: "短期志愿者",
      path: "volunteer",
      name: "短期志愿者",
      component: () => Promise.resolve(Vue.component("Volunteer")),
      children: []
    },
    {
      title: "一对一助学",
      path: "help-study",
      name: "一对一助学",
      component: () => Promise.resolve(Vue.component("HelpStudy")),
      children: []
    }]
  },
  {
    title: "爱心资助",
    path: "/support",
    name: "爱心资助",
    component: () => Promise.resolve(Vue.component("Support")),
    children: [{
      title: "衣物分享",
      path: "clothes-sharing",
      name: "衣物分享",
      component: () => Promise.resolve(Vue.component("ClothesSharing")),
      children: []
    },
    {
      title: "资金捐赠",
      path: "fund-donation",
      name: "资金捐赠",
      component: () => Promise.resolve(Vue.component("FundDonation")),
      children: []
    },
    {
      title: "产品义卖",
      path: "product-sale",
      name: "产品义卖",
      component: () => Promise.resolve(Vue.component("ProductSale")),
      children: []
    }]
  },
  {
    title: "加入我们",
    path: "/join-us",
    name: "加入我们",
    component: () => Promise.resolve(Vue.component("JoinUs")),
    children: [{
      title: "支教志愿者",
      path: "recruit-offline-teaching-volunteer",
      name: "支教志愿者",
      component: () => Promise.resolve(Vue.component("RecruitOfflineTeachingVolunteer")),
      children: []
    },
    {
      title: "干事招聘",
      path: "recruit-officer",
      name: "干事招聘",
      component: () => Promise.resolve(Vue.component("RecruitOfficer")),
      children: []
    },
    {
      title: "云教室课堂",
      path: "recruit-online-teaching-volunteer",
      name: "云教室课堂",
      component: () => Promise.resolve(Vue.component("RecruitOnlineTeachingVolunteer")),
      children: []
    }]
  },
  {
    title: "联系我们",
    name: "联系我们",
    path: "/about-us",
    component: () => Promise.resolve(Vue.component("AboutUs")),
    children: [{
      title: "联系方式",
      path: "contact-information",
      name: "联系方式",
      component: () => Promise.resolve(Vue.component("ContactInformation")),
      children: []
    },
    {
      title: "支持我们",
      path: "support-us",
      name: "支持我们",
      component: () => Promise.resolve(Vue.component("SupportUs")),
      children: []
    },
    {
      title: "信息反馈",
      path: "feedback",
      name: "信息反馈",
      component: () => Promise.resolve(Vue.component("Feedback")),
      children: []
    }]
  }
]

const routes = [
{
  path: "/",
  name: "Home",
  component: () => Promise.resolve(Vue.component("Home"))
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
console.log(routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: menuRoutes
});

export {menuRoutes}

export default router;

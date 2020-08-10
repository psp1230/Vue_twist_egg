import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout";
import OuterHTML from "@/components/OuterHTML";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/components/Home"),
        name: "Home"
      },
      {
        path: "/translate",
        component: OuterHTML,
        name: OuterHTML
      },
      {
        path: "/game",
        component: () => import("@/components/game"),
        name: "Game"
      },
      {
        path: "/shop-:id",
        component: () => import("@/components/Shop"),
        name: "Shop"
      },
      {
        path: "/shop-:id/product:pid",
        component: () => import("@/components/Product"),
        name: "Product"
      },
      {
        path: "/blog",
        component: () => import("@/components/Blog"),
        name: "Blog"
      },
      {
        path: "/post",
        component: () => import("@/components/Post"),
        name: "Post"
      },
      {
        path: "/cart",
        component: () => import("@/components/Cart"),
        name: "Cart"
      },
      {
        path: "/login",
        component: () => import("@/components/Login"),
        name: "Login"
      },
      {
        path: "/signup",
        component: () => import("@/components/Signup"),
        name: "Signup"
      },
      {
        path: "/commonproblem",
        component: () => import("@/components/Commonproblem"),
        name: "Commonproblem"
      },
      {
        path: "/member",
        component: () => import("@/components/Member"),
        name: "Member"
      },
      {
        path: "/search?shopid:id",
        component: () => import("@/components/Search"),
        name: "Search"
      },
      {
        path: "/searchshop",
        component: () => import("@/components/searchShop"),
        name: "searchShop"
      },
      {
        path: "/searchNotfound",
        component: () => import("@/components/searchNotfound"),
        name: "searchNotfound"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

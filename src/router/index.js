import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
const Detail = () => import("views/detail/Detail");
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    component: Home,
    path: "/home"
  },
  {
    component: Category,
    path: "/category"
  },
  {
    component: Cart,
    path: "/cart"
  },
  {
    component: Profile,
    path: "/profile"
  },
  {
    component: Detail,
    // path: "/detail"
    path: "/detail/:iid"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;

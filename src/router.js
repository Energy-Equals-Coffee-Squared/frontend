import Vue from "vue";
import Router from "vue-router";
import Register from "./views/Register";
import Home from "./views/Home"
import Products from "./views/Products";
import Login from "./views/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      //Route 1 of array
      path: "/register",
      component: Register,
      name: "register"
    },
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/product",
      component: Products,
      name:"products"
    },
    {
      path: "/login",
      component: Login,
      name:"login"
    }
  ]
});

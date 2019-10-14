import Vue from "vue";
import Router from "vue-router";
import Register from "./views/Register";
import Home from "./views/Home"
import Products from "./views/Products";
import Login from "./views/Login";
import About from "./views/About";
import CoffeeHelp from "./views/CoffeeHelp";

import edtProd from "./views/EditProducts";

import Cart from "./views/Cart";
import SpecProd from "./views/SpecProd";


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
    },
    {
      path: "/about",
      component: About,
      name:"about"
    },
    {
      path : "/coffeehelp",
      component:CoffeeHelp,
      name:"coffeehelp"
    },
    {

      path: "/edtProd/:Id",
      component: edtProd,
      name: "edtProd"
    },
    {
      path :"/cart",
      component: Cart,
      name:"cart"

    },
    {
      path :"/product/:Id",
      component: SpecProd,
      name: "SpecProd"
    }

  ]
});

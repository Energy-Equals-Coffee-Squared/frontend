import Vue from "vue";
import Router from "vue-router";
import Register from "./views/Register";
import Home from "./views/Home";
import Products from "./views/Products";
import Login from "./views/Login";
import About from "./views/About";
import CoffeeHelp from "./views/CoffeeHelp";

import edtProd from "./views/EditProducts";

import Cart from "./views/Cart";
import Invoices from "./views/Invoices";
import SpecificInvoice from "./views/SpecificInvoice";
import SpecProd from "./views/SpecProd";
import AdminProducts from "./views/AdminProducts";
import UsrEdit from "./views/UsrEdit";
import UsrDelete from "./views/UsrDelete";
import AdminUser from "./views/AdminUser";
import Reports from "./views/Reports";

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
      name: "products"
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/about",
      component: About,
      name: "about"
    },
    {
      path: "/coffeehelp",
      component: CoffeeHelp,
      name: "coffeehelp"
    },
    {
      path: "/cart",
      component: Cart,
      name: "cart"
    },
    {
      path: "/invoices",
      component: Invoices,
      name: "invoices"
    },
    {
      path: "/invoices/:Id",
      component: SpecificInvoice,
      name: "SpecificInvoice"
    },
    {
      path: "/product/:Id",
      component: SpecProd,
      name: "SpecProd"
    },
    {
      path: "/admin/editProduct/:Id",
      component: edtProd,
      name: "edtProd"
    },
    {
      path: "/admin/products",
      component: AdminProducts,
      name: "AdminProducts"
    },
    {
      path:"/admin/Users",
      component: AdminUser,
      name: "AdminUser"
    },
    {
      path: "/admin/UsrEdit/:Id",
      component : UsrEdit,
      name: "UsrEdit"
    },
    {
      path: "/admin/UsrDelete/:Id",
      component: UsrDelete,
      name: "UsrDelete"
    },
    {
      path: "/admin/Report",
      component: Reports,
      name: "Reports"
    }
  ]
});

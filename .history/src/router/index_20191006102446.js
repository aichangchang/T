import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import AboutUs from '@/components/aboutus.vue'
import Products from '@/components/products.vue'
import Details from '@/components/details.vue'
import Contact from '@/components/contact.vue'
Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "HOME"
    }
  },{
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "HOME"
    }
  },{
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: "About Us"
    }
  },{
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      title: "Products"
    }
  },{
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: "Contact"
    }
  }]
})

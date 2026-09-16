import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProductListPage from '@/MiniShoppingCart/Product/ProductListPage.vue'
import CartPage from '@/MiniShoppingCart/Cart/CartPage.vue'
import SearchInput from '@/SearchInput/SearchInput.vue'
import Login from '@/MiniShoppingCart/Login/login.vue'
// import ProductListPage from '@/MiniShoppingCart/ProductListPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/profile',
      component:ProfileView
    },
   {
    path:'/products',
    component:ProductListPage
   },
   {
    path:'/cart',
    component:CartPage
   }
,
 {
    path:'/search',
    component:SearchInput
   },
    {
    path:'/login',
    component: Login,
   }
  ],
})

export default router

 // {
    //   path: '/cart',
    //   component: () => import('../views/CartView.vue'),
    // },
    //  {
    //   path: '/products',
    //   component: ProductListPage,
    // },

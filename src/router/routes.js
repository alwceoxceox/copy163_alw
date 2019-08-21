import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personage from '../pages/Personage/Personage.vue'
import Photograph from '../pages/Photograph/Photograph.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'

export default[
    {
    path:'/home',
    component:Home,
    meta: {
      showFooter: true
    }
  },
    {
    path:'/classify',
    component:Classify,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/photograph',
    component:Photograph,
    meta: {
      showFooter: true
    }
  },
    
  {
    path:'/shoppingCart',
    component:ShoppingCart,
    meta: {
      showFooter: true
    }
  },
   
  {
    path:'/personage',
    component:Personage,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  }
]
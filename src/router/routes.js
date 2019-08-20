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
    component:Home
  },
    {
    path:'/classify',
    component:Classify
  },
  {
    path:'/photograph',
    component:Photograph
  },
    
  {
    path:'/shoppingCart',
    component:ShoppingCart
  },
   
  {
    path:'/personage',
    component:Personage
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
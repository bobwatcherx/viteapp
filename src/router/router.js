import {createRouter,createWebHashHistory} from 'vue-router'
import About from '../pages/About.vue'
import Utama from '../pages/Utama.vue'
import Makan from '../pages/Makan.vue'
const routes = [
  { path: '/', component: Utama },
  { 
  	path: '/about/:id', name:'About',
  	meta:{
  		transition:'slide-right'
  	},
  component: About,props:true 
	},
  { path: '/makan/:makanan', props:true,component: Makan },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
export default router;
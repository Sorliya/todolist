import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Myprofile from '../components/Myprofile'
import Todolist from '../components/Todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
			path:'/profile',
			component:Myprofile
		},
		{
			path:'/todolist',
			component:Todolist
		}
  ]
})

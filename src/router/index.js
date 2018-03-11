import Vue from 'vue'
import Router from 'vue-router'

const About = () => import('components/about/about')
const Construction = () => import('components/construction/construction')
const Cooperation = () => import('components/cooperation/cooperation')
const Donate = () => import('components/donate/donate')
const Home = () => import('components/home/home')
const Information = () => import('components/information/information')
const Performance = () => import('components/performance/performance')
const Introduce = () => import('components/about/introduce')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About,

    },
    {
      path: '/introduce',
      component: Introduce,
      
    },
    {
      path: '/performance',
      component: Performance
    },
    {
      path: '/cooperation',
      component: Cooperation
    },
    {
      path: '/information',
      component: Information
    },
    {
      path: '/donate',
      component: Donate
    },
    {
      path: '/construction',
      component: Construction
    }
  ]
})


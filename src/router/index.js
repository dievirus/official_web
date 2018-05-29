import Vue from 'vue'
import Router from 'vue-router'

const Construction = () => import('components/construction/construction')
const Cooperation = () => import('components/cooperation/cooperation')
const Donate = () => import('components/donate/donate')
const Home = () => import('components/home/home')
const Information = () => import('components/information/information')
const Performance = () => import('components/performance/performance')
const Introduce = () => import('components/about/introduce')

const About = () => import('components/about/about')
const About1 = () => import('components/about/about1')
const About2 = () => import('components/about/about2')

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
      redirect: '/about/a',
      children: [
        {
          path:'a',
          component: About1
        },
        {
          path:'b',
          component: About2
        },
      ]
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


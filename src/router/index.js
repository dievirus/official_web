import Vue from 'vue'
import Router from 'vue-router'

// const Construction = () => import('components/construction/construction')
const Cooperation = () => import('components/cooperation/cooperation')
const Donate = () => import('components/donate/donate')
const Home = () => import('components/home/home')
const Information = () => import('components/information/information')
const Performance = () => import('components/performance/performance')
const Detailcontent = () => import('components/detailcontent/detailcontent')
const List = () => import('components/list2/list2')
const List1 = () => import('components/list1/list1')
const DetailInfo = () => import('components/detailinfo/detailinfo')

// 关于我们
const About = () => import('components/about/about')
const About1 = () => import('components/about/about1')
const About2 = () => import('components/about/about2')
const About3 = () => import('components/about/about3')
const About4 = () => import('components/about/about4')
const About5 = () => import('components/about/about5')

// 公司业绩
const Achievement = () => import('components/achievement/achievement')
const Achievement1 = () => import('components/achievement/achievement1')
const Achievement2 = () => import('components/achievement/achievement2')
const Achievement3 = () => import('components/achievement/achievement3')
const Achievement4 = () => import('components/achievement/achievement4')

// 投资合作
const cooperation = () => import('components/cooperation/cooperation')
const cooperation1 = () => import('components/cooperation/cooperation1')
const cooperation2 = () => import('components/cooperation/cooperation2')

// 公司资讯
const information = () => import('components/information/information')
const information1 = () => import('components/information/information1')
const information2 = () => import('components/information/information2')
const information3 = () => import('components/information/information3')

// 爱心捐赠
const donate = () => import('components/donate/donate')
const donate1 = () => import('components/donate/donate1')

// 党建工作
const construction = () => import('components/construction/construction')
const construction1 = () => import('components/construction/construction1')
const construction2 = () => import('components/construction/construction2')
const construction3 = () => import('components/construction/construction3')
const construction4 = () => import('components/construction/construction4')

Vue.use(Router)

export default new Router({
  // mode:'history',
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
        {
          path:'c',
          component: About3,
        },
        {
          path:'d',
          component: About4,
          redirect: 'd/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 14,
                url:'/about/d/detail/e/',
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新事记',
                    url:'/about/d/detail/e/',
                    nav:'首页>关于我们>大事记>详情',
                    type:14
                  }
                }
              ]
            },
          ]
        },
        {
          path:'e',
          component: About5
        },
        
      ]
    },
    {
      path: '/achievement',
      component: Achievement,
      redirect: '/achievement/d',
      children: [
        {
          path:'a',
          component: Achievement1,
          redirect: 'a/list',
          children: [
            {
              path: 'list',
              component: List1,
              meta: {
                type: 1,
                url:'/achievement/a/detail/e/',
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新获奖工程',
                    url:'/achievement/a/detail/e/',
                    nav:'首页>公司业绩>获奖工程>详情',
                    type:1
                  }
                }
              ]
            }
          ]
        },
        {
          path:'b',
          component: Achievement2,
          redirect: 'b/list',
          children: [
            {
              path: 'list',
              component: List1,
              meta: {
                type:2,
                url:'/achievement/b/detail/e/',
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新工程动态',
                    url:'/achievement/b/detail/e/',
                    nav:'首页>公司业绩>工程动态>详情',
                    type:2
                  }
                }
              ]
            }
          ]
        },
        {
          path:'c',
          component: Achievement3,
          redirect: 'c/list',
          children: [
            {
              path: 'list',
              component: List1,
              meta: {
                type: 3,
                url:'/achievement/c/detail/e/',
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新市政工程',
                    url:'/achievement/c/detail/e/',
                    nav:'首页>公司业绩>市政工程>详情',
                    type:3
                  }
                }
              ]
            }
          ]
        },
        {
          path:'d',
          component: Achievement4,
          redirect: 'd/list',
          children: [
            {
              path: 'list',
              component: List1,
              meta: {
                type: 15,
                url:'/achievement/d/detail/e/',
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新工程案例',
                    url:'/achievement/d/detail/e/',
                    nav:'首页>公司业绩>工程案例>详情',
                    type:15
                  }
                }
              ]
            }
          ]
        },
      ]
    },
    {
      path: '/cooperation',
      component: cooperation,
      redirect: '/cooperation/a',
      children: [
        {
          path:'a',
          component: cooperation1,
          redirect: 'a/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 4,
                url:'/cooperation/a/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新合作',
                    url:'/cooperation/a/detail/e/',
                    nav:'首页>投资合作>合作动态>详情',
                    type:4
                  }
                }
              ]
            },
          ]
        },
        {
          path:'b',
          component: cooperation2
        },
      ]
    },
    {
      path: '/information',
      component: information,
      redirect: '/information/a',
      children: [
        {
          path:'a',
          component: information1,
          redirect: 'a/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 6,
                url:'/information/a/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新通知公告',
                    url:'/information/a/detail/e/',
                    nav:'首页>公司资讯>通知公告>详情',
                    type:6
                  }
                }
              ]
            },
          ]
        },
        {
          path:'b',
          component: information2,
          redirect: 'b/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 7,
                url:'/information/b/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新公司动态',
                    url:'/information/b/detail/e/',
                    nav:'首页>公司资讯>公司动态>详情',
                    type:7
                  }
                }
              ]
            },
          ]
        },
        {
          path:'c',
          component: information3,
          redirect: 'c/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 8,
                url:'/information/c/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新人力资源',
                    url:'/information/c/detail/e/',
                    nav:'首页>公司资讯>人力资源>详情',
                    type:8
                  }
                }
              ]
            },
          ]
        },
      ]
    },
    {
      path: '/donate',
      component: donate,
      redirect: '/donate/a',
      children: [
        {
          path:'a',
          component: donate1,
          redirect: 'a/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 9,
                url:'/donate/a/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新爱心捐赠',
                    url:'/donate/a/detail/e/',
                    nav:'首页>爱心捐赠>详情',
                    type:9
                  }
                }
              ]
            },
          ]
        },
      ]
    },
    {
      path: '/construction',
      component: construction,
      redirect: '/construction/a',
      children: [
        {
          path:'a',
          component: construction1,
          redirect: 'a/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 10,
                url:'/construction/a/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新工会工作',
                    url:'/construction/a/detail/e/',
                    nav:'首页>公司党建>公会工作>详情',
                    type:10
                  }
                }
              ]
            },
          ]
        },
        {
          path:'b',
          component: construction2,
          redirect: 'b/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 11,
                url:'/construction/b/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新建筑业协会',
                    url:'/construction/b/detail/e/',
                    nav:'首页>公司党建>建筑业协会>详情',
                    type:11
                  }
                }
              ]
            },
          ]
        },
        {
          path:'c',
          component: construction3,
          redirect: 'c/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 12,
                url:'/construction/c/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新党风廉洁',
                    url:'/construction/c/detail/e/',
                    nav:'首页>公司党建>党风廉洁>详情',
                    type:12
                  }
                }
              ]
            },
          ]
        },
        {
          path:'d',
          component: construction4,
          redirect: 'd/list',
          children: [
            {
              path:'list',
              component: List,
              meta: {
                type: 13,
                url:'/construction/d/detail/e/'
              }
            },
            {
              path:'detail',
              component: Detailcontent,
              redirect: 'detail/e',
              children: [
                {
                  path:'e/:id',
                  component: DetailInfo,
                  meta: {
                    text: '最新党建工作',
                    url:'/construction/d/detail/e/',
                    nav:'首页>公司党建>党建工作>详情',
                    type:13
                  }
                }
              ]
            },
          ]
        },
      ]
    },
    {
      path: '/performance',
      component: Performance
    },
  ]
})


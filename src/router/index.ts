// 创建一个路由器
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

// 定义路由
const router = createRouter({
  history: createWebHashHistory(), // 路由器的工作模式
  routes: [
    {
      path: '/', // 路径(必须斜杠)
      name: 'home', //路径别名
      component: () => import('../pages/Home.vue') //组件
    },
    {
      path: '/About', // 路径(必须斜杠)
      name: 'guanyu', //路径别名
      component: () => import('../pages/About.vue') //组件
    },
    {
      path: '/News', // 路径(必须斜杠)
      name: 'xinwen', //路径别名
      component: () => import('../pages/News.vue'), //组件
      children: [
        {
          path: 'NewsDetail', // query请求路径(子集不许斜杠)
          name: 'xinwenxiangqing', //路径别名
          component: () => import('../pages/NewsDetail.vue') //组件
        },
        // {
        //   path: 'NewsDetail/:id/:title', // params请求路径(子集不许斜杠)
        //   name: 'xinwenxiangqing', //路径别名
        //   component: () => import('../pages/NewsDetail.vue') //组件
        // }
      ]
    }
  ]
})

// 暴露路由
export default router

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/staticChart1',
    name: 'staticChart1',
    component: () => import('@/views/echarts-lib/staticChart1.vue')
  },
  {
    path: '/dynamicChart1',
    name: 'dynamicChart1',
    component: () => import('@/views/echarts-lib/dynamicChart1.vue')
  }
]

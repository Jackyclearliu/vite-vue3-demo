import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { store } from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import qs from 'qs'
import * as echarts from 'echarts'
import videojs from 'video.js'
import instance from './api'
import Vue3SeamlessScroll from 'vue3-seamless-scroll'
import * as maptalks from 'maptalks'
import 'maptalks/dist/maptalks.css'
import '@/assets/common/index.css'

const app = createApp(App)
app.config.globalProperties.dayjs = dayjs
app.config.globalProperties.$Cookies = Cookies
app.config.globalProperties.$qs = qs
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$video = videojs
app.config.globalProperties.$http = instance
app.config.globalProperties.maptalks = maptalks

app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(Vue3SeamlessScroll)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { store } from './store'

import './style/tailwind.css'

import VueApexCharts from 'vue3-apexcharts'

createApp(App).use(router).use(store).use(VueApexCharts).mount('#app')

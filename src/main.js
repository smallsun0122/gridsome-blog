// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
  Vue.use(ElementUI)
}

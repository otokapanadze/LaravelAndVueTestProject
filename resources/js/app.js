require('./bootstrap');

import { createApp } from 'vue'

import router from "./Router/index";
import store from './Store/index'
import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')

import Vue from 'vue'
import VueMaterial from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import dotenv from 'dotenv'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Vuelidate)

dotenv.config()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
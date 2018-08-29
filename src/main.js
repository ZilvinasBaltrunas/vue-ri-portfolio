import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import '@/assets/scss/style.scss'
// Font-awesome //
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faEnvelope)
library.add(faFacebook, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  template: '<App/>',
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')

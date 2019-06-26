import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilters from '@/filters/currency.filters'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency',currencyFilters)
Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

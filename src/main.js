import Vue from 'vue'
import App from './App.vue'

import VCalendar from 'v-calendar';

// import Calendar from 'v-calendar/lib/components/calendar.umd'
// import DatePicker from 'v-calendar/lib/components/date-picker.umd'

// // Register components in your 'main.js'
// Vue.component('calendar', Calendar)
// Vue.component('date-picker', DatePicker)

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});


Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')

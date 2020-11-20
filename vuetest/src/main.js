import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log(3333)
console.log("于亚东")

console.log("蒋腾蛟2")

console.log("吴振")

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyDmuQS1750tg43GOmfYSyb9J2IutVizZxY",
      authDomain: "vue10-336.firebaseapp.com",
      projectId: "vue10-336",
      storageBucket: "vue10-336.appspot.com",
      messagingSenderId: "794758518935",
      appId: "1:794758518935:web:978e79654a16429585f1d2"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

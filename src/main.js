import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBaKnMM7eHUpbDAML1XWzbhoLFQq-gBhsA",
  authDomain: "vue-firebase-7ca3d.firebaseapp.com",
  databaseURL: "https://vue-firebase-7ca3d.firebaseio.com",
  projectId: "vue-firebase-7ca3d",
  storageBucket: "vue-firebase-7ca3d.appspot.com",
  messagingSenderId: "57039567931",
  appId: "1:57039567931:web:816e07c5f70a49ac"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/dist/jquery.js'
import 'jquery/dist/jquery.min.js'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
// apiKey: "AIzaSyBkT783JDhG5yBhGHV96EqAwIEd4Z12sfE",
//   authDomain: "vueapp-3a597.firebaseapp.com",
//   projectId: "vueapp-3a597",
//   storageBucket: "vueapp-3a597.appspot.com",
//   messagingSenderId: "314650275451",
//   appId: "1:314650275451:web:579ae1ee6f1fed78587cde"
//   };
//   const firbaseApp = initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')

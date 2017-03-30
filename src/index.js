import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import SecretQuote from './components/SecretQuote.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import auth from './auth';

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

auth.checkAuth();


export var router = new VueRouter();
// Instantiate a Lock
export var lock = new Auth0Lock(YOUR_CLIENT_ID, YOUR_CLIENT_DOMAIN);

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  'secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')

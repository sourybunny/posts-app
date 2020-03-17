import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
Vue.use(VueRouter)

import Home from '../src/views/Home.vue';
import Auth from '../src/views/Auth.vue';
import UploadPost from '../src/views/UploadPost.vue';

const routes = [
    {
        path: '/', component: Home, meta: {requiresAuth: false}
    },
    {
        path: '/auth', component: Auth, meta: {requiresAuth: false}
    },
    {
        path: '/upload', component: UploadPost, meta: {requiresAuth: true}
    }
]
const router =  new VueRouter({
    mode: 'history',
    routes,
    base: process.env.BASE_URL
})


// before starting to change page
router.beforeEach((to,from,next)=>{
    let isAuthenticated = store.getters.isLoggedIn;
    // are any child routes/routes protected 
    let isProtected = to.matched.some(record => record.meta.requiresAuth);
     if(isProtected && !isAuthenticated){
        next({path: '/auth'})
     }else {
         next()
     }
});

export default router;
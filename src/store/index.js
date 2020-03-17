import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import posts from './modules/posts';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        posts
    },
    plugins: [
        createPersistedState({
            key: "posts-app"
        })
    ],
})
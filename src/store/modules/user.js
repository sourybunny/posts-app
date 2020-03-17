import Axios from "axios";
import router from '../../router';
const FbURL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const FBAPI_KEY = 'AIzaSyBFuKY9Hu4oJuL7PM75y-ZyBFhDbUQZUmM';
const state = {
    user: {},
    authError: '',
    idToken: '',
    refreshToken: '',
    email: ''
}

const getters = {
    isLoggedIn: (state)=>{
        return state.refreshToken;
    },
    authError: (state)=>{
        return state.authError?true:false;
    },
    currentUser: (state)=>{
        return state.email
    }
}
 
const actions = {
    authenticate: async ({commit}, authData)=>{
        try{
        await Axios.post(`${FbURL}${authData.type}?key=${FBAPI_KEY}`, 
        {...authData.formdata,returnSecureToken: true}).then((res)=>{
            commit('authenticate', res.data);
            router.push('/')
        })
        }
        catch(error){
            commit('authError', error);
        }
    },
    refreshToken: async({commit}, storedToken)=>{
        try{
            await Axios.post(`https://securetoken.googleapis.com/v1/token?key=${FBAPI_KEY}`
            ,{grant_type: 'refresh_token',refresh_token: storedToken})
            .then(res=>{
                commit('authenticate',{
                    refreshToken: res.data.refresh_token,
                    idToken: res.data.id_token
                });
            })
        }
        catch(err){
            console.log(err);
        }
    }
    
}

const mutations = {
    authenticate: (state, authData)=>{
        state.idToken = authData.idToken;
        state.refreshToken = authData.refreshToken;
    },
    authError: (state)=>{
        state.authError = true;
    },
    resetAuth: (state,payload)=>{
        state.authError = payload;
    },
    logout: (state)=>{
        state.refreshToken = null;
        state.idToken = null;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,

}
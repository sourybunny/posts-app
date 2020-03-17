<template>
  <v-card flat> 
    <v-toolbar
      color="deep-purple accent-4" dark
      flat
      prominent
    >

      <template v-slot:extension>
        <v-tabs fixed-tabs
          v-model="tabs"
          centered
        >
          <v-tab> Login
          </v-tab>
          <v-tab> Sign Up
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
        <v-container >
            <v-row class="" justify="center">
            <v-col cols="12" class="" sm="6" md="4" xs="12">
                <v-card flat>
                    <v-text-field type="email" @focus="resetAuth"
                        label="Email"
                        placeholder="email"
                        solo
                        v-model="formdata.email"
                    ></v-text-field>
                    <v-text-field type="password"
                        label="Password"
                        placeholder="password"
                        solo
                        v-model="formdata.password"
                    ></v-text-field>
                </v-card>
                <p v-if="authError" class="text-center red--text">Please check email and password</p>
            </v-col>
        </v-row>
        </v-container>
        <v-tab-item>
            <v-container class="mt-0">
                <v-row justify="center">
                    <v-col cols="12" sm="6" md="4" xs="12">
                        <v-card flat>
                            <v-btn @click="onSubmit('signInWithPassword')" block large class="white--text" color="deep-purple accent-4">Login</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-tab-item>
        <v-tab-item>
            <v-container class="mt-0">
                <v-row justify="center">
                    <v-col cols="12" sm="6" md="4" xs="12">
                        <v-card flat>
                            <v-btn @click="onSubmit('signUp')" block large class="white--text" color="deep-purple accent-4">Sign Up</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-tab-item>
      
    </v-tabs-items>
  </v-card>
</template>

<script>
import {Events} from '../events.js';
import {mapGetters} from 'vuex';
  export default {
    data () {
      return {
        tabs: 1,
        formdata: {
            email: '',
            password: ''
        }
         }
    },
    created(){
        Events.$on('authTab',(val)=>{
            this.tabs = val;
        })
    },
    computed: {
        ...mapGetters(['authError', 'isLoggedIn']),
    },
    methods: {
        onSubmit(type){
            this.$store.dispatch('authenticate',{formdata:this.formdata,type:type});
            // console.log(this.formdata,type)
        },
        resetAuth(){
            this.$store.commit('resetAuth', false);
        }
    },
    destroyed(){
        this.resetAuth();
    }
  }
</script>

<style>

</style>
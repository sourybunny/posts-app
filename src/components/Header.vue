<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4 elevation-10"
      
      dark
    >
      <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>

      <v-toolbar-title >Post It</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" outlined class="mx-2" to="/auth" @click="changeTab(0)">Login</v-btn>
      <v-btn v-if="!isLoggedIn" outlined class="mx-2" to="/auth" @click="changeTab(1)">SignUp</v-btn>
      
      <div>{{currentUser}}</div>
      <v-btn icon to="/upload">
        <v-icon>mdi-upload</v-icon>
      </v-btn>
        
      <v-menu v-if="isLoggedIn"
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </template>

        <v-list>
          <v-list-item v-if="isLoggedIn" to="/dashboard">
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isLoggedIn" @click="logout">
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import {Events} from '../events.js';
import {mapGetters , mapMutations} from 'vuex'
export default {
    created() {

    },
    methods: {
        ...mapMutations(['logout']),
        changeTab(val){
            Events.$emit('authTab',val);
        }
    },
    computed: {
        ...mapGetters(['authError', 'isLoggedIn','currentUser']),
    },
}
</script>
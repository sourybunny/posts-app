<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  created(){
    let storedToken = this.$store.state.refreshToken;
    if(storedToken){
      this.$store.dispatch('refreshToken', storedToken);
    }
  }
  
};
</script>

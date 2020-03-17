<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view >
        <Home/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>

import Header from './components/Header';
import Home from './views/Home';

export default {
  name: 'App',
  components: {
    Header,
    Home
  },
  created(){
    let storedToken = this.$store.state.refreshToken;
    if(storedToken){
      this.$store.dispatch('refreshToken', storedToken);
    }
  },
  data: () => ({
    //
  }),
};
</script>

<template>
<div>
  <Carousel/>
  <v-container v-if="loaded && !errored">
      <v-row align-center justify-center>
      <v-col cols="12" xs="12"
        sm="4" md="3" v-for="post in posts" :key="post.id">
          <PostVertical :post="post"/>
      </v-col>
  </v-row>
  </v-container>
</div>
</template>

<script>
import api from '../api'
import Carousel from '../components/Carousel';
import PostVertical from '../components/PostVertical';
export default {
    components: {
        Carousel,
        PostVertical
    },
    data(){
        return {
            posts: [],
            loaded: false,
            errored: false
        }
    },
    created(){
        this.getAllPosts();
    },
    methods: {
    getAllPosts(){
        this.loaded =false;
        this.errored = false;
        api.getAllPosts().then(res=>{
          let data = res.data;
          for(let key in data){
            this.posts.push({
              ...data[key],
              id: key
            })
          }
          this.loaded =true;
          this.errored = false;
          console.log(this.posts)
      })
      .catch(()=>{
        this.errored = true;
      })
    }
    }
}
</script>

<style>

</style>
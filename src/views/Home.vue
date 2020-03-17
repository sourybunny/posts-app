<template>
<div>
  <Carousel/>
  <v-container>
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
import Carousel from '../components/Carousel';
import PostVertical from '../components/PostVertical';
import posts from '../posts';
export default {
    components: {
        Carousel,
        PostVertical
    },
    data(){
        return {
            posts: posts
        }
    }
}
</script>

<style>

</style>
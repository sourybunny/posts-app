<template>
  <v-container>
      <v-row justify="center">
      <v-col cols="12" sm="8" md="7">
        <PostHorizontal v-for="post in posts" :key="post.title" :post="post"/>
      </v-col>
  </v-row>
  </v-container>
</template>

<script>
import posts from '../posts';
import PostHorizontal from '../components/PostHorizontal';
export default {
    data(){
        return {
            posts: posts
        }
    },
    components: {
        PostHorizontal
    }
}
</script>

<style>

</style>
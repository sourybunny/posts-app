<template>
  <v-card 
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{post.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="source"
      height="194"
    ></v-img>
    <v-card-actions>
      <v-btn :to='`/post/${post.id}`'
        text
        color="deep-purple accent-4"
      >
        Read
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['post'],
  components: {
  },
  computed:{
    source(){
      return this.intersected?this.post.image:'https://res.cloudinary.com/keyport/image/upload/q_auto,f_auto,w_150/v1553341001/KeyportTV/default_channel_icon.png'
    }
  },
  data(){
    return {
      intersected: false,
      observer: {}
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
      }
    },{threshold: 0.5});

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
  methods: {
    
  }
}
</script>

<style>

</style>
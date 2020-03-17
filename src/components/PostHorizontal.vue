<template>
  <v-card class="my-4">
            <div class="d-flex flex-no-wrap ">
                <v-avatar
                class="ma-3"
                size="155"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"></v-img>
              </v-avatar>
              <div>
                <v-card-title
                  class="headline"
                  v-text="post.title"
                ></v-card-title>

                <v-card-subtitle v-text="post.description"></v-card-subtitle>
                
                <v-card-actions>
                    <v-btn outlined small class="ml-3" color="deep-purple accent-4">Read</v-btn>
                </v-card-actions>
              </div>

              
            </div>
          </v-card>
</template>

<script>

export default {
    props: ['post']
}
</script>

<style>

</style>
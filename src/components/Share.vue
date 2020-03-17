<template>
  <div>
      <v-dialog v-model="openModal">

          <v-card class="text-center">
              <h2 class="text-center">Share</h2>
              <v-btn icon class="text-right" @click="openModal=false;">
                  <i class="fa fa-times"></i>
              </v-btn>
              <v-btn fab :href="'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(link)" target="_blank">
                  <i class="fab fa-facebook fa-3x"></i>
              </v-btn>
              <v-btn fab :href="'whatsapp://send?text='+encodeURIComponent(link)" 
                data-action="share/whatsapp/share" target="_blank">
                  <i class="fab fa-whatsapp fa-3x"></i>
              </v-btn>
          </v-card>
      </v-dialog>
  </div>
</template>

<script>
import {Events} from '../events';
export default {
    props: ['modal'],
    data(){
        return {
            openModal: false,
            id: ''
        }
    },
    computed: {
        link(){
            return process.env.BASE_URL+'post/' +this.id;
        }
    },
    created(){
        
    }
}
</script>

<style>

</style>
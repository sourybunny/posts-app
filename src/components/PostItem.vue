<template>
  <div>
      <v-container v-if="loaded">
          <v-row justify="center">
              <v-col cols="12" sm="8" xs="12">
                 
                <v-card flat>

                    <v-container>
                         <h2 class="text-center">{{post.title}}</h2>
                        <v-img max-height="400" contain aspect-ratio="1.77" :src="post.image"/>
                        <v-card-text>
                            <p  v-html="post.description"></p>
                        </v-card-text>
                    </v-container>
                </v-card>
          
                  
                  
                  
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import api from '../api'
export default {
    data(){
        return {
            post: {},
            loaded: false,
            errored: false
        }
    },
    props: ['id'],
    created(){
        api.getAllPosts().then((res)=>{
            let data = res.data;
            var posts = [];
            for(let key in data){
                
                posts.push({
              ...data[key],
              id: key
            }) 
            this.post = posts.filter(post=> post.id==this.id)[0]
            }
            this.loaded = true;

        })
    }
}
</script>

<style>

</style>
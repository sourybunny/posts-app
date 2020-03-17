<template>
  <div>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6" sm="8" >

         <h2 class="text-center">Add Post</h2>   
     <v-card flat>
        <input @change="onImageChanged" type="file" ref="imageupload" style="display:none"  >
      <v-row>
          <v-col>
              <v-btn outlined class="white--text"
               color="deep-purple accent-4" v-if="!post.image.previewImage" 
               @click="$refs.imageupload.click()">Upload image</v-btn>
          
      <v-img v-if="post.image.previewImage"
        max-width="450" 
        aspect-ratio="1.77"
        class="mx-auto"
        @click="$refs.imageupload.click()"
        :src="post.image.previewImage"
        />
        </v-col>
      </v-row>
      <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field outlined 
        v-model="post.title"
        :counter="100"
        :rules="titleRules"
        label="Title"
        required
      ></v-text-field>
        <wysiwyg v-model="post.description" />
        <v-btn class="white--text" large block :disabled="!valid || !post.image.previewImage"
               color="deep-purple accent-4"  
               @click="addPost">Add Post</v-btn>
        </v-form>
    
            </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '../api';
export default {
    data(){
        return {
            valid: '',
            titleRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 100) || 'Title must be less than 100 characters',
            ],
            post: {
            title: '',
            description: '',
            image: {
                selectedImage: '',
                previewImage: ''
            }
            }
        }
    },
    methods: {
      onImageChanged(event){
      var fileName = event.target.files[0].name
      var idxDot = fileName.lastIndexOf(".") + 1;
      var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
      if (event.target.files[0].size <= 2097152) {
        if(extFile=="jpg" || extFile=="png"){
          this.post.image.selectedImage = event.target.files[0];
          this.post.image.previewImage = URL.createObjectURL(
          this.post.image.selectedImage
        );
        }
      }
      },
      addPost(){
          let file = this.post.image.selectedImage;
            const preset = 'z23wcir7';
            let fd = new FormData();
            fd.append('file', file)
            fd.append('upload_preset',preset)
            api.uploadToCloudinary(fd)
            .then((res)=>{
                let post = {
                    title: this.post.title,
                    description: this.post.description,
                    image: res.data.secure_url
                }
                return api.addPost(post).then(res=>{
                    if(res.data.name){
                        this.$emit('uploaded');
                        
                    }
                    
                })
                
            })
      }
    }
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

</style>
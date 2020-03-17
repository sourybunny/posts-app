import Axios from 'axios';
import store from './store';
const PostsAxios = Axios.create({
    baseURL: "https://posts-app-a1fa9.firebaseio.com/"
});
// const cloudinaryAPIKEY = '387844477165564';
const CloudinaryAxios = Axios.create({
    baseURL: "https://api.cloudinary.com/v1_1/dih6wg6qq"
});

const uploadToCloudinary = (async(imageData)=>{
    try{
        return await CloudinaryAxios.post('/image/upload', imageData)
    }
    catch {(err)=>{
            console.log(err);
        }   
    }
    
    
})

const addPost =  (async(post)=>{
    try { 
        return await PostsAxios.post(`posts.json?auth=${store.state.user.idToken}`,post)
    }
    catch{(err=>{
       console.log(err)
   })} 
})

export default {
    addPost,
    uploadToCloudinary
}

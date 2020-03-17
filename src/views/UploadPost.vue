<template>
  <div>
      <Upload v-if="!uploaded" @uploaded="onUploadComplete"/>
      <div v-else>
        upload successful
      </div>
  </div>
</template>

<script>
import Upload from '../components/Upload';
export default {
  components: {
    Upload
  },
  data(){
    return {
      uploaded: false
    }
  },
  methods: {
    onUploadComplete(){
      this.uploaded = true;
      console.log('uploaded')
    }
  }
}
</script>

<style>

</style>
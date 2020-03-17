<template>
  <div>
      <PostItem :id="$route.params.id" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
export default {
    components: {
        PostItem
    }
}
</script>

<style>

</style>
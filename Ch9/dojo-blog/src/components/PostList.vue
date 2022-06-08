<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
      
        <SinglePost :post="post"/>

      </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
    props: ["posts"],
    setup(props) {
        console.log(props);
    },
    components: { SinglePost }
}
</script>

<style>

</style>
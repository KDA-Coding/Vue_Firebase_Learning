<template>
  <div class="home">
    <h1> Home </h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
   
    <div v-else> 
    
      <LoadingSpinner />

    </div>


  </div>

</template>

<script>

  import PostList from '../components/PostList.vue'
  import getPosts from '../composables/getPosts'
  import LoadingSpinner from '../components/LoadingSpinner.vue'


export default {
    
    name: "HomeView",
    
    components: { PostList, LoadingSpinner },

    setup() {

      const { posts, error, load } = getPosts()

        load()

        return { posts, error };
    },
}
</script>

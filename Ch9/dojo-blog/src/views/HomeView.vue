<template>
  <div class="home">
    <h1> Home </h1>

    <PostList :posts="posts"/>

  </div>

</template>

<script>

  import { ref } from 'vue'
  import PostList from '../components/PostList.vue'

export default {
    
    name: "HomeView",
    
    setup() {
        const posts = ref([
            { title: "Welcome to the Blog", body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam hic ratione aut minus neque eligendi, ipsum odit quo non corporis, repellat sunt aliquam? Molestias, placeat ipsam. Soluta enim pariatur reprehenderit.', id: 1 },
            { title: "Top 5 CSS Tips", body: "Lorem Ipsum", id: 2 }
        ]);
        return { posts };
    },

    components: { PostList }
}
</script>

<template>
  <h1> Home </h1>

  <input type="text" v-model="search">
  <p> Search Term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>

</template>

<script>

  import { ref, reactive, computed } from 'vue'

export default {

  name: 'HomeView',
  
  setup() {

    const search = ref('')
    const names = ref(['mario','luigi','yoshi','bowser','toad','koopa','peach'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value) )
    })

    return { names, search, matchingNames }

  },
}
</script>

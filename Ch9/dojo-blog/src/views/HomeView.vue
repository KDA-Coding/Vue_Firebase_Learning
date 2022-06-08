<template>
  <h1> Home </h1>

  <input type="text" v-model="search">
  <p> Search Term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
    {{ name }}
  </div>

  <button @click="handleClick">Stop Watching</button>

</template>

<script>

  import { ref, watch, computed, watchEffect } from 'vue'

export default {

  name: 'HomeView',
  
  setup() {

    const search = ref('')
    const names = ref(['mario','luigi','yoshi','bowser','toad','koopa','peach'])

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran ' + search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value) )
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick}

  },
}
</script>

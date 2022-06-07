<template>
  <h1> Home </h1>
  <h2> Refs </h2>
  <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
  <button @click="updateNinjaOne">Update Ninja One</button>
  
  <h2> Reactive </h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo}}</p>
  <button @click="updateNinjaTwo">Update Ninja Two</button>
</template>

<script>

  import { ref, reactive } from 'vue'

export default {

  name: 'HomeView',
  
  setup() {

    //const p = ref(null);

    const ninjaOne = ref({ name: 'Mario', age: 30})
    const ninjaTwo = reactive({ name: 'Luigi', age: 25});

    const nameOne = ref('mario')
    const nameTwo = reactive('luigi')


    const updateNinjaOne = () => {
      ninjaOne.value.age = 35
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 30
      nameTwo = reactive('mario')
    }

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo, nameTwo }

  },
}
</script>

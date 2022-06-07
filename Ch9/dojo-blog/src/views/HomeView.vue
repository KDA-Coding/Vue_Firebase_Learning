<template>
  <p>My name is {{ name }} and I am {{ age }}</p>
  <button @click="handleClick">Click Me</button>
  <button @click="age++" >Add 1 to Age</button>
  <input type="text" v-model="name">
</template>

<script>

  import { ref } from 'vue'

export default {

  name: 'HomeView',
  
  setup() {

    //const p = ref(null);

    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 25
    }

    return { name, age, handleClick }

  },
}
</script>

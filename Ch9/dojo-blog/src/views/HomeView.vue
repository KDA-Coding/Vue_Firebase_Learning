<template>
  <p ref="p" >My name is {{ name }} and I am {{ age }}</p>
  <button @click="handleClick">Click Me</button>
</template>

<script>

  import { ref } from 'vue'

export default {

  name: 'HomeView',
  
  setup() {

    console.log(this)

    const p = ref(null);

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
    }

    return { name, age, handleClick, p }

  },
}
</script>

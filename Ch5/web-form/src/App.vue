<template>
  <signup-form-vue/>
</template>

<script>

import SignupFormVue from './components/SignupForm.vue'

export default {
  name: 'App',
  components: { 
    SignupFormVue,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}

</style>

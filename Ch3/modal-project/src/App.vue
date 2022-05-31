<template>
  <h1>{{ title }}</h1>
  <p> Welcome... </p>
    <div v-if="showModal">
      <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
    </div>
  <button @click="toggleModal">Show Modal</button>
</template>

<script>

import Modal from './components/ModalComponent.vue'

export default {
  name: 'App',

  components: {
    Modal,
  },

  data() {
    return {
      title: 'My first Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your Ninja Swag at Half Price!',
      showModal: false,
    }
  },

  methods: {
    
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },

    toggleModal() {
      this.showModal = !this.showModal;
    }
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

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

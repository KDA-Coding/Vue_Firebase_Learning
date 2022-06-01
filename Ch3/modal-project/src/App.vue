<template>
  <h1>{{ title }}</h1>
  <p> Welcome... </p>
    <div v-if="showModal">
      <Modal theme="" @close="toggleModal">

        <template v-slot:links>
          <a href="#">Sign Up Now!</a>
          <a href="#">More Info</a>
        </template>

        <h1>Ninja Giveaway!</h1>
        <p>Grab your Ninja Swag for Half Price!</p>
      </Modal>
    </div>

    <div v-if="showModalTwo">
      <Modal theme="" @close="toggleModalTwo">

        <template v-slot:links>
          <a href="#">Yes</a>
          <a href="#">Maybe</a>
          <a href="#">No</a>
        </template>

        <h1>Is this a Certified Bruh Moment?</h1>
        <p>Choose wisely</p>
      </Modal>
    </div>

  <button @click="toggleModal">Show First Modal</button>
  <button @click="toggleModalTwo">Show Second Modal</button>
</template>

<script>

// Challenge
//  - Create an Extra Button to open a different modal
//  - Use the same modal component but pass in a different template (slot)
//  - Use a different toggle (toggleModalTwo) and data (showModalTwo)

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
      showModalTwo: false
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
    },

    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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

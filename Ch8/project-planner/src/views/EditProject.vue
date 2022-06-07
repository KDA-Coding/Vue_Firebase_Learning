<template>
  <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required ></textarea>
        <button>Update Project</button>
    </form>
</template>

<script>
// Challenge:
// - Add sumbitHandler to this form
// - Make a fetch (PATCH) request to the uri to update the project
// - Redirect to Home Page when done

export default {

  props: ['id'],

  data() {
    return {
      title: '',
      details:'',
      uri:'http://localhost:3000/projects/' + this.id
    }
  },

  mounted () {
    fetch(this.uri)
      .then( res => res.json())
      .then(data => {
        this.title = data.title
        this.details = data.details
      })},

  methods: {

    handleSubmit() {
      let project = {
          title: this.title,
          details: this.details
      }
      
      fetch(this.uri,
      {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project)
      })
          .then( () => {
              this.$router.push('/')
          })
          .catch((err) => console.log(err)) 

        }
  }

}
</script>

<style>

</style>
<template>
  <div class="container"> 
    <NavBarVue />
  </div>
</template>

<script>
// Get the current User using the getUser composable
// Watch the current user for changes
// redirect the user to the Welcome page when they are logged out


import NavBarVue from '@/components/NavBar.vue'
import getUser from '@/composables/getUser'
import { ref } from 'vue'

export default {

  components: { NavBarVue },

  setup() {
    const { user } = ref(getUser())

    watch(user, )

    return { user }
  }

}
</script>

<style>

</style>
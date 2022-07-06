<template>
  <div class="container"> 
    <NavBarVue />
    <NewChatFormVue />
  </div>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import NewChatFormVue from '@/components/NewChatForm.vue'
import getUser from '@/composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {

  components: { NavBarVue, NewChatFormVue },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
        console.log(router)
        console.log(user)
          router.push("/")
        console.log(router)
        console.log(user)
      }
    })
  }
}
</script>

<style>

</style>
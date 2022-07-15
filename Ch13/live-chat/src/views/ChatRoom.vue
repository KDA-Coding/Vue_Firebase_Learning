<template>
  <div class="container"> 
    <NavBarVue />
    <ChatWindowVue />
    <NewChatFormVue />
  </div>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import NewChatFormVue from '@/components/NewChatForm.vue'
import ChatWindowVue from '@/components/ChatWindow.vue'
import getUser from '@/composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {

  components: { NavBarVue, NewChatFormVue, ChatWindowVue },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if(!user.value) {
          router.push("/")
      }
    })
  }
}
</script>

<style>

</style>
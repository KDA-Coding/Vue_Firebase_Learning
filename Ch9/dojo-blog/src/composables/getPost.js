import { ref } from 'vue'

const getPost = (id) => {

    const post = ref(null)
        const error = ref(null)

        const load = async () => {
          
          // Simulate Delay
          await new Promise(resolve => {
            setTimeout(resolve, 2000)
          })

          try {

              let data = await fetch('http://localhost:3000/posts/' + id)
              
              if(!data.ok) {
                throw Error("Error: Post does not exist")
              }

              post.value = await data.json()

          }
          catch(err) {
            error.value = err.message
            console.log(error.value) 
          }
        }
    
    return { post, error, load }

}

export default getPost
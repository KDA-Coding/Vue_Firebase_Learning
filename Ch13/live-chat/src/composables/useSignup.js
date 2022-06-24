import { projectAuth } from "@/components/firebase/config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName) => {

    error.value = null

    try {

        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if(!res) {
            throw new Error('Could not complete signup')
        }

    } catch(err) {

    }

}

const useSignup = () => {


    return { error, signup }

}

export default useSignup
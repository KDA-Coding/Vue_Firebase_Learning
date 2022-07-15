import { ref } from "vue";
import { projectFirestore } from "@/components/firebase/config";
import { watchEffect } from "vue";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)
    
    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap) => {
        
        let results = []

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = results
        error.value = null

     }, (err) => {

        console.log(err.message)

        documents.value = null
        error.value = "Could not fetch data."

     })

     watchEffect((onInvalidate) => {
        // Unsubscribe from the previous collection when watcher is stopped (component is unmounted)
        onInvalidate(() => unsub())
     })

     return { documents, error }

}

export default getCollection
<template>
    <div class="project">
        <div class="actions" @click="toggleDetails">
            <h3>{{ project.title }}</h3>
        </div>
        <div class="details" v-if="showDetails">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    
    props: [
        'project'
    ],

    data() {
        return {
            showDetails: true
        }
    },

    methods: {
        
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
    
    
}
</script>

<style>
    .project {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
        border-left: 4px solid #e90074;
    }
    h3 {
        cursor: pointer;
    }


</style>
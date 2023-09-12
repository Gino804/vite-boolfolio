<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
const baseUri = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'ProjectDetail',

    components: { ProjectCard },

    data: () => ({
        project: null
    }),

    methods: {
        getProject() {
            const endpoint = baseUri + this.$route.params.id;
            axios.get(endpoint).then(res => { this.project = res.data });
        }
    },

    created() {
        this.getProject();
    }
}
</script>

<template>
    <ProjectCard :project="project" :isDetail="true" />
</template>
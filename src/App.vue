<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
const endpoint = 'http://127.0.0.1:8000/api/projects';

export default {
  components: { ProjectCard },

  data: () => ({ projects: [] }),

  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <div class="container">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style></style>

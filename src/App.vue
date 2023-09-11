<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects';

export default {
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
  <ul>
    <li v-for="project in projects">{{ project.title }}</li>
  </ul>
</template>

<style></style>

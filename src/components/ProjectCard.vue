<script>
export default {
    name: 'ProjectCard',

    props: { project: Object, isDetail: Boolean },
}
</script>

<template>
    <div class="card my-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <span>Project {{ project.id }}</span>
            <RouterLink v-if="!isDetail" class="btn btn-success"
                :to="{ name: 'project-detail', params: { id: project.id } }">See
            </RouterLink>
            <RouterLink v-else class="btn btn-secondary" to="/">Back to list</RouterLink>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>
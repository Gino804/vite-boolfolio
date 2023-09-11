<script>
export default {
    name: 'ProjectCard',

    props: { project: Object },
}
</script>

<template>
    <div class="card my-4">
        <div class="card-header">
            Project {{ project.id }}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>
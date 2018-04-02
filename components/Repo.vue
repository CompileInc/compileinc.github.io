<template>
  <div class="card">
    <div class="card-body">
      <h6 class="card-title">
        <i class="fas fa-code-branch text-muted" v-if="repo.fork" title="Fork"></i>
        <i class="fas fa-book text-muted" title="Compile" v-else></i>
        {{ repo.full_name }}
      </h6>
      <p class="card-text">{{ repo.description }}</p>
      <h6 class="small">Last updated: {{ updated_at }}</h6>
    </div>
    <div class="card-footer">
      <a class="btn btn-block btn-link" :href=repo.html_url>
        <i class="fab fa-github"></i> View Source
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-top: 5px;
  overflow: hidden;
  .card-footer {
    padding: 0;
    .btn {
      border-radius: 0;
    }
  }
}
</style>

<script>
export default {
  props: ['repo'],
  computed: {
    updated_at () {
      let date = new Date(this.repo.updated_at)
      return date.toLocaleDateString()
    }
  }
}
</script>

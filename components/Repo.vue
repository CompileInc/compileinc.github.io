<template>
  <div class="card mb-5" v-if="repoDetails">
    <div class="card-body">
      <h6 class="card-title">
        <i class="fas fa-code-branch text-muted" v-if="repoDetails.fork" title="Fork"></i>
        <i class="fas fa-book text-muted" title="Compile" v-else></i>
        {{ repoDetails.full_name }}
      </h6>
      <p class="card-text">
        {{ repoDetails.description }}
      </p>
      <h6 class="small">Last updated: {{ updated_at }}</h6>
    </div>
    <div class="card-footer">
      <a class="btn btn-block btn-link" :href=repoDetails.html_url>
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
import config from '~/nuxt.config'

export default {
  props: ['repo'],
  data() {
    return {
      repoDetails: null
    }
  },
  computed: {
    updated_at () {
      let date = new Date(this.repoDetails.updated_at)
      return date.toLocaleDateString()
    },
  },
  mounted() {
    let self = this
    this.$axios.$get('https://api.github.com/repos/' + config.github_username + '/' + this.$route.params.repo).then(res =>{
      self.repoDetails = res
    })
  }
}
</script>

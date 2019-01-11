<template>
  <div class="container" v-if="repos">
    <div class="card-columns">
      <RepoCard  :repo=repo v-for="repo in repos.items" :key="repo.id" />
      <a class="card bg-primary text-white text-center p-3" :href="repos.items[0].owner.html_url" v-if="repos.total_count>100">
        <blockquote class="blockquote mb-0">
          <p>View more projects on github.com</p>
        </blockquote>
      </a>
    </div>
  </div>
</template>


<script>
import RepoCard from '~/components/RepoCard.vue'
import config from '~/nuxt.config'

export default {
  components: {
    RepoCard
  },
  mounted() {
    let self = this
    this.$axios.$get('https://api.github.com/search/repositories?q=user%3A' + config.github_username + '+fork%3Atrue&sort=updated&order=desc').then((res) => {
      self.repos = res
    })
  },
  data() {
    return { repos: null }
  }
}
</script>

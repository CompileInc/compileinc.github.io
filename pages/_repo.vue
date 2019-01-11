<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <Repo :repo="$route.params.repo" />
        </div>
        <div class="col-md-4">
          <UserInfo />
        </div>
        <div class="col mt-4 pt-4"><h4 class="text-muted">Other repositories</h4></div>
        <RepoListing />
      </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import UserInfo from '~/components/UserInfo.vue'
import RepoListing from '~/components/RepoListing.vue'
import Repo from '~/components/Repo.vue'

export default {
  components: {
    AppLogo,
    UserInfo,
    RepoListing,
    Repo
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  border-radius: 0;
  min-height: 50vh;
  a {
    color: #FFF;
    text-decoration: none;
    border-bottom: 1px dotted #FFF;
  }
  &.bg-primary {
    h1 {
      color: #FFF;
      font-weight: 800
    }
  }
}
</style>

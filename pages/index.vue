<template>
    <div>
      <div class="container">
        <app-logo/>
      </div>
      <div class="jumbotron jumbotron-fluid bg-primary text-white">
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-8">
              <h1 class="display-4">Hello World!</h1>
              <p class="lead">Open source projects from <a href="https://www.compile.com" target="_blank">Compile</a> and the forks of tools we use.</p>
            </div>
            <div class="col-12 col-lg-6 col-xl-4">
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <RepoListing />
      </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import UserInfo from '~/components/UserInfo.vue'
import RepoListing from '~/components/RepoListing.vue'

export default {
  components: {
    AppLogo,
    UserInfo,
    RepoListing
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

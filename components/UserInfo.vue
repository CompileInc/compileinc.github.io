<template>
  <div class="card" v-if="userInfo">
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <img :src="userInfo.avatar_url" />
        </div>
        <div class="col-8">
          <h4 class="name">{{ userInfo.name }}</h4>
          <h6 class="small userinfo-details">
            <div><i class="fab fa-github"></i> <a :href="userInfo.html_url">@{{ userInfo.login }}</a></div>
            <div v-if="userInfo.location"><i class="fas fa-map-marker"></i>{{ userInfo.location }}</div>
            <div v-if="userInfo.email"><i class="far fa-envelope"></i>
              <a :href="'mailto:'+userInfo.email">{{ userInfo.email }}</a>
            </div>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name {
  margin: 0
}
.userinfo-details {
  .fas, .far, .fab {
    width: 20px;
    display: inline-block;
  }
}
</style>

<script>
import config from '~/nuxt.config'

export default {
  mounted() {
    let self = this
    this.$axios.$get('https://api.github.com/users/' + config.github_username).then((res) => {
      self.userInfo = res
    })
  },
  data() {
    return { userInfo: null }
  }
}
</script>

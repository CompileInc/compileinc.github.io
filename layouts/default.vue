<template>
  <div class="">
    <div class="container">
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
img {
  max-width: 100%;
}
</style>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

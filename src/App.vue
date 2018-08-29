<template>
  <div id="app">
    <AppNavigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'

export default {
  name: 'app',
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss">
</style>

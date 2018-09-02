<template>
  <div id="app">
    <AppNavigation/>
    <AppBox/>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import AppBox from './components/AppBox.vue'

export default {
  name: 'app',
  components: {
    AppNavigation,
    AppBox
  }
}
</script>

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
  // @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&amp;subset=latin-ext" rel="stylesheet');

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #EEEFF3;
    font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    color: rgba(black, .87);
    background-image: url('assets/images/plant-bw.jpg');//
    background-repeat: no-repeat;//
    background-size: cover;//
  }
</style>

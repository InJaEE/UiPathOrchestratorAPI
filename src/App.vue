<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 70%;
  margin: 0 auto;
}
</style>

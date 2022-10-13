<template>
  <Nav />

  <Header />

  <router-view></router-view>

  <Footer />
</template>

<script lang="ts" setup>
  import Nav from './components/BaliseSemantique/Nav.vue';
  import Header from './components/BaliseSemantique/Header.vue';
  import Footer from './components/BaliseSemantique/Footer.vue';
</script>

<style scoped>

</style>
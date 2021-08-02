<template>
  <div id="app">
    <Navbar/>
    <TopStrip/>
    <Main/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import TopStrip from './components/Topstrip.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    TopStrip,
    Main
  }
}
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
}
.cursor-pointer{
  cursor: pointer;
}
</style>

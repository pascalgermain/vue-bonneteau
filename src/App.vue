<template>
  <div id="app">
    <img src="./assets/logo.png">
    <bonneteau></bonneteau>
  </div>
</template>

<script>
import Bonneteau from './components/Bonneteau'

export default {
  name: 'app',
  components: {
    Bonneteau
  }
}
</script>

<style>
#app {
  margin-top: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

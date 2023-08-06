<template>
  <div id="app">
    <GithubCorner url="pascalgermain/vue-bonneteau" />

    <img alt="Vue logo" src="./assets/logo.png" />

    <Bonneteau />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Bonneteau from './components/Bonneteau.vue'
import GithubCorner from './components/GithubCorner.vue'

export default defineComponent({
  components: { Bonneteau, GithubCorner },
})
</script>

<style>
#app {
  margin-top: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>

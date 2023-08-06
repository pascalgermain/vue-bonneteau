<template>
  <a :class="{ active, selectable }" href="#" @click.prevent>O</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    active: Boolean,
    selectable: Boolean,
  },
})
</script>

<style scoped>
a {
  display: block;
  width: 120px;
  height: 120px;
  line-height: 123px;
  margin: 20px;
  border-radius: 40px;
  border: 5px solid #35495e;
  background: #42b983;
  color: #42b983;
  transition: color 1s ease-in-out;
  font-size: 50px;
  font-weight: bold;
  text-decoration: none;
  transform: scale(1);
  transition: all 0.25s ease-in-out;
}

a:not(.selectable) {
  cursor: default;
}

a.selectable:hover {
  transform: scale(1.2);
}

a.active {
  color: yellow;
}
</style>

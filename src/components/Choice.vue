<template>
  <a
    :class="{active}"
    href="#"
    v-text="'O'"
    @click.prevent="$emit('input', value)"
  ></a>
</template>

<script>
export default {
  name: 'choice',
  props: {
    value: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  }
}
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
  transition: all .25s ease-in-out;
}

a:hover {
  transform: scale(1.2);
}

a.active {
  color: yellow;
}
</style>

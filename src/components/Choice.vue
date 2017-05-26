<template>
  <a
    :class="['choice', {selected}]"
    href="#"
    v-text="'O'"
    @click.prevent="$emit('input', count)"
  ></a>
</template>

<script>
export default {
  name: 'choice',
  props: {
    count: {
      type: Number,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.choice {
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

.choice:hover {
  transform: scale(1.2);
}

.choice.selected {
  color: yellow;
}
</style>

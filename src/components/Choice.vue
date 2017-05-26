<template>
  <a
    :class="['choice', {selected}]"
    href="#"
    @click.prevent="$emit('input', count)"
  >
    {{ count + 1 }}
  </a>
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
  line-height: 120px;
  margin: 20px;
  border-radius: 40px;
  background: #42b983;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  transform: scale(1);
}

.choice:hover {
  transform: scale(1.2);
  transition: all .25s ease-in-out;
}

.choice.selected {
  color: yellow;
}
</style>

<template>
  <div class="bonneteau">
    <h1>Bonneteau</h1>
    <ul>
      <li v-for="(choice, index) in choices">
        <choice
          :count="index"
          :selected="index === choiceSelected"
          @input="selectChoice($event)"
        ></choice>
      </li>
    </ul>
    <div
      v-if="status"
      class="status"
      v-text="'You ' + status + '!!!'"
    ></div>
    <h2>
      <a
        v-if="status"
        class="restart"
        href="#"
        v-text="'Restart'"
        @click.prevent="start()"
      ></a>
    </h2>
  </div>
</template>

<script>
import Choice from './choice'

export default {
  name: 'bonneteau',
  components: {
    Choice
  },
  data () {
    return {
      choicesCount: 3,
      choices: [],
      choiceSelected: null,
      status: null
    }
  },
  computed: {
    apiUrl () {
      return `https://www.random.org/integers/?num=1&min=0&max=${this.choicesCount - 1}&col=1&base=10&format=plain&rnd=new`
    }
  },
  created () {
    this.start()
  },
  methods: {
    start () {
      this.choices = []
      this.choiceSelected = null
      this.status = null
      for (let i = 0; i < this.choicesCount; i++) this.choices.push(0)
      this.$http.get(this.apiUrl)
        .then(response => { this.choiceSelected = parseInt(response.data, 0) })
        .catch(e => { console.log('error', e) })
    },
    selectChoice (count) {
      this.status = count === this.choiceSelected ? 'win' : 'lose'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

.status {
  font-size: 40px;
  font-weight: bold;
}

.restart {
  color: #42b983;
  text-decoration: none;
}
</style>

<template>
  <div class="bonneteau">
    <h1>Bonneteau</h1>
    <transition-group
      name="flip-list"
      tag="ul"
    >
      <li
        v-for="choice in choices"
        :key="choice"
      >
        <choice
          :count="choice"
          :selected="select && choice === choiceSelected"
          @input="selectChoice($event)"
        ></choice>
      </li>
    </transition-group>
    <div
      v-if="status"
      class="status"
      v-text="'You ' + status + '!!!'"
    ></div>
    <h2 v-if="status">
      <a
        class="restart"
        href="#"
        v-text="'Restart'"
        @click.prevent="start()"
      ></a>
    </h2>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import Choice from './choice'

export default {
  name: 'bonneteau',
  components: {
    Choice
  },
  data () {
    return {
      shufflesCount: 5,
      choicesCount: 3,
      choices: [],
      choiceSelected: null,
      select: false,
      status: null
    }
  },
  computed: {
    apiUrl () {
      return `https://www.random.org/integers/?num=1&min=0&max=${this.choicesCount - 1}&col=1&base=10&format=plain&rnd=new`
    },
    stringChoices () {
      return JSON.stringify(this.choices)
    }
  },
  mounted () {
    for (let i = 0; i < this.choicesCount; i++) this.choices.push(i)
    this.start()
  },
  methods: {
    start () {
      this.choiceSelected = null
      this.select = false
      this.status = null
      this.$http.get(this.apiUrl)
        .then(response => {
          this.choiceSelected = parseInt(response.data, 0)
          this.select = true
          setTimeout(() => {
            this.select = false
            setTimeout(() => {
              this.shuffleChoices(this.shufflesCount)
            }, 500)
          }, 1250)
        })
        .catch(e => { console.log('error', e) })
    },
    selectChoice (count) {
      if (this.choiceSelected === null) return
      this.select = true
      this.status = count === this.choiceSelected ? 'win' : 'lose'
    },
    shuffleChoices (shufflesCount) {
      let shuffledChoices
      do {
        shuffledChoices = shuffle(this.choices)
      } while (JSON.stringify(shuffledChoices) === this.stringChoices)
      this.choices = shuffledChoices
      if (--shufflesCount) {
        setTimeout(() => {
          this.shuffleChoices(shufflesCount)
        }, 750)
      }
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

.flip-list-move {
  transition: transform .5s;
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

<template>
  <div>
    <h1>Bonneteau</h1>

    <TransitionGroup name="flip-list" tag="ul">
      <li v-for="choice in choices" :key="choice">
        <Choice
          :active="showActive && choice === activeChoice"
          :selectable="selectable"
          @click.native="selectChoice(choice)"
        />
      </li>
    </TransitionGroup>

    <template v-if="status">
      <div class="status">You {{ status }}!!!</div>
      <h2>
        <a class="restart" href="#" @click.prevent="start">Restart</a>
      </h2>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import shuffle from 'lodash.shuffle'

import { getRandomInt, sleep } from '@/utils/common'

import Choice from '@/components/Choice.vue'

export default defineComponent({
  components: { Choice },

  props: {
    choicesCount: { type: Number, default: 3 },
    shufflesCount: { type: Number, default: 5 },
  },

  data() {
    return {
      choices: [] as number[],
      activeChoice: null as number | null,
      showActive: false,
      selectable: false,
      status: null as 'win' | 'lose' | null,
    }
  },

  computed: {
    choicesString(): string {
      return JSON.stringify(this.choices)
    },
  },

  mounted() {
    for (let i = 0; i < this.choicesCount; i++) this.choices.push(i)
    this.start()
  },

  methods: {
    async start() {
      this.status = null
      this.showActive = false
      this.activeChoice = getRandomInt(this.choicesCount)
      this.showActive = true
      await sleep(1250)
      this.showActive = false
      await sleep(500)
      this.shuffleChoices(this.shufflesCount)
    },

    async shuffleChoices(count: number) {
      let shuffledChoices
      do {
        shuffledChoices = shuffle(this.choices)
      } while (JSON.stringify(shuffledChoices) === this.choicesString)
      this.choices = shuffledChoices

      if (--count) {
        await sleep(750)
        this.shuffleChoices(count)
        return
      }

      this.selectable = true
    },

    selectChoice(choice: number) {
      if (!this.selectable) return
      this.showActive = true
      this.status = choice === this.activeChoice ? 'win' : 'lose'
      this.selectable = false
    },
  },
})
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

.flip-list-move {
  transition: transform 0.5s;
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

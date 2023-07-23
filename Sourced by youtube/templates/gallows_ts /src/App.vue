<template>
    <GameHeader/>
      <div class="game-container">
        <GameFigure :wrongLettersCount="wrongLetters.length"/>
        <GameWrongLetter
          :wrongLetters="wrongLetters"/>
        <GameWord :word="word" :correctLetters="correctLetters"/>
      </div>
      <GamePopup ref="popup" :word="word" @restart="restart"/>
      <GameNotification ref="notification"/>
</template>

<script setup lang="ts">
  import {ref, computed, watch} from 'vue'
  import axios from 'axios'
  // import type {Status} from './type/status.ts'

  import GameHeader from './components/GameHeader.vue'
  import GameFigure from './components/GameFigure.vue'
  import GameWrongLetter from './components/GameWrongLetters.vue'
  import GameWord from './components/GameWord.vue'
  import GamePopup from './components/GamePopup.vue'
  import GameNotification from './components/GameNotification.vue'

  const word = ref('')
  const getRandom = async() => {
    try{
      const {data} = await axios<{FirstName: String}>('https://api.randomdatatools.ru/?unescaped-false&params=FirstName')
      word.value =  data.FirstName.toLowerCase()
    }
    catch(err){
      console.log(err)
      word.value=''
    }
    
  }
  getRandom()

  const letters = ref<string[]>([])
  const correctLetters = computed(()  => letters.value.filter(x=> word.value.includes(x)))
  const wrongLetters = computed(()  => letters.value.filter(x=> !word.value.includes(x)))

  const notification = ref<InstanceType<typeof GameNotification> | null>(null)
  const popup = ref<InstanceType<typeof GamePopup> | null>(null)

  const isLose = computed(() => wrongLetters.value.length === 6)
  const isWin = computed(() => [...word.value].every(x => correctLetters.value.includes(x)))

  watch(wrongLetters, () => {
    if(isLose.value) {
      popup.value?.open('lose')
    }
  })
  watch(correctLetters, () => {
    if(isWin.value) {
      popup.value?.open('win')
    }
  })

  const restart = async() => {
    await getRandom()
    letters.value = []
    popup.value?.close()
  }
  window.addEventListener('keydown', ({key}) =>{
    if(isLose.value || isWin.value){
      return
    }
    if(letters.value.includes(key)){
      notification.value?.open()
      setTimeout(() => notification.value?.close(), 1500)
      return
    }
    if(/[а-яА-ЯёЁ]/.test(key)){
      letters.value.push(key.toLowerCase())
    }
  })
</script>



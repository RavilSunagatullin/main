<template>
    <div>
        <div class="word">
            <span 
                class="letter"
                v-for="(letter, index) in word" :key="index">{{ correctLetters.includes(letter)? letter :'' }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        word:String,
        correctLetters:string[]
    }
    defineProps<Props>()
</script>

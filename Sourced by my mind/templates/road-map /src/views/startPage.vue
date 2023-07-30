<template>
  <div class="wrapper">
    <div class="content">
      <uiHeader />
      <greetings />
    </div>
    <div class="footer">
      <uiFooter />
    </div>
  </div>
</template>

<script setup>
import uiHeader from "@/components/molecules/uiHeader.vue";
import greetings from "@/components/molecules/greetings.vue";
import uiFooter from "@/components/molecules/uiFooter.vue";
</script>

<style lang="sass" scoped>
.wrapper
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0 auto
    height: 100vh
.content
    flex: 1 0 auto

.footer
    flex: 0 0 auto
</style>

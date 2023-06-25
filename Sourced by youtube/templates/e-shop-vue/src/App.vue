<template>
  <div class="container">
    <Header/>
    <Hero/>
    <About/>
    <Products/>
    <ideas/>
  </div>
</template>

<script setup>
  
  import Header from './components/layout/header.vue';
  import Hero from './components/hero.vue';
  import About from './components/about.vue'
  import Products from './components/products.vue';
  import ideas from './components/ideas.vue'
  

</script>

<style>
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/enso');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  font-weight: 400;
  /* font-family: 'Enso', sans-serif; */
}

.container{
  max-width: 1440px;
  margin: auto;
}
.container--small{
  max-width: 1280px;
  margin: 0 auto;
}
img{
  max-width: 100%;
}
</style>

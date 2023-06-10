<template>
     
     <div class="container">
        <navbar></navbar>
        <div class="app">
            <router-view></router-view>
        </div>
     </div>
    
</template>

<script>
import navbar from "@/components/navbar.vue"
    export default {
        components:{
            navbar,
        }
    }
</script>

<style>
    *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #1D2228;
    color: #E1E2E2;
}
.app{
    padding: 20px;
    min-height: 100vh;
}
.container{
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: auto;
}
</style>
<template>
     <div 
        class="hero-info"
        :style="{backgroundColor: backgrgound}">
        <div class="hero-info__text">
            <h2 
                class="hero-info__title"
                :style="{color: colorTitle}">
                {{ title }}
            </h2>
            <span 
                class="hero-info-description"
                :style="{color: colorDescription}">
            {{ description }}
            </span>
        </div>
        <a 
            :href="link" 
            class="hero-info__link"
            :style="{
                backgroundColor: colorLink,
                color: colorTextLink }">
            {{ link }}</a>
     </div>
    
</template>

<script setup>
    const props = defineProps({
        title: {
            type:String,
            required: false
        },
        description: {
            type:String,
            required: false
        },
        link:{
            type:String,
            required: false
        },
        colorDescription:{
            type:String,
            default: '#5b5676'
        },
        colorTitle:{
            type:String,
            default: ''
        },
        backgrgound: {
            type:String,
            default: '#fff'
        },
        colorLink:{
            type:String,
            default: '#f9f9f9'
        },
        colorTextLink:{
            type:String,
            default: 'var(--black)'
        }

    })
</script>

<style scoped>
.hero-info{
    background-color: #fff;
    padding: 50px 55px;
    max-width: 630px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.hero-info__link{
    color: var(--black);
    text-decoration: none;
    background-color: #f9f9f9;
    padding: 16px 32px;
    max-width: 172px;
    border: 1px solid transparent;
}
.hero-info__link:hover{
    text-decoration: underline;
    border:1px solid #CAC6DA;
}
.hero-info__title{
    color:var(--black);
    font-size: 32px;
    font-family: var(--clashDisplay);
    font-weight: normal;
    margin-bottom: 20px;
}
.hero-info-description{
    font-size: 18px;
    color: var(--lightGray);
    font-family:var(--satoshi);
}
</style>
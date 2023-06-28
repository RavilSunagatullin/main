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
    <uiButton 
        :color="colorLink || 'secondary'" 
        type="link" 
        :to="path">{{ link }}</uiButton>
    </div>
    
</template>

<script setup>
    import uiButton from '@/components/ui/button.vue';
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
            required: false
        },
        path:{
            type:String,
            required: false
        },
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
    align-items:flex-start;
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
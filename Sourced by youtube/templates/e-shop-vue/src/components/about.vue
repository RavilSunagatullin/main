<template>
    <div class="about">
        <h3 class="about-title">What makes our brand different</h3>
        <div class="about-elements container--small">
            <a  
                href="#"
                v-for="(element, i) of about"
                :key="i"
                class="about-element">
                <img :src="element.img" :alt="element.title">
                <h4 class="about-element__title">
                   {{ element.title }}
                </h4>
                <span class="about-element__description">
                    {{ element.description }}
                </span>
            </a>
        </div>
    </div>
</template>

<script setup>
   import { ref } from 'vue';
   const about = [
    {
        img: '/svg/delivery.svg',
        title: 'Next day as standard',
        description: 'Order before 3pm and get your order the next day as standard'
    },
    {
        img: '/svg/checkmark.svg',
        title: 'Made by true artisans',
        description: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        img: '/svg/purchase.svg',
        title: 'Unbeatable prices',
        description: 'For our materials and quality you will not find better prices anywhere'
    },
    {
        img: '/svg/sprout.svg',
        title: 'Recycled packaging',
        description: 'We use 100% recycled to ensure our footprint is more manageable'
    },
   ]
</script>

<style scoped>
.about{
    padding: 80px 0 130px 0;
}
.about-title{
    text-align: center;
    font-size: 24px;
    color:#2A254B;
    margin: 0 0 84px 0;
    font-family: 'Enso', sans-serif;
}
.about-elements{
    display: grid;
    grid-template-columns: repeat(4, 305px);
    margin: 0 auto;
    justify-content: space-between;
}
.about-element:hover .about-element__title{
    text-decoration: underline;
}
.about-element{
    padding: 48px;
    background-color: #f9f9f9;
    text-decoration: none;
    color: #2A254B;
}
.about-element img{
    margin-bottom: 12px;
}
.about-element__title{
    margin-bottom: 12px;
    font-family: 'Enso', sans-serif;
    font-size: 20px;
}
</style>
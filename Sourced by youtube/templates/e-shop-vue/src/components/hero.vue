<template>
    <div class="hero">
        <heroInfo
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="View collection"
            
        />
    </div>
</template>

<script setup>
    import heroInfo from './hero-info.vue';
</script>

<style scoped>
.hero{
    height: 704px;
    background-image: url('/image/Hero.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 80px;
}
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
    color: #2a254b;
    text-decoration: none;
    background-color: #f9f9f9;
    padding: 16px 32px;
    max-width: 170px;
}
.hero-info__link:hover{
    text-decoration: underline;
}
.hero-info__title{
    color:#22202e;
    font-size: 32px;
    font-family: 'Enso', sans-serif;
    font-weight: normal;
    margin-bottom: 20px;
}
.hero-info-description{
    font-size: 18px;
    color: #5b5676;
    font-family: "Satoshi", sans-serif;
}
</style>
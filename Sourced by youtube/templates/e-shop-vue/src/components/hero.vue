<template>
    <div class="hero">
        <heroInfo
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="View collection"
            path="/path1"
            colorTitle="var(--black)"
            colorDescription="var(--black)"
            colorLink="lightGray"
        />
    </div>
</template>

<script setup>
    import heroInfo from '@/components/hero-info.vue';
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
    color: var(--black);
    text-decoration: none;
    background-color: #f9f9f9;
    padding: 16px 32px;
    max-width: 170px;
}
.hero-info__link:hover{
    text-decoration: underline;
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
    font-family: var(--satoshi);
}
</style>
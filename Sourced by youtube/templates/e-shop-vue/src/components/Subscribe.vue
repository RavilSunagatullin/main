<template>
    <div class="subscribe">
        <div class="subscribe-text">
            <h3 class="subscribe-title">Join the club and get the benefits</h3>
            <span class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
        </div>
        <div class="subscribe-checks">
            <div class="subscribe-check">
                <img src="/svg/checkmark.svg" alt="checkmark" class="check-icon">
                <span class="check-name">Exclusive offers</span>
            </div>
            <div class="subscribe-check">
                <img src="/svg/checkmark.svg" alt="checkmark" class="check-icon">
                <span class="check-name">Exclusive offers</span>
            </div>
            <div class="subscribe-check">
                <img src="/svg/checkmark.svg" alt="checkmark" class="check-icon">
                <span class="check-name">Exclusive offers</span>
            </div>
        </div>
        <form class="subscribe-form">
            <input type="text" class="text" placeholder="your@email.com">
            <uiButton :color="'dark'">Sign up</uiButton>
        </form>
    </div>
</template>

<script setup>
    import uiButton from '@/components/ui/button.vue';
</script>

<style scoped>
.subscribe{
    background-image: url('/image/bg.jpg');
    background-size: cover;
    padding: 97px 0 86px 0;
}
.subscribe-text{
    max-width: 500px;
    margin: auto;
    text-align: center;
    color: var(--white);
}
.subscribe-title {
    font-size: 32px;
    display: block;
    margin: 0 0 12px 0;
    font-weight: 400;
}
.subscribe-description {
    font-size: 18px;
    display: block;
}
.subscribe-checks {
    display: flex;
    justify-content: center;
    gap: 36px;
    margin-top: 30px;
}
.subscribe-check {
    display: flex;
    align-items: center;
    gap: 8px;
}
.check-name {
    color: var(--white);
}
.subscribe-form{
    margin: auto;
    margin-top: 40px;
}
.text{
    height: 56px;
    width: 354px; 
    padding: 0 32px;
    font-size: 16px;
    border: none;
}
.subscribe-form{
    background: #fff;
    width: fit-content;
}
</style>
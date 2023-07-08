<template>
    <h1 class="heading-1">Button</h1>
    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <uiButton label="primary" color="primary"/>
        <uiButton label="second" color="second"/>
        <uiButton label="success" color="success"/>
        <uiButton label="info" color="info"/>
        <uiButton label="warning" color="warning"/>
        <uiButton label="danger" color="danger"/>
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <uiButton label="primary" color="primary" :rounded="true"/>
        <uiButton label="second" color="second" :rounded="true"/>
        <uiButton label="success" color="success" :rounded="true"/>
        <uiButton label="info" color="info" :rounded="true"/>
        <uiButton label="warning" color="warning" :rounded="true"/>
        <uiButton label="danger" color="danger" :rounded="true"/>
    </div>
    <h2 class="heading-2">Disable</h2>
    <div class="line">
        <uiButton label="primary" color="primary" :disable="true"/>
        <uiButton label="second" color="second" :disable="true"/>
        <uiButton label="success" color="success" :disable="true"/>
        <uiButton label="info" color="info" :disable="true"/>
        <uiButton label="warning" color="warning" :disable="true"/>
        <uiButton label="danger" color="danger" :disable="true"/>
    </div>
    <h2 class="heading-2">Outline</h2>
    <div class="line">
        <uiButton label="primary" color="primary" :outline="true"/>
        <uiButton label="second" color="second" :outline="true"/>
        <uiButton label="success" color="success" :outline="true"/>
        <uiButton label="info" color="info" :outline="true"/>
        <uiButton label="warning" color="warning" :outline="true"/>
        <uiButton label="danger" color="danger" :outline="true"/>
    </div>
    <h2 class="heading-2">Icon</h2>
    <div class="line">
        <uiButton color="primary" icon="heart"/>
        <uiButton color="second" icon="hand"/>
        <uiButton color="success" icon="address-book"/>
        <uiButton color="info" icon="credit-card"/>
        <uiButton color="warning" icon="lemon"/>
        <uiButton color="danger" icon="hourglass"/>
    </div>
    <h2 class="heading-2">Size lager</h2>
    <div class="line">
        <uiButton label="primary" color="primary" size="large"/>
        <uiButton label="second" color="second" size="large"/>
        <uiButton label="success" color="success" size="large"/>
        <uiButton label="info" color="info" size="large"/>
        <uiButton label="warning" color="warning" size="large"/>
        <uiButton label="danger" color="danger" size="large"/>
    </div>
    <h2 class="heading-2">Events</h2>
    <div class="line">
        <uiButton label="click me" color="danger" @click="eventForButton"/>
    </div>
</template>

<script setup>
    import uiButton from '@/components/uiButton.vue';
    const eventForButton = () =>{
        alert('You click so well ...')
    }
</script>

<style lang="sass" scoped>
.line
    display: flex
    flex-wrap: wrap
    margin-bottom: 20px
</style>
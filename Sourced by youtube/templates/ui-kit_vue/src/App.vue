<template>
    <div class="container">
        <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
        <layoutHeader/>
        <layoutSidebar :openSidebar="isOpenMenu"/>
        <div :class="['content', {content__full:  !isOpenMenu}]">
            <router-view/>
        </div> 
    </div>
</template>

<script setup>
import layoutHeader from '@/components/layout/header.vue'
import layoutSidebar from '@/components/layout/sidebar.vue'

import {ref} from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value
}
</script>

<style lang="sass" scoped>
.content
    max-width: 1440px
    margin-left: 230px
    padding: 70px
    transition: all 0.2s
    &__full
        margin-left: 0
.sidebar-toggle
    position: fixed
    left: 0
    width: 15px
    background-color: var(--primary)
    height: 100%
    z-index: 1
    cursor: pointer
    color: #fff
    display: flex
    align-items: center
    justify-content: center


@media screen and (max-width:1023px)
    .content
        margin-left: 0
</style>

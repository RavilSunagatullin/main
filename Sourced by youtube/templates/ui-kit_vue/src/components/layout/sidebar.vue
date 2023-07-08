<template>
    <div :class="['sidebar', {sidebar__open: openSidebar}]" >
        <router-link 
            class="sidebar__link"
            v-for="link in links" 
            :key="link.name"
            :to="link.href">{{ link.name }}</router-link>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const props =defineProps({
        openSidebar:{
            type:Boolean,
            required: true
        }
    })

    const links =  ref([
        {
            name:'Button',
            href:'/button'
        },
        {
            name:'Typography',
            href:  '/typography'
        },
    ])
</script>

<style lang="sass" scoped>
.sidebar
    left: 0
    top: 62px
    height: 100%
    background: #fff
    position: fixed
    width: 250px
    padding: 20px
    transition: all 0.2s ease
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.07)
    transform: translateX(-250px)
    &__open
        transform: translateX(0)
    &__link
        display: block
        border-radius: 12px
        padding: 10px
        border: 2px solid #fff
        transition: all 0.2s
        font-weight: bold
        margin-bottom: 10px
        &:hover
            border-color: var(--primary)
    
    
</style>
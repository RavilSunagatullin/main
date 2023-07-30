<template>
    <router-link 
        :to="to"
        :class="[
            'link',
            {'link__white': store.lightTheme === false },
            {'link__black': store.lightTheme === true }
        ]">
    {{ label }}
    </router-link>
</template>

<script setup>
    import { useStore } from "@/store/store";
    const store = useStore();
    const props = defineProps({
        label:{
            type:String,
            default: 'link'
        },
        to:{
            type:String,
            default: '/'
        },
    })
</script>

<style lang="sass" scoped>
.link
    min-width: 105px
    padding: 11px 20px
    border-radius: 7px
    cursor: pointer
    font-size: 15px
    transition: all 0.2s ease
    height: 40px
    &__black
        background: #333333
        border: 1px solid #333333
        color: #ffffff
        &:hover
            background: #fd3e3e
            color: #ffffff
    &__white
        background: #ffffff
        border: 1px solid #ffffff
        color: #333333
        &:hover
            background: #fd3e3e
            color: #ffffff
</style>
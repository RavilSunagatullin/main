<template>
    <div>
        <footer class="app-footer">{{ stats.active }} more to do, {{ stats.done }} done</footer>
    </div>
</template>

<script lang="ts">
    import { PropType, defineComponent } from 'vue'
    export interface Stats {
        active: number,
        done: number
    }
    export default defineComponent({
        props:{
            stats:{
                type: Object as PropType<Stats>,
                required: true
            }
        }
    })
</script>

<style lang="sass" scoped>

</style>
<template>
    <div>
        <aside class="app-filters">
            <section class="toggle-group">
                <button 
                    v-for="filter in filters"
                    :key="filter"
                    class="button" 
                    :class="{'button--primary':activeFilter===filter}" 
                    @click="setFilter(filter)">{{ filter }}</button>
            </section>
        </aside>
    </div>
</template>

<script lang="ts">
    import { PropType, defineComponent } from 'vue'
    import {filter} from '../types/filter'


    interface State {
        filters:filter[]
    }
    export default defineComponent({
        props:{
            activeFilter: {
                type:String as PropType<filter>,
                required:true
            },
        },
        data():State{
            return{
                filters:['All', 'Active', 'Done']
            }
        },
        methods:{
            setFilter(filter:filter){
                this.$emit('setFilter', filter)
            }
        },
        emits(){
            setFilter: (filter:filter) => filter
        }
    })
</script>

<style lang="sass" scoped>

</style>
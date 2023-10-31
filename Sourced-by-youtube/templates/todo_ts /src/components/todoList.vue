<template>
    <div>
        <ul class="todo-list">
            <todoComponent 
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @toggle-todo="toggleTodo"
                @remove-todo="removeTodo"/>
        </ul>
    </div>
</template>

<script lang="ts">
    import { PropType, defineComponent } from 'vue'
    import todoComponent from './todoComponent.vue';
    import {Todo} from '../types/todo'


    export default defineComponent({
        components:{
            todoComponent
        },
        props:{
            todos:{
                type:Array as PropType<Todo[]>
            }
        },
        methods:{
            toggleTodo(id:number){
                this.$emit('toggleTodo', id)
            },
            removeTodo(id:number){
                this.$emit('removeTodo', id)
            }
        },
        emits:{
            toggleTodo: (id:number) => Number.isInteger(id),
            removeTodo: (id:number) => Number.isInteger(id),
            
        }
    })

</script>

<style lang="sass" scoped>

</style>
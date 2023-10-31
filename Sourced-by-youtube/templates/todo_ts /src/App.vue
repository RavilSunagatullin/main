<template>
    <uiHeader/>
    <filters 
        :activeFilter="activeFilter"
        @setFilter="setFilter"/>
    <main class="app-main">
        <todoList 
            :todos="filteredTodos"
            @toggle-todo="toggleTodo"
            @remove-todo="removeTodo"/>
        <add @add-todo="addTodo"/>
    </main>
    <uiFooter
        :stats="stats"/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import uiHeader from './components/header.vue';
    import filters from './components/filters.vue'
    import todoList from './components/todoList.vue'
    import add from './components/add.vue'
    import uiFooter, { Stats } from './components/footer.vue'

    import {Todo} from './types/todo'
    import {filter} from './types/filter'

    interface State {
        todos: Todo[],
        activeFilter: filter,
    }

    export default defineComponent({
        components:{
            uiHeader,
            filters,
            todoList,
            add,
            uiFooter
        },
        
        data():State{
            return{
                todos: [
                    {id:0, text:'Learning Vue', complete:true},
                    {id:1, text:'Learning TypeScript', complete:true},
                    {id:2, text:'Create first todo', complete:false},
                ],
                activeFilter: 'All'
            }
        },
        methods:{
            addTodo(todo:Todo){
                this.todos.push(todo)
            },
            toggleTodo(id:number){
                const targetTodo = this.todos.find((todo:Todo) => todo.id === id )
                if(targetTodo){
                    targetTodo.complete = !targetTodo.complete
                }
            },
            removeTodo(id:number){
                this.todos = this.todos.filter((todo:Todo) => todo.id !== id)
            },
            setFilter(filter:filter){
                this.activeFilter = filter
            }
        },
        computed:{
            filteredTodos():Todo[]{
                switch(this.activeFilter){
                    case 'Active':
                        return this.activeTodos
                    case 'Done':
                        return this.doneTodos
                    case 'All':
                    default:
                        return this.todos
                }
            },
            stats():Stats{
                return {
                    active: this.activeTodos.length,
                    done: this.doneTodos.length
                }
            },
            activeTodos():Todo[]{
                return this.todos.filter(todo => !todo.complete)
            },
            doneTodos():Todo[]{
                return this.todos.filter(todo => todo.complete)
            }
        }
    })
</script>

<style lang="sass" scoped>

</style>

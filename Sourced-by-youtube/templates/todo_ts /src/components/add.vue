<template>
    <div>
        <section class="add-todo">
            <form  
                v-if="isFormVisible" 
                class="add-todo__form"
                @submit.prevent="addTodo">
                    <button class="close-button" type="button" @click="toggleAdd">
                        <i class="bi bi-x"></i>
                    </button>
                    <div class="text-input text-input--focus">
                        <input v-model="todoText" class="input" />
                    </div>
                    <button class="button button--filled">Add task</button>
            </form>
            <button v-else class="add-todo__show-form-button" @click="toggleAdd">
                <i class="bi bi-plus-lg"></i>
            </button>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import {Todo} from '../types/todo'

    interface State {
        isFormVisible: boolean,
        todoText: string
    }

    export default defineComponent({
        data():State{
            return{
                isFormVisible: false,
                todoText: ''
            }
        },
        methods:{
            toggleAdd(){
                this.isFormVisible = !this.isFormVisible
            },
            addTodo(){
                this.$emit('addTodo', {
                    id:Date.now(),
                    text: this.todoText,
                    complete:false
                })
                this.todoText=''
            }
        },
        emits:{
            addTodo:(todo:Todo) => todo
        }
    })
</script>

<style lang="sass" scoped>

</style>
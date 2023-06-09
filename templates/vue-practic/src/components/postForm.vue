<template>
    <div>
        <form @submit.prevent>
            <h4>generation posts</h4>
            <MyInput class="input"
                placeholder="title" 
                v-model="post.title"
                >
            </MyInput>
            <MyInput
                placeholder="body"
                v-model="post.body">
            </MyInput>
            <MyButton 
                class="btn" 
                style=" align-self: flex-end; 
                        margin-top: 10px;"
                @click="createPost">let` go
            </MyButton>
        </form>
    </div>
</template>

<script>

    export default {

        data(){
            return{
                post:{
                    title: '',
                    body:'',
                }
            }
        },
        
         methods: {
            createPost(){
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body:'',
                }
            },
            
        }
    }
</script>

<style>


form{
    display: flex;
    flex-direction: column;
}
.input{
    border-radius:8px;
    color:#E1E2E2;
    border: 1px solid #E1E2E2;
}

</style>
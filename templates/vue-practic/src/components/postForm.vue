<template>
    <div>
        <form @submit.prevent>
            <h4>generation posts</h4>
            <input 
                class="input" 
                type="text" 
                placeholder="title" 
                v-model="post.title"
            >
            <input 
                class="input" 
                type="text" 
                placeholder="body"
                v-model="post.body"
            >
            <button class="btn" @click="createPost">let` go</button>
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
.input{
    width: 100%;
    border: 1px solid teal;
    padding: 10px;
    margin-top: 10px;
}

form{
    display: flex;
    flex-direction: column;
}
.btn{
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color:teal;
    border: 1px solid teal;

}
</style>
<template>
    <div class="app">
        <MyButton
            @click="showDialog"
            style= "margin-top: 10px;
                    margin-bottom: 10px;
                    color:green;
                    border: 1px solid green;">
            create post
        </MyButton>
        <MyDialog v-model:show="dialogVisible">
            <postForm
                @create="createPost"
            />
        </MyDialog>
        
        <postList
            :posts="posts"   
            @remove="removePost"   
            v-if="!isPostsLoading"
         />
        <div v-else>Loading...</div>

    </div>
</template>

<script>
    import postForm from "@/components/postForm.vue"
    import postList from "@/components/postList.vue"
    import axios from 'axios'

    export default {
        components:{
            postForm,
            postList,
        },
        data(){
            return{
                posts:[],
                dialogVisible: false,
                isPostsLoading:false,
            }
        },
        methods: {
            createPost(post){
                this.posts.push(post)
                this.dialogVisible = false

            },
            removePost(post){
                this.posts = this.posts.filter(p => p.id != post.id)
            },
            showDialog(){
                this.dialogVisible = true;
            },
            async fetchPosts(){
                try {
                    this.isPostsLoading = true
                    setTimeout(async() => {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7')
                        this.posts = response.data
                        this.isPostsLoading = false
                    }, 150);
                    
                } catch (e) {
                    alert('Warning')
                } 
                // finally { //надо так при работе с сервером
                //     this.isPostsLoading = false
                // }
            }

        },
        mounted(){
            this.fetchPosts()
        }
    }
</script>

<style>
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
.app{
    padding: 20px;
}
</style>
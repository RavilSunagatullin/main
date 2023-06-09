<template>
    <div class="app">
        <div class="app__btns">
            <MyButton
                @click="showDialog"
                style= "color: #FB8122;
                        border: 1px solid #FB8122;
                        font-weight: 700;">
                create post
            </MyButton>
            <MySelector
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
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
        
        <div v-else class="container">
            <div >Loading...</div>
        </div>
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
                selectedSort:"",
                sortOptions : [
                    {value: 'title', name: 'by named'},
                    {value: 'body', name: 'by content'}
                ]
                
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
        },

        // computed:{ //переделка  watch + надо заменить в post list массив на sortedPosts
        //     sortedPosts(){
        //         return [...this.posts].sort((post1, post2) => { post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
        //     }
        // },
        watch: { 
            selectedSort(newValue) {
                this.posts.sort((post1, post2) => {
                    return post1[newValue]?.localeCompare(post2[newValue])
                })
            }
        },


    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,400;1,700&display=swap');
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: #1D2228;
    color: #E1E2E2;
}
.app{
    padding: 20px;
}
.app__btns{
    display: flex;
    max-width: 1280px;
    gap: 30px;
    margin: auto;
    margin-bottom: 15px;
}
.container{
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: auto;
}
</style>
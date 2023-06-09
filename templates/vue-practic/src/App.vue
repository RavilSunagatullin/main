<template>
    <div class="app">
        <div class="app__btns">
            <MyButton class="orange-btn"
                @click="showDialog"
                >
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
        
        <div v-else class="container container-for-spin">
            <div class="container-spin">
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
            </div>
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
                        let min = Math.ceil(3);
                        let max = Math.floor(9);
                        let result = Math.floor(Math.random() * (max - min)) + min;
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${result}`) 
                        this.posts = response.data
                        this.isPostsLoading = false
                    },750);
                    
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
    min-height: 100vh;
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
.orange-btn{
    color: #FB8122;
    border: 1px solid #FB8122;
    font-weight: 700;
}
.container-for-spin{
    position: absolute;
    top: 40%;
    left: 50%;
}
.container-spin {
  width: 80px;
  height: 100px;
  margin: auto;
  /* align-items: center; */

}

.block {
  position: relative;
  box-sizing: border-box;
  float: left;
  margin: 0 10px 10px 0;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #FFF;
}

.block:nth-child(4n+1) { animation: wave 1s ease .0s infinite; }
.block:nth-child(4n+2) { animation: wave 1s ease .1s infinite; }
.block:nth-child(4n+3) { animation: wave 1s ease .2s infinite; }
.block:nth-child(4n+4) { animation: wave 1s ease .3s infinite; margin-right: 0; }

@keyframes wave {
  0%   { top: 0;     opacity: 1; }
  50%  { top: 30px;  opacity: .2; }
  100% { top: 0;     opacity: 1; }
}
</style>
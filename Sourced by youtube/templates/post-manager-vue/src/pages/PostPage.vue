<template>
    <div >
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
        
        <div class="observer" v-intersection="loadMorePosts"></div>
        <!-- вынести в отдельный компонент но будет бескоонечная загрузка -->
        <!-- <div class="page__wrapper"> 
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="page"
                :class="{'current-page': page === pageNumber}"
                @click="changePage(pageNumber)"
                > {{ pageNumber }}
                
            </div>
        </div> -->
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
                page: 1,
                limit: 10,
                totalPages:0,
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
            // changePage(pageNumber){ 
            //     this.page = pageNumber
            //     // this.fetchPosts()
            // },
            async fetchPosts(){
                try {
                    this.isPostsLoading = true
                    setTimeout(async() => {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                            params:{
                                _page: this.page,
                                _limit:this.limit
                            }

                        }) 
                        this.totalPages =  Math.ceil(response.headers['x-total-count'] / this.limit)
                        this.posts = response.data
                        this.isPostsLoading = false
                    },750);
                    
                } catch (e) {
                    alert('Warning')
                } 
                // finally { //надо так при работе с сервером
                //     this.isPostsLoading = false
                // }
            },
            async loadMorePosts(){
                try {
                    this.page += 1
                    setTimeout(async() => {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                            params:{
                                _page: this.page,
                                _limit:this.limit
                            }

                        }) 
                        this.totalPages =  Math.ceil(response.headers['x-total-count'] / this.limit)
                        this.posts = [...this.posts, ...response.data]
                        this.isPostsLoading = false
                    },150);
                    
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
        //     const options = {
        //          rootMargin: '0px',
        //          threshould: 1.0
        //     }
        // const callback = (entries, observer) =>{
        //     if(entries[0].isIntersecting && this.page<this.totalPages){
        //        this.loadMorePosts()
        //     }
        // }
        // const observer = new IntersectionObserver(callback, options)
        // observer.observe( this.$refs.observer)
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
            },
        },


    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,400;1,700&display=swap');
.app__btns{
    display: flex;
    max-width: 1280px;
    gap: 30px;
    margin: auto;
    margin-bottom: 15px;
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
  background: #E1E2E2;
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


/* фикс при загрузке в page wrap страницы но кривой*/ 
    /* лучше сказать что фишка для удобства пользователя */
    /* position: absolute; 
    left: 50%;
    right: 50%;
    bottom: -21%; */
/* .page__wrapper{
    display: flex;
    justify-content: center;
    margin-top: 25px;
    gap: 10px;
    
}
.page{
    border: 1px solid #E1E2E2;
    border-radius:8px;
    
    padding: 10px;
}
.current-page{
    border: 2px solid #FB8122;
} */
</style>
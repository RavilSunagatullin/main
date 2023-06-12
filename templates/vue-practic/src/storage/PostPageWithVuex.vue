<template>
    <div >
        <!-- <h1>{{ $store.state.isAuth ? 'Welcome user : ---' : "Please, log in" }}</h1>
        <div style="display: flex;
                    gap: 15px;
                    padding: 30px 0; 
                    align-items:center;">
            
            <h1>{{ $store.state.likes }}</h1>
            <div style="display: flex; gap: 10px;">
                <MyButton
                    @click=" $store.commit('incrementLikes') "
                >
                    <svg fill="#FB8122" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" xml:space="preserve">
                    <g>
                        <path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
                            c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194
                            s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38
                            C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64
                            c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484
                            c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
                            c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8
                            s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8
                            s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452
                            c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295
                            c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64
                            c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947
                            c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194
                            c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631
                            c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032
                            c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079
                            C482.323,308.985,475.927,319.848,465.561,325.727z"/>
                        <path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"/>
                        <path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"/>
                        <path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"/>
                        <path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"/>
                    </g>
                    </svg>
                </MyButton> 
                <MyButton
                    @click=" $store.commit('decrementLikes') "
                >
                <svg fill="#FB8122" height="30px" width="30px"  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.982 0.007c9.088 0 9.159 0.377 10.284 1.225 0.597 0.449 1.723 0.76 5.838 1.028 0.299 0.019 0.583 0.134 0.773 0.365 0.087 0.107 2.143 3.105 2.143 7.907 0 4.732-1.471 6.89-1.534 6.991-0.183 0.292-0.503 0.469-0.848 0.469-3.378 0-8.062 4.313-11.211 11.841-0.544 1.302-0.657 2.158-2.657 2.158-1.137 0-2.412-0.814-3.043-1.86-1.291-2.135-0.636-6.721-0.028-9.171-2.063 0.017-5.796 0.045-7.572 0.045-2.471 0-4.106-1.474-4.157-3.628-0.016-0.711 0.077-1.62 0.283-2.088-0.543-0.543-1.245-1.361-1.276-2.415-0.038-1.36 0.852-2.395 1.42-2.989-0.13-0.396-0.391-0.92-0.366-1.547 0.063-1.542 1.253-2.536 1.995-3.054-0.061-0.42-0.109-1.217 0.026-1.832 0.535-2.457 4.138-3.445 9.928-3.445zM28.575 4.289c-3.584-0.296-5.5-0.698-6.51-1.459-0.782-0.588-0.661-0.822-9.082-0.822-2.568 0-7.59 0.107-7.976 1.869-0.154 0.705 0.59 1.398 0.593 1.403 0.203 0.502-0.024 1.089-0.518 1.305-0.008 0.004-2.004 0.72-2.050 1.836-0.030 0.713 0.46 1.142 0.471 1.159 0.291 0.452 0.184 1.072-0.257 1.38-0.005 0.004-1.299 0.788-1.267 1.857 0.025 0.848 1.143 1.447 1.177 1.466 0.25 0.143 0.432 0.39 0.489 0.674 0.057 0.282-0.007 0.579-0.182 0.807 0 0-0.509 0.808-0.49 1.566 0.037 1.623 1.782 1.674 2.156 1.674 2.522 0 9.001-0.026 9.001-0.026 0.35-0.001 0.652 0.164 0.839 0.444s0.202 0.627 0.091 0.945c-0.976 2.814-1.522 7.227-0.616 8.735 0.267 0.445 0.328 0.889 1.328 0.889 0.139 0 0.468-0.11 0.812-0.93 3.343-7.994 8.334-12.619 12.423-13.036 0.352-0.804 1.015-2.47 1.015-5.493-0.001-3.085-0.979-5.472-1.449-6.245z"></path>
                </svg>
                </MyButton>
            </div>
        </div> -->
        <div class="app__btns">
            <MyButton class="orange-btn"
                @click="showDialog"
                >
                create post
            </MyButton>
            <!-- <MySelector
                v-model="selectedSort"
                :options="sortOptions"
            /> -->
            
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
    </div>
</template>

<script>
    import postForm from "@/components/postForm.vue"
    import postList from "@/components/postList.vue"
    import axios from 'axios'
    import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

    
    export default {
        components:{
            postForm,
            postList,
        },
        data(){
            return{
                dialogVisible: false
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
            ...mapMutations ({
                setPage: 'post/setPage'
            }),
            ...mapActions({
                loadMorePosts: 'post/loadMorePosts',
                fetchPosts: 'post/fetchPosts'
            }),


        },
        mounted(){
            // this.fetchPosts()
        },
        computed:{
            ...mapState({
                posts: state => state.post.posts,
                isPostsLoading: state => state.post.isPostsLoading,
                selectedSort: state => state.post.selectedSort,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
                sortOptions: state => state.post.sortOptions
            }),
        },  
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
</style>
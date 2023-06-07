<template>
    <div class="app">
        <postForm
            @create="createPost"
        />
        <postList
            :posts="posts"      
         />


    </div>
</template>

<script>
    import postForm from "@/components/postForm.vue"
    import postList from "@/components/postList.vue"
    export default {
        components:{
            postForm,
            postList
        },
        data(){
            return{
                posts:[
                    {id:1, title: 'JS', body: "WEgrdgs RTYUIO"},
                    {id:2, title: 'JS ts', body: "WERTdwadYUIO"},
                    {id:3, title: 'JS dw', body: "WERTdwafrfYUIO"},
                    {id:4, title: 'JSdwwd dw', body: "WERgrdgTYUIO"},
                ],
            }
        },
        methods: {
            createPost(post){
                this.posts.push(post)

            }
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
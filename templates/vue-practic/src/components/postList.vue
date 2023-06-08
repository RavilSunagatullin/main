<template>
    <div v-if="posts.length > 0">
       <h3>List of posts</h3>
       <postItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"></postItem>
    </div>
    <h2 v-else style="color:red">Posts list is null</h2>
</template>

<script>
import postItem from "@/components/postItem.vue"
    export default {
        components:{
            postItem
        },
        props:{
            posts:{
                type:Array,
                required:true,
                
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div v-if="posts.length > 0" class="container">
       <h3>List of posts</h3>
       <postItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"></postItem>
    </div>

    <div v-else class="container">
        <h2  style="color:#E1E2E2; padding-top: 10px;">Posts list is null</h2>
    </div>
    
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
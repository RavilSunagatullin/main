<template>
    <div v-if="posts.length > 0" class="container">
        <h3>List of posts</h3>
        <transition-group name="post-list">
            <postItem v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"></postItem>
        </transition-group> 
    </div>

    <div v-else class="container">
        <h2>Posts list is null</h2>
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
h2{
    color:#E1E2E2;
    padding-top: 10px;
}
.post-list-item{
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-from,
.post-list-leave-to{
    opacity: 0;
    transform: translateX(130px);
}

.post-list-enter-active,
.post-list-leave-active{
    transition: all 0.4s ease;
}
.post-list-move{
    transition: transform 0.4s ease;
}
</style>
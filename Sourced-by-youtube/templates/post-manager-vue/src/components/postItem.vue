<template>
    <div class="post">
        <div>
            <div><strong>Title:</strong> {{ post.title }}</div>
            <div><strong>Decsr:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <MyButton 
            @click="$router.push(`/posts/${post.id}`)">open</MyButton>
            <MyButton class="delete-btn"
            @click="$emit('remove', post)">delete</MyButton>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            post:{
                type:Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
.post{
    border-radius: 8px;
    margin-top: 15px;
    padding: 15px;
    padding-right: 15px;
    border: 2px solid #E1E2E2;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.delete-btn{
    color: #E1E2E2;
    border: 1px solid #E1E2E2
}
.post__btns{
    margin-left: 20px;
    display: flex;
    gap: 10px;
}
</style>
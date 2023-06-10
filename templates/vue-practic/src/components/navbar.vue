<template>
    <div class="navbar">
        <h2 @click="$router.push('/')">Post Manager</h2>
        <div class="navbar__btns">
            <MyButton @click="$router.push('/posts')">Posts</MyButton>
            <MyButton @click="$router.push('/about')">About app</MyButton>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    height: 70px;
    padding: 0 15px;
    display: flex;
    align-items:center;
    justify-content: space-between;
}
.navbar__btns{
    display: flex;
    gap: 15px;
}
</style>
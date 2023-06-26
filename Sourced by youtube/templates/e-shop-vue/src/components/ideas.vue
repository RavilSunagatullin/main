<template>
    <div class="ideas container--small">
        <div class="ideas-info">
            <heroInfo
                title="It started with a small idea"
                description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
                link="View collection"
                backgrgound="var(--black)"
                colorTitle="#fff"
                colorDescription="#fff"
                colorLink="#4e4d93"
                colorTextLink="#fff"
            />
        </div>
        <div class="ideas-image">
            <img src="/image/feature.jpg" alt="room">
        </div>
    </div>
</template>

<script setup>
    import heroInfo from '@/components/hero-info.vue';
</script>

<style scoped>
.ideas{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    margin-bottom: 60px;
}
.ideas-image{
    height: 444px;
    overflow: hidden;
}
</style>
<template>
    <div class="product">
        <div>img</div>
        <div>description</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        product: {
            type: Object,
            default: () => {

            },
            required:  true
        }
    })
</script>

<style scoped>
    .product{
        background-color: #f9f9f9;
        padding: 50px  0;
        display: grid;
        grid-template-columns: 1fr 500px;
        column-gap: 65px;
    }
</style>
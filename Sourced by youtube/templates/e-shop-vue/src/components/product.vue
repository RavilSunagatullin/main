<template>
    <div class="product">
        <a href="#" >
            <img :src="img" :alt="title" class="product-image">
        </a>
        <a href="#" class="product-name">{{ title }}</a>
        <span class="product-price">£ {{ price }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        img: {
            type:String,
            required: true
        },
        title: {
            type:String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    })
</script>

<style scoped>
.product{
    margin-bottom: 48px;
}
.product:hover .product-name{
    text-decoration: underline;
}
.product-image{
    display: block;
    margin-bottom: 24px;
}
.product-name{
    font-family: 'Enso', sans-serif;
    display: block;
    color: #2a254b;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    text-decoration: none;
}
.product-price{
    display: block;
    font-size: 18px;
    color: #2a254b
}
</style>
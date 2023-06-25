<template>
  <div class="product-container">
    <div class="products container--small">
        <Product
            v-for="product of products" 
            :key="product.id"
            :img="product.img" 
            :title="product.title"
            :price="product.price"/>
    </div>
    <a href="#" class="products-link">View collection</a>
  </div>
    
</template>

<script setup>
    import Product from './product.vue';
    import { ref } from 'vue';

    const products  = ref([
    {
      id: 1,
      img: '/image/listing4.jpg',
      title: 'The Dandy chair',
      price: '250'
    },
    {
      id: 2,
      img: '/image/listing3.jpg',
      title: 'Rustic Vase Set',
      price: '155'
    },
    {
      id: 3,
      img: '/image/listing2.jpg',
      title: 'The Silky Vase',
      price: '125'
    },
    {
      id: 4,
      img: '/image/listing.jpg',
      title: 'The Lucy Lamp',
      price: '399'
    },
  ])
</script>

<style scoped>
.product-container{
  margin-bottom: 56px;
}
.products{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    margin: 0 auto;
}
.products-link{
  display: block;
  text-align: center;
  margin: 0 auto;
  color: #2a254b;
  text-decoration: none;
  background-color: #f9f9f9;
  padding: 16px 32px;
  max-width: 172px;
  border: 1px solid transparent;
}
.products-link:hover{
  text-decoration: underline;
  border:1px solid #CAC6DA;
}
</style>
import {createRouter, createWebHistory} from 'vue-router'
import index from '@/views/index.vue'
import productPage from '@/views/productPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/products/:id',
            name: 'productPage',
            component: productPage
        },
    ]
})
export default router
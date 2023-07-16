import { createRouter, createWebHistory } from "vue-router";
import index from '@/views/index.vue'
import typography from '@/views/typography.vue'
import button from '@/views/button.vue'
import checkbox from '@/views/checkbox.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name: 'index',
            component: index
        },
        {
            path:'/button',
            name: 'button',
            component: button
        },
        {
            path:'/typography',
            name: 'typography',
            component: typography
        },
        {
            path:'/checkbox',
            name: 'checkbox',
            component: checkbox
        },

    ]
})

export default router
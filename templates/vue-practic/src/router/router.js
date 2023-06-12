import { createRouter, createWebHistory } from "vue-router"
import PostPage from '@/pages/PostPage'
import main from "@/pages/main"
import about from "@/pages/about"
import idPage from "@/pages/postIdPage"
import ppVuex from "@/storage/PostPageWithVuex"

const routes = [
    {
        path:'/',
        component: main
    },
    {
        path:'/posts',
        component: PostPage
    },
    {
        path:'/about',
        component: about
    },
    {
        path:'/posts/:id',
        component: idPage
    },
    {//don`t work
        path:'/storage',
        component: ppVuex
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router
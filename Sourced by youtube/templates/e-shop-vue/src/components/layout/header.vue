<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-search">
                <img src="/svg/search.svg" alt="">
            </div>
            <router-link to="/" class="header-logo">Avion</router-link>
            <div class="header-top-right">
                <div href="#" class="header-top-right__cart">
                    <router-link to="/card">
                        <img src="/svg/cart.svg" alt="">
                    </router-link>  
                </div>
                <div href="#" class="header-top-right__user">
                    <router-link to="/user">
                        <img src="/svg/user.svg" alt="">
                    </router-link>  
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link 
                class="header-menu__link"
                :to="element.path" 
                v-for="(element, i) of menu"
                :key="i">{{ element.name }}</router-link>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue';

    const menu = [
        {
            name:'Plant pots',
            path: '/plant'
        },
        {
            name:'Ceramics',
            path: '/Ceramics'
        },
        {
            name:'Tables',
            path: '/Tables'
        },
        {
            name:'Chairs',
            path: '/Chairs'
        },
        {
            name:'Crockery',
            path: '/Crockery'
        },
        {
            name:'Tableware',
            path: '/Tableware'
        },
        {
            name:'Cutlery',
            path: '/Cutlery'
        },
    ]
    
</script>

<style  scoped>
.header {
    height: 132px;
}
.header-top{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    height: 70px;
    align-items: center;
}
.header-logo{
    font-family: var(--satoshi);
    font-weight: 400;
    color: var(--black);
    text-decoration: none;
    font-size: 24px;
    text-align: center;
}
.header-logo:hover{
    text-decoration: underline;
}
.header-top-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
}
.header-menu{
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
}
.header-menu__link{
    color:var(--gray);
    text-decoration: none;
}
.header-menu__link:hover{
    text-decoration: underline;
}
</style>
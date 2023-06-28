<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Menu</span>
                        <router-link to="/" class="footer-menu__link">New  arrivals</router-link>
                        <router-link to="/" class="footer-menu__link">Best sellers</router-link>
                        <router-link to="/" class="footer-menu__link">Recently viewed</router-link>
                        <router-link to="/" class="footer-menu__link">Popular this week</router-link>
                        <router-link to="/" class="footer-menu__link">All products</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Categories</span>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                        <router-link to="/" class="footer-menu__link">Furniture</router-link>
                        <router-link to="/" class="footer-menu__link">Homeware</router-link>
                        <router-link to="/" class="footer-menu__link">Plant pots</router-link>
                        <router-link to="/" class="footer-menu__link">Chairs</router-link>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu-title">Our company</span>
                        <router-link to="/" class="footer-menu__link">About us</router-link>
                        <router-link to="/" class="footer-menu__link">Vacancies</router-link>
                        <router-link to="/" class="footer-menu__link">Contact us</router-link>
                        <router-link to="/" class="footer-menu__link">Privacy</router-link>
                        <router-link to="/" class="footer-menu__link">Returns policy</router-link>
                    </div>
                </div>
                <div class="footer-subscribe">

                </div>
            </div>
            
        </div>
    </footer>
</template>

<script  setup>
    
</script>

<style scoped>
.footer {
    background-color: var(--black);
    color: var(--white);
}
.footer-content{
    padding: 58px 82px 25px 82px;
}
.footer-top {
}
.footer-menu {
}
.footer-menu-column {
}
.footer-menu-title {
}
.footer-menu__link {
}
.footer-subscribe {
}
</style>
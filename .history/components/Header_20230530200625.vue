<script setup>
// Hamburger Menu
const showMenu = ref(false)

const handleMenu = () => showMenu.value = !showMenu.value

</script>

<template>
    <div>
        <header class="nav">
            <NuxtLink to="/about" class="nav_option">About</NuxtLink>

            <NuxtLink to="/" class="nav_option">Home</NuxtLink>

            <div class="logo_name">
                <img src="@/assets/Wallpaper.png" class="logo_img">
                <p class="logo" id="logo">LEXI</p>
            </div>

            <NuxtLink to="/store" class="nav_option">Store</NuxtLink>
            <NuxtLink to="/contact" class="nav_option">Contact</NuxtLink>
        </header>

        <header class="nav_mob">
            <a href="#" class="logo" id="mob_logo">LEXI</a>
    
            <div v-show="showMenu" class="desk_nav" id="mobi-links">
                
                <button class="logomob hamburger_close" id="close_hamburger" style="color: red;" @click="handleMenu">X CLOSE X</button>

                
                <NuxtLink to="/" class="nav_option">Home</NuxtLink>

                <NuxtLink to="/about" class="nav_option">About</NuxtLink>

                <NuxtLink to="/store" class="nav_option">Store</NuxtLink>

                <NuxtLink to="/contact" class="nav_option">Contact</NuxtLink>
                
            </div>
    
            <button class="hamburger"  id="hamburger" @click="showMenu = true">
                <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="h-6 w-6" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <!-- <IconsHamburger class="hamburger"  id="hamburger" @click="showMenu = true"/> -->
        </header>
    </div>
</template>

<style scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px 0px 80px;
}
.nav_name{
    
}
.nav a{
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
}
.nav_mob a{
    text-decoration: none;
    color: #000;
}
.nav a:hover{
    font-weight: bolder;
    transition: 1s;
}
.nav_mob a:hover{
    font-weight: bolder;
    transition: 1s;
}
#logo{
    font-size: 2.25rem;
    font-weight: normal;
}
#mob_logo{
    font-size: 1.8rem;
    font-weight: normal;
}
.nav_mob{
    display: none;
}
/* Responsiveness */
@media screen and (max-width: 768px) {
    .nav {
        padding: 10px 80px 0 80px;
    }
}
@media screen and (max-width: 596px) {
    .nav{
        padding: 10px 60px 0 60px;
    }
    .nav a{
        font-size: 1.2rem;
    }
}
@media screen and (max-width: 463px) {
    .nav{
        display: none;
    }
    .nav_mob{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        padding-top: 10px;
    }
    .desk_nav{
        /* display: none; */
        display: flex;
        width: 35%;
        flex-direction: column;
        padding: 10px 0;
        text-align: center;
        position: fixed;
        top: 0;
        right: 0;
        background: #fff;
        z-index: 5;
        position: fixed;
        animation: fadeIn 2s;
        box-shadow: -8px 9px 14px -3px rgba(0, 0, 0, 0.78);
            -webkit-box-shadow: -8px 9px 14px -3px rgba(0, 0, 0, 0.78);
            -moz-box-shadow: -8px 9px 14px -3px rgba(0, 0, 0, 0.78);
    }
    .desk_nav a {
        padding: 10px;
        cursor: pointer;
    }
    .hamburger_close{
        font-size: 0.75rem;
    }
    .hamburger{
        background: none;
        border: none;
        cursor: pointer;
    }
    #close_hamburger{
        border: none;
        background: none;
    }
}
</style>
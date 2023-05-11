<script setup>
// Hamburger Menu
// const showMenu = () => {
//     var x = document.getElementById("mobi-links")
//     // var a = document.getElementById("close_hamburger")
//     var b = document.getElementById("hamburger")
//     if (x.style.display === "flex") {
//         x.style.display = 'none'
//         // a.style.display = 'none'
//         b.style.display = 'block'
//     } else {
//         x.style.display = 'flex'
//         // a.style.display = 'block'
//         b.style.display = 'none'
//     }
// }

cosnt showMenu = () =>
</script>

<template>
    <div>

        <!-- onclick="closeHamburge()" -->
        <header class="nav">
            <a href="#" class="nav_option">Home</a>
            <a href="#" class="nav_option">About</a>
            <a href="#" class="logo" id="logo">LEXI</a>
            <a href="#" class="nav_option">Store</a>
            <a href="" class="nav_option">Contact</a>
        </header>

        <header class="nav_mob">
            <a href="#" class="logo" id="mob_logo">LEXI</a>
    
            <div class="desk_nav" id="mobi-links">
                <button href="#" class="logomob hamburger_close" id="close_hamburger" onclick={{showMenu}} style="color: red;">X CLOSE X</button>

                <a href="#" class="nav_option">Home</a>

                <a href="#" class="nav_option">About</a>

                <a href="#" class="nav_option">Store</a>

                <a href="#" class="nav_option">Contact</a>
            </div>
    
            <button class="hamburger" onclick={{showMenu}} id="hamburger">
                <svg stroke="currentColor" fill="none" stroke-width="2.5" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="h-6 w-6" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </header>

    </div>
</template>

<style>
/* Nav Bar */
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px 0px 80px;
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
}
#mob_logo{
    font-size: 1.8rem;
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
        display: none;
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
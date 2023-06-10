<template>
    <footer>
        <div class="catalog footer_pane">
            <NuxtLink to="/404" class="footerLink"><h2>Catalog</h2></NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p>Sandals</p></NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p>Loafers</p></NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p>Sandals</p></NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p>Others</p></NuxtLink>
        </div>
        <div class="help footer_pane">
            <NuxtLink to="/contact" class="footerLink"><h2>Help for the buyer</h2></NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p></p>Shipping and Payment</NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p></p>Exchange and Return</NuxtLink>
            <NuxtLink to="/404" class="footerLink"><p></p>Frequently asked questions</NuxtLink>
        </div>
        <div class="about footer_pane">
            <NuxtLink to="/about" class="footerLink">About Us</NuxtLink>
            <NuxtLink to="/contact" class="footerLink">Contacts</NuxtLink>
            <div class="socials">
                <IconsHamburger />
                <IconsHamburger />
                <IconsHamburger />
            </div>
        </div>
    </footer>
</template>

<style>
footer{
    background: #E9E4E4;
    color: #989898;
    padding: 28px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.footer_pane h2{
    padding-bottom: 10px;
}
.footer_pane p{
    padding-bottom: 5px;
}
.help{
    padding-right: 30px;
}
.about{
    padding-left: 30px;
}
.footerLink{
    text-decoration: none;
}
@media screen and (max-width: 768px) {
    footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 28px 80px;
    }
    .help {
        padding-right: 0;
    }

    .about {
        padding-left: 0;
    }
}
@media screen and (max-width: 596px) {
    footer{
        grid-template-columns: 1fr;
        padding: 10px 60px;
    }
}
@media screen and (max-width: 463px) {
    footer{
        padding: 10px 10px;
    }
}
</style>
<template>
    <footer>
        <div class="catalog footer_pane">
            <NuxtLink to="/404">Catalog</NuxtLink>
            <p>Sandals</p>
            <p>Loafers</p>
            <p>Sandals</p>
            <p>Others</p>
        </div>
        <div class="help footer_pane">
            <NuxtLink to="/contact">Help for the buyer</NuxtLink>
            <p>Shipping and Payment</p>
            <p>Exchange and Return</p>
            <p>Frequently asked questions</p>
        </div>
        <div class="about footer_pane">
            <NuxtLink to="/404">About Us</NuxtLink>
            <p>Contacts</p>
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
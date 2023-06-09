<template>
    <footer>
        <div class="catalog footer_pane">
            <h2>Catalog</h2>
            <p>Sweaters</p>
            <p>Accessories</p>
            <p>Cardigans</p>
            <p>Actions</p>
        </div>
        <div class="help footer_pane">
            <h2>Help for the buyer</h2>
            <p>Shipping and Payment</p>
            <p>Exchange and Return</p>
            <p>Frequently asked questions</p>
            <p>Personal order</p>
        </div>
        <div class="about footer_pane">
            <h2>About Us</h2>
            <p>Contacts</p>
            <p>Cooperation</p>
            <p>Feedback</p>
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
        grid-template-columns: 1fr;
        padding: 28px 80px;
    }
    .footer_pane{
        w
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
<template>
    <Header />

    <div class="cart_content">
        <h2 class="title">Your Cart</h2>

        <div class="cart_heading">
            <h3>Item</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
        </div>

        <div class="cart_item">
            <div class="item">
                <h1>Pi Pazza Oven</h1>
                <small>Fuel Source: Wood Only</small>
                <small>Change</small>
            </div>

            <p>#4999.99</p>

            .counter
        </div>
    </div>
</template>

<style>
.title{
    text-align: center;
}
.cart_content{
    padding-top: 30px;
    width: 90%;
    margin: auto;
}
.cart_heading{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
}
</style>
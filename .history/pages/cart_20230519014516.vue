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

        <div class="cart_items">
            <div class="item">
                <h2>Pi Pazza Oven</h2>
                <small>Fuel Source: Wood Only</small>
                <small>Change</small>
            </div>

            <p>#4999.99</p>

            <div class="counter">
                3
            </div>

            <div class="total">
                <p>#4999.99</p>
                <p>x</p>
            </div>
        </div>

        
    </div>
</template>

<style>
.title{
    text-align: center;
}
.cart_content{
    padding-top: 30px;
    width: 85%;
    margin: auto;
}
.cart_heading, .cart_items{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding-top: 20px;
}
.cart_items{
    align-items: center;
}
.total{
    display: flex;
}
</style>
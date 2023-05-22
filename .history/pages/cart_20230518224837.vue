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
    grid-template-columns: 3fr 1fr 1fr 1fr;
}
</style>
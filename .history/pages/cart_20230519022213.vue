<script setup>
const count = ref(0)
</script>

<template>
    <Header />

    <h2 class="title">Your Cart</h2>

    <!-- <div class="cart_content">

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
                <button @click="count--">-</button>
                <p class="count">{{ count }}</p>
                <button @click="count++">+</button>
            </div>

            <div class="total">
                <p>#4999.99</p>
                <p>x</p>
            </div>
        </div>

        <div class="total_price">
            <h3>Grand Total:</h3>
            <p>#4399.99</p>
        </div>
    </div> -->

    <div class="empty_cart">
        <h1>Sorry your cart is empty</h1>
        <p>Return to store to add to cart</p>
        <NuxtLink to=""
    </div>
</template>

<style>
.title{
    text-align: center;
}
.cart_content{
    padding-top: 30px;
    width: 75%;
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
.counter{
    display: flex;
    align-items: center;
}
.count{
    padding: 0 5px;
}
.total{
    display: flex;
}
.total_price{
    width: 40%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15%;
    padding-top: 50px;
}
</style>
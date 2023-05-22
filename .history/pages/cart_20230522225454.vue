<script setup>
// const count = ref(1)
 
// const decrement = () => {
//     if (count.value <= 1){
//         return
//     } 
//     count.value--
// }

const shoppingCart = ref([])
shoppingCart.value = JSON.parse(localStorage.getItem('shoppingcart') || "[]")

const totalPrice = computed(() => {
    let price = 0
    for(const product of shoppingCart.value){
        price += product.price * product.count
    }
    return price
})

const removeCartItem = (id) => {
    const cartProducts = JSON.parse(localStorage.getItem('shoppingcart') || "[]")
    const newCart = cartProducts.filter((product) => product.id !== id)
    shoppingCart.value = newCart
    localStorage.setItem('shoppingcart', JSON.stringify(newCart));
}

console.log(shoppingCart.value)
</script>

<template>
    <Header />

    <h2 class="title">Cart</h2>

    <div class="cart_content">

        <div class="cart_heading">
            <h3>Item</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
        </div>

        <div v-for="cartproduct in shoppingCart" :key="cartproduct.id" class="cart_items">
            <div class="item">
                <div>
                    <img src="@/lexibelt1.png" alt="" class="item_img">
                </div>
                <div class="item_info">
                    <h2>{{ cartproduct.name }}</h2>
                    <small>Fuel Source: Wood Only</small>
                </div>
            </div>

            <p>{{cartproduct.price}}</p>

            <div class="counter">
                <button :disabled="cartproduct.count <= 1" @click="cartproduct.count--" >
                    -
                </button>
                <p class="count">{{ cartproduct.count }}</p>
                <button @click="cartproduct.count++">+</button>
            </div>

            <div class="total">
                <p>{{cartproduct.price * cartproduct.count}}</p>
                <!-- <span>{{ typeof Number(cartproduct.price) }}</span> -->
                <!-- <button @click="removeCartItem(cartproduct.id)" class="remove">Remove Product</button> -->
                <icons-close @click="removeCartItem(cartproduct.id)"></icons-close>
            </div>
        </div>

        <div class="total_price">
            <h3>Total Price:</h3>
            <!-- <p>₦ 4399.99</p> -->
            <p>₦ {{ totalPrice }}</p>
        </div>
    </div>

    <!-- <div class="empty_cart">
        <h1>Sorry your cart is empty</h1>
        <p>Return to store to add to cart</p>
        <button>
            <NuxtLink to="/store">Store</NuxtLink>
        </button>
    </div> -->

    <Footer />
</template>

<style scoped>
.title{
    text-align: center;
    margin-top: 10px;
}
.cart_content{
    padding-top: 30px;
    width: 80%;
    margin: auto;
}
.cart_heading, .cart_items{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding-top: 20px;
}
.cart_heading{
    padding-bottom: 10px;
    border-bottom: 2px solid #333;
}
.cart_items{
    align-items: center;
}
.item{
    display: flex;
    align-items: center;
}
.item_img{
    width: 50px;
    padding-right: 10px;
    border-radius: 50%;
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
.remove{
    padding: 0 5px;
}
.total_price{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 60%;
    padding-top: 100px;
    margin-bottom: 30px;
    border-bottom: 2px solid #333;
}
.empty_cart{
    text-align: center;
    padding-top: 15%;
}
</style>
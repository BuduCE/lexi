<script setup>
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

const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

console.log(shoppingCart.value)
</script>

<template>
    <Header />

    <h2 class="title">Cart</h2>

    <div class="cart_content">

        <!-- <div class="cart_heading">
            <h3>Item</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
        </div> -->

        <div v-for="cartproduct in shoppingCart" :key="cartproduct.id" class="cart_items">

            <div>
                <img src="@/assets/lexislide3.jpg" alt="" class="item_img">
            </div>

            <div>
                <div class="item">  
                    <div class="item_info">
                        <h2>{{ cartproduct.name }}</h2>
                        <small>Fuel Source: Wood Only</small>
                    </div>

                    <IconsClose @click="removeCartItem(cartproduct.id)"/>
                </div>

                <div class="total">
                    <p>₦{{ formatAmount(cartproduct.price * cartproduct.count) }} </p>

                    <div class="counter">
                        <button :disabled="cartproduct.count <= 1" @click="cartproduct.count--" >
                            -
                        </button>
                        <p class="count">{{ cartproduct.count }}</p>
                        <button @click="cartproduct.count++">+</button>
                    </div>
                </div>
            </div>

        </div>

        <div class="total_price">
            <h3>Total Price:</h3>

            <p>₦{{ formatAmount(totalPrice) }}</p>
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
    display: grid;
    grid-template-columns: 2fr 1fr;
}
.cart_items{
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* padding-top: 20px; */
}
/* .cart_heading{
    padding-bottom: 10px;
    border-bottom: 2px solid #333;
} */
.cart_items{
    align-items: center;
}
.item{
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
}
.item_img{
    width: 20%;
    padding-right: 5px;
    border-radius: 5px;
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
    justify-content: space-evenly;
    align-items: center;
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
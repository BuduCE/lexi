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

    <div class="cartpg">
        <div class="cart_content">

            <div v-for="cartproduct in shoppingCart" :key="cartproduct.id" class="cart_items">

                <div class="item_img_div">
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
.cartpg{
    padding: 20px 0;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
}
.cart_content{
    padding: 10px;
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    border-radius: 10px;
}
.cart_items{
    display: grid;
    grid-template-columns: 0.2fr 2fr;
}
.item{
    display: flex;
    justify-content: space-between;
}
.item_img{
    width: 0%;
    margin: auto;
    /* height: fit-content; */
    /* padding-right: 5px; */
    border-radius: 5px;
}
.counter{
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.count{
    padding: 0 5px;
}
.total{
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
}
.remove{
    padding: 0 5px;
}
.total_price{
    width: 90%;
    margin: auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 2px solid #333; */
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    border-radius: 5px;
}
.empty_cart{
    text-align: center;
    padding-top: 15%;
}
</style>
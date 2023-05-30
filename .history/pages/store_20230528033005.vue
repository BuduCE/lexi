<script setup>
const { data: products } = await useFetch('/api/products'
    , {
        transform: (_products) => _products.data,
})

const addToCart = (cartProduct) => {
    const existingCart = JSON.parse(localStorage.getItem('shoppingcart') || "[]")
    const existingItemIndex = existingCart.findIndex(product => product.id === cartProduct.id);
    if (existingItemIndex !== -1) {
        existingCart[existingItemIndex].count++;
    } else {
        const newItem = { ...cartProduct, count: 1 };
        existingCart.push(newItem);
    }
    localStorage.setItem('shoppingcart', JSON.stringify(existingCart));

    const localCount = existingCart.length
    console.log(localCount)
}

// const countCart = () => {
//     const localCount = products.length
//     console.log(localCount)
// }
</script>

<template>
    <Header />

    <section>
        <div id="buttons" class="store">
            <button class="btn" onclick="filterObjects()">All</button>
            <button class="btn" onclick="filterObjects('mules')">Mules</button>
            <button class="btn" onclick="filterObjects('shoes')">Shoes</button>
            <button class="btn" onclick="filterObjects('belts')">Belts</button>
            <button class="btn" onclick="filterObjects('wallets')">Wallets</button>
            <button class="btn" onclick="filterObjects('sliders')">Slides</button>
        </div>

        <h3 style="text-align: center;">Select to view more info</h3>

        <section class="store_section">

            <div class="items">

                <figure v-for="product in products" :key="product.id" class="good">

                    <!-- :to="`product/${product.id}`" -->
                    <NuxtLink :to="`product/${product.id}`" class="cartLink">
                        <img :src="`${product.img}.png`" alt="" class="img_class">

                        <div class="product_info">
                            <h4 class="pdt_name">{{ product.name }}</h4>
                        
                            <small class="pdt_price">{{ product.price }}</small>
                        </div>
                    </NuxtLink>

                    <button class="cartbtn" @click="addToCart(product)">
                        <small>Add to cart</small>
                        <img src="@/assets/toCart.svg" class="carticon" alt="">
                    </button>

                </figure>
                
            </div>

        </section>
    </section>

    <div class="cart_btn">
        <p class="cart_count">3</p>
        <CartIcon class="cart_icon"/>
    </div>

    <Product />
    <Footer />
</template>

<style scoped>
.cart_count{
    position: absolute;
    right: 38%;
    top: 30%;
    font-size: 2em;
    color: #eeff01;
    font-weight: bolder;
    /* color: #eeff01; */
}
.cart_btn{
    position: absolute;
    right: 20px;
    bottom: 10%;
    position: fixed;
}
.store_section{
    padding-bottom: 25px;
}
.items{
    padding: 0px 80px;
    column-count: 4;
    column-gap: 20px;
}
@media screen and (max-width: 768px) {
    .items{
        padding: 0 80px;
        column-count: 3;
    }
}
@media screen and (max-width: 596px) {
    .items{
        padding: 0 60px;
    }
}

@media screen and (max-width: 436px) {
    .items{
        padding: 0 10px;
        column-count: 2;
    }
}
.good{
    box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
    background: #494848;
    border-radius: 15px;
    color: #000;
    padding-bottom: 10px;
}
.cartLink{
    text-decoration: none;
    color: #fff;
}
.img_class{
    max-width: 100%;
    border-radius: 15px 15px 0 0;
}
.product_info{
    padding: 10px;
    text-align: center;
}
.cartbtn{
    margin: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;
}
.carticon{
    width: 18px;
}
#buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 40%;
    margin: auto;
}
.btn{
    margin: 5px 5px;
    border: none;
    /* padding: 5px; */
    padding: 10px 25px;
    border-radius: 5px;
    background:#989898;
    color: #E9E4E4;
    cursor: pointer;
}
.btn:hover{
    color: #000;
    background: #E9E4E4;
    font-weight: bolder;
    font-size: 14px;
}
@media screen and (max-width: 1300px) {
    #buttons{
        width: 60%;
    }
}
@media screen and (max-width: 930px) {
    .btn{
        padding: 10px 15px;
    }
}
@media screen and (max-width: 676px) {
    #buttons {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 354px) {
    .btn{
        padding: 5px 10px;
    }
}
@media screen and (max-width: 300px) {
    .btn{
        padding: 5px 5px;
    }
}
#shoes{
    display: none;
}
#belts{
    display: none;
}
</style>
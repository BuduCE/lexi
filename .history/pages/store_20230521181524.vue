<script setup>
const { data: products } = await useFetch('/api/products'
    , {
        transform: (_products) => _products.data,
})

// methods: {
//     addToCart(product){
        
//     }
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
            <div class="items slide_pane" id="slides">

                <NuxtLink v-for="product in products" :key="product.id" :to="`product/${product.id}`" id="productOne" class="good">
                    <img src= alt="" class="img_class">

                    <div class="product_info">
                        <h4 class="pdt_name">{{ product.name }}</h4>
                    
                        <small class="pdt_price">{{ product.price }}</small>

                        <button class="cartbtn" @click="addToCart(product)">
                            <small>Add to cart</small>
                            <img src="@/assets/toCart.svg" class="carticon" alt="">
                        </button>
                    </div>
                </NuxtLink>
                
            </div>
        </section>
    </section>

    <Product />
    <Footer />
</template>

<style scoped>
.store_section{
    padding-bottom: 25px;
}
/* .items{
    padding: 0px 80px;
    column-count: 4;
    column-gap: 20px;
} */
.items{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.img_class{
    /* max-width: 100%; */
    width: 100px;
    /* display: block; */
    border-radius: 15px 15px 0 0;
}
/* @media screen and (max-width: 768px) {
    .items{
        padding: 0 80px;
    }
    .items{
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
    }
    .items{
        column-count: 2;
    }
} */
#shoes{
    display: none;
}
#belts{
    display: none;
}
.item_contact button{
    width: 90%;
    padding: 10px 0;
    border: none;
    background: #FEC2C2;
    cursor: pointer;
    border-radius: 5px;
}
.item_contact button:hover{
    background: #989898;
}
.good{
    /* box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75); */
    background: #494848;
    /* border-radius: 15px; */
    text-decoration: none;
    /* color: #000; */

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
/* Cart btn */
.cartbtn{
    margin: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
    margin-top: 5px;
    cursor: pointer;
}
.carticon{
    width: 20px;
}

/* Product pop-up */
.store_cv{
    /* Class name for the body tag */
    position: relative;
}
.product_page{
    display: none;
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    overflow-x: scroll;
    background-color: rgb(255, 255, 255);
    background-color: rgba(159, 173, 179, 0.9);
    position: fixed;
}
.product_card{
    /* original width */
    width: 25%;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    position: relative;
    top: 15vh;
}
@media screen and (max-width: 875px) {
    .product_card{
        width: 35%;
    }
}
@media screen and (max-width: 680px) {
    .product_card {
        width: 45%;
    }
}
@media screen and (max-width: 530px) {
    .product_card {
        width: 55%;
    }
}
@media screen and (max-width: 420px) {
    .product_card {
        width: 70%;
    }
}

.img_class{
    /* width: 100%; */
    /* border-radius: 5px 5px 0 0; */
}
.product_info{
    padding: 10px;
    text-align: center;
}
.contact_row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.close_product_card{
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
    color: #E9E4E4;
}
#buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* justify-content: space-between; */
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
</style>
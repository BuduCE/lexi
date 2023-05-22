<script setup>
const { data: products } = await useFetch('/api/products'
    , {
        transform: (_products) => _products.data,
    })
console.log(products)
const { params } = useRoute();
console.log(params)

const product = products.value.find((product) => product.id === params.id );
console.log(product)
</script>

<template>
    <section class="product-pg-info">
        <div class="product-pg-img">
            <img src="homeBg2.jpg" alt="" class="big-pg-img" id="mainImg">

            <img src="@/store1.png" alt="">

            <div class="small-img-grp">
                <div class="small-img">
                    <img src="homeBg2.jpg" alt="" class="small-pg-img" @click="smallImga">
                </div>

                <div class="small-img">
                    <img src="homeBg2.jpg" alt="" class="small-pg-img" @click="smallImgb">
                </div>

                <div class="small-img">
                    <img src="homeBg1.jpg" alt="" class="small-pg-img" @click="smallImgc">
                </div>
            </div>
        </div>

        <div class="product-detail">
            <h4 class="pdt_name">{{product.name}}</h4>
            <small>Made with premium leather</small>

            <p class="pdt_price">{{ product.price }}</p>

            <p>Color: Black</p>

            <button class="cartbtn_">
                <small>Add to cart</small>
                <img src="@/assets/toCart.svg" class="carticon" alt="">
            </button>
        </div>
    </section>
</template>

<style scoped>
/* Produt page */
.product-pg-info {
    width: 75%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 30px auto;
}

.product-detail {
    padding-left: 40px;
}

.big-pg-img {
    width: 100%;
}

.small-img-grp {
    display: flex;
    justify-content: space-between;
}

.small-img {
    flex-basis: 30%;
}

.small-pg-img {
    width: 100%;
}

.product-detail select {
    display: block;
    padding: 5px 10px;
}

.product-detail input {
    padding: 5px 10px;
    /* padding-left: 10px; */
    font-size: 16px;
    margin-right: 10px;
}

@media screen and (max-width: 720px) {
    .product-pg-info {
        grid-template-columns: 1fr;
    }

    .product-detail {
        padding-left: 0;
    }
}
</style>
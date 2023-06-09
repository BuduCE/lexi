<script setup>
const { data: products } = await useFetch('/api/products'
    , {
        transform: (_products) => _products.data,
    })

const { params } = useRoute();

const product = products.value.find((product) => product.id === params.id );

// Add to cart
const addToCart = (cartProduct) => {
    const existingCart = JSON.parse(localStorage.getItem('shoppingcart') || "[]")
    const existingItemIndex = existingCart.findIndex(produc => produc.id === cartProduct.id);
    if (existingItemIndex !== -1) {
        existingCart[existingItemIndex].count++;
    } else {
        const newItem = { ...cartProduct, count: 1 };
        existingCart.push(newItem);
    }
    localStorage.setItem('shoppingcart', JSON.stringify(existingCart));
}

// Image switch

// const  images = [
//     { src: '/store1.svg' },
//     { src: '/store3.svg' },
//     { src: '/store2.svg' }
// ]

// const selectedImage = ref(images[0].src);

// const switchImage = (index) => {
//     selectedImage.value = images[index].src;
// }

const imageList = [
    {src: product.img},
    {src: product.imgT},
    {src: product.imgTh}
];

const selected = ref(imageList[0].src)

const switchImages = (index) => {
    selected.value = imageList[index].src;
    console.log(selected.value)
}
</script>

<template>
    <Header />

    <section class="product-pg-info">
        <div class="product-pg-img">
            <img :src="`${selected}.png`" alt="" class="big-pg-img" id="mainImg">

            <div class="small-img-grp">
                <div class="small-img" v-for="(image, index) in imageList" >
                    <img :src="`${image.src}.png`" alt="" class="small-pg-img" :key="index" @click="switchImages(index)">
                </div>
            </div>
        </div>

        <div class="product-detail">
            <h4 class="pdt_name">{{product.name}}</h4>
            <small class="pdt_desc">Made with premium leather Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, id! Ad, sunt provident omnis dolores ducimus saepe? Veniam commodi exercitationem voluptatem, unde labore molestiae magni maiores iste illum possimus distinctio!</small>

            <p class="pdt_price"><b>Price:</b> ₦ {{ product.price }}</p>

            <p><b>Color:</b> Black, Brown</p>

            <button class="cartbtn" @click="addToCart(p)">
                <p>Add to cart</p>
                <img src="@/assets/toCart.svg" class="carticon" alt="">
            </button>
        </div>
    </section>

    <Footer />
</template>

<style scoped>
/* Produt page */
.product-pg-info {
    width: 90%;
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
.cartbtn{
    padding: 0 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;
}
.carticon{
    width: 18px;
}
.pdt_name, .pdt_price, pdt_desc{
    padding-bottom: 10px;
}
</style>
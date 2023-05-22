<script>
// let storeProducts;

// const fetchProduct = () => {
//     fetch("storeImages.json")
//         .then(response => response.json())
//         .then(data => {
//             storeProducts = data
//         })
// }
// fetchProduct();

// Onclick for product Pop-Up
// const productPop = (id) => {
//     const product = storeProducts.find((item) => item.id === id);

//     document.querySelector(".product_page").innerHTML =
//         `
//         <div class="product_card">    
//             <div class="close_product_card" onclick="closeProductPop()">
//                     <h1>X</h1>
//             </div>

//             <img src='${product.img}' alt="" class="img_class">
    
//             <div class="product_info">
//                 <h4 class="pdt_name">${product.name}</h4>
//                 <p class="pdt_desc">${product.Desc}</p>
    
//                 <div class="contact_row">
//                     <small class="pdt_price">${product.price}</small>
//                     <button>Direct Order</button>
//                 </div>
//             </div>
//         </div>
//     `
//         ;

//     document.getElementById("productPage").style.display = "block";
// }

// const closeProductPop = () => {
//     document.getElementById("productPage").style.display = "none"
// }

// Fetching store products and info
// fetch("storeImages.json")
//     .then(response => response.json())
//     .then(data => {
//         let imageDisplay = document.querySelector(".items");
//         let pics = "";

//         for (let product of data) {
//             pics += `
//             <figure id="productOne" class='good ${product.class}'>
//                 <img src='${product.img}' alt="" class="img_class" onclick="productPop(${product.id})">

//                 <div class="product_info">
//                     <h4 class="pdt_name">${product.name}</h4>

//                     <!--p class="pdt_desc">${product.Desc}</p-->
                
//                     <small class="pdt_price">Price : ${product.price}</small>

//                     <button class="cartbtn">
//                         <small>Add to cart</small>
//                         <img src="./assets/toCart.svg" class="carticon" alt="">
//                     </button>
//                 </div>
//             </figure>
//         `;
//         }
//         imageDisplay.innerHTML = pics;
//     })
//     ;

// Filter
// const filterObjects = (filter = "good") => {
//     let images = document.querySelectorAll(".good");
//     for (let i = 0; i < images.length; i++) {
//         const classNames = images[i].className;
//         images[i].style.display = classNames.includes(filter) ? "grid" : "none";
//     }
// };

// filterObjects();

const { data } =
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

                <!-- <figure id="productOne" class="good mules">
                <img src="./assets/store/leximule design.png" alt="" class="img_class" onclick="productPop()">

                <div class="product_info">
                    <h4 class="pdt_name">Mule for men</h4>
                
                    <small class="pdt_price">₦15,000</small>

                    <button class="cartbtn">
                        <small>Add to cart</small>
                        <img src="./assets/toCart.svg" class="carticon" alt="">
                    </button>
                </div>
            </figure> -->
            </div>

            <!--Pop up upon onclick of any product card -->

            <section class="product_page" id="productPage">
            <!--    <div class="product_card">
                    <div class="close_product_card" onclick="closeProductPop()">
                        <h1>X</h1>
                    </div>
            
                    
                    <img src="./assets/store/leximule design.png" alt="" class="img_class">
            
                    
                    <div class="product_info">
                        <h4 class="pdt_name">Mule for men</h4>
                        <p class="pdt_desc">Grey: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            
                        <div class="contact_row">
                            <small class="pdt_price">₦15,000</small>
                            <button>Direct Order</button>
                        </div>
                    </div>
                </div>-->
            </section>
        </section>
    </section>

    <Footer />
</template>

<style>
/* Store page */
.store_section{
    padding-bottom: 25px;
}
.items{
    padding: 0px 80px;
    column-count: 3;
    column-gap: 20px;
}
.img_class{
    max-width: 100%;
    /* display: block; */
    border-radius: 15px 15px 0 0;
}
@media screen and (max-width: 768px) {
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
}
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
    box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    border-radius: 15px;
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
    width: 100%;
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
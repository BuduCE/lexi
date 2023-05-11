<script>
</script>

<template>
    <Header />

    <section>
        <h3>This is the product list page</h3>

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
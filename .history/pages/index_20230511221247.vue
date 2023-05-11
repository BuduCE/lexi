<script setup>
//Carousel
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
const slideArray = [
    {header: "Footwears", text: "This is about slides"},
    {header: "Shoes",text:"This is about shoes"},
    {header: "Wallets", text: "This is about wallets"},
]
</script>

<template>
    <div>
        <Header />

        <Carousel :autoplay="3000" :wrap-around="true" :mouseDrag="true">
            <Slide v-for="(slide, index) in slideArray" :key="index">
                <div class="carousel__item">
                    <!-- <h1>{{ slide.header }}</h1>
                    <p>{{ slide.text }}</p> -->
                    <div class="slide1 slide">
                        <div>
                            <h1 class="slide_title">{{ slide.header }}</h1>
                        </div>
                
                        <div class="slide_info">
                            <div class="slide_summary">
                                <h2>About the product:</h2>
                                <p>{{ slide.text }}</p>
                            </div>

                            <!-- <div class="slide_img">
                                <figure>
                                    <img src="./assets/lexishoe design.png" alt="" class="img1">
                                </figure>
                        
                                <figure>
                                    <img src="./assets/lexislide design.png" alt="" class="img2">
                                </figure>
                        
                                <figure>
                                    <img src="./assets/leximule design.png" alt="" class="img3">
                                </figure>

                                <figure>
                                    <img src="./assets/lexishoe1 design.png" alt="" class="img4">
                                </figure>
                        
                            </div> -->
                        </div>
                    </div>

                </div>
            </Slide>

            <template #addons>
                <Pagination />
                
                
            </template>
        </Carousel>
        
        <!-- <section class="slides slider-wrapper">
            <div class="slides-container">

                <div v-show="dis" class="slide1 slide">
                    <div>
                        <h1 class="slide_title">FOOTWEARS</h1>
                    </div>
                
                    <div class="slide_info">
                        <div class="slide_summary">
                            <h2>About the product:</h2>
                            <p>Sweaters are knitted from 100% wool yarn. All necessary processing of the product is carried out. Completely handmade
                            author's designs Love for customers</p>
                        </div>

                        <div class="slide_img">
                            <figure>
                                <img src="./assets/lexishoe design.png" alt="" class="img1">
                            </figure>
                        
                            <figure>
                                <img src="./assets/lexislide design.png" alt="" class="img2">
                            </figure>
                        
                            <figure>
                                <img src="./assets/leximule design.png" alt="" class="img3">
                            </figure>

                            <figure>
                                <img src="./assets/lexishoe1 design.png" alt="" class="img4">
                            </figure>
                        
                        </div>
                    </div>
                </div>

                <div v-show="dis" class="slide2 slide">
                    <h1 class="slide_title">BELTS</h1>
                
                    <div class="slide_info">
                        <div class="slide_summary">
                            <h2>About the product:</h2>
                            <p>Sweaters are knitted from 100% wool yarn. All necessary processing of the product is carried out. Completely
                                handmade
                                author's designs Love for customers</p>
                        </div>
                
                        <div class="slide_img">
        
                            <figure>
                                <img src="./assets/belts/lexibelt1.png" alt="" class="img2">
                            </figure>
                        
                            <figure>
                                <img src="./assets/belts/lexibelt2.png" alt="" class="img3">
                            </figure>

                            <figure>
                                <img src="./assets/store/store10.png" alt="" class="img2">
                            </figure>
                        
                            <figure>
                                <img src="./assets/belts/lexibelt1.png" alt="" class="img3">
                            </figure>
                        
                        </div>
                    </div>
                </div>


                <div v-show="dis" class="slide3 slide">
                    <h1 class="slide_title">WALLETS</h1>
                
                    <div class="slide_info">
                        <div class="slide_summary">
                            <h2>About the product:</h2>
                            <p>Sweaters are knitted from 100% wool yarn. All necessary processing of the product is carried out. Completely
                                handmade
                                author's designs Love for customers</p>
                        </div>
                
                        <div class="slide_img">
                            <figure>
                                <img src="./assets/wallets/lexiwallet1.png" alt="" class="img3">
                            </figure>
                        
                            <figure>
                                <img src="./assets/store/store10.png" alt="" class="img2">
                            </figure>
                        
                            <figure>
                                <img src="./assets/leximule design.png" alt="" class="img3">
                            </figure>

                            <figure>
                                <img src="./assets/belts/lexibelt1.png" alt="" class="img3">
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section> -->

        <section class="contact">
            <div class="contact_label">
                <p class="content">Contents:</p>
                <p>100% natural yarn</p>
            </div>
            <div class="bttn">
                <a href="store.html" class="catalog-btn">
                    <p>Catalog</p>
                    <img src="./assets/arrow.svg" alt="">
                </a>
            </div>
        </section>

        <Footer />
    </div>
</template>

<style>
/* SLide Section */
.slides{
    padding: 0 80px;
    overflow: hidden;
}
.slide_title{
    font-size: 3rem;
    text-align: center;
    letter-spacing: 0.33em;
}
.slide_info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}
.slide_summary{
    padding-right: 10px;
}
.slide_img{
    column-count: 2;
    column-gap: 10px;
}
.slide_img img{
    max-width: 100%;
    display: block;
}
figure{
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}
figure > img{
    grid-row: 1 / -1;
    grid-column: 1;
}
/* 943 */
@media screen and (max-width: 768px) {
    .slides{
        padding: 0 80px;
    }
    /* .slide_img {
        column-count: 2;
    } */
    .slide_info {
        display: flex;
        flex-direction: column-reverse;
        height: auto;
    }
    .slide_summary {
        width: 100%;
    }
}
@media screen and (max-width: 768px) {
    .slide_title {
        font-size: 2rem;
        letter-spacing: 0.2em;
        padding-bottom: 5px;
    }
}
@media screen and (max-width: 596px) {
    .slides{
        padding: 0 60px;
    }
    .slide_img {
        column-count: 2;
    }
}
@media screen and (max-width: 463px) {
    .slides{
        padding: 0 10px;
    }
}

/* Contact Us Pane */
.contact{
    padding: 10px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.contact_label{
    font-weight: bolder;
}
.catalog-btn{
    display: flex;
    align-items: center;
    background-color: #FEC2C2;
    border: none;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
}
.catalog-btn:hover{
    box-shadow: 11px -8px 0px -4px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 11px -8px 0px -4px rgba(0, 0, 0, 1);
    -moz-box-shadow: 11px -8px 0px -4px rgba(0, 0, 0, 1);
    transition: 1s;
}
.catalog-btn p{
    font-weight: bolder;
    padding-right: 3px;
}
@media screen and (max-width: 768px) {
    .contact{
        padding: 0 80px;
    }
}
@media screen and (max-width: 596px) {
    .contact{
        padding: 0 60px;
    }
}
@media screen and (max-width: 463px) {
    .contact{
        padding: 0 10px;
    }
}
</style>
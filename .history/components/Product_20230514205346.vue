<script>
    data(){
        return{
            mainImg: '',
            smallImg: ["@/assets/homeBg2.jpg", "@/assets/homeBg2.jpg", "@/assets/homeBg1.jpg"]
        }
    }

    changeMainImg(index){
        this.mainImg = this.mainImg[index];
    }
</script>

<template>
    <section class="product-pg-info">
        <div class="product-pg-img">
            <img v-show="mainImg" src="@/assets/homeBg2.jpg" alt="" class="big-pg-img" id="mainImg">

            <div class="small-img-grp">
                <div class="small-img">
                    <img src="@/assets/homeBg2.jpg" alt="" class="small-pg-img" @click="smallImga">
                </div>

                <div class="small-img">
                    <img src="@/assets/homeBg2.jpg" alt="" class="small-pg-img" @click="smallImgb">
                </div>

                <div class="small-img">
                    <img src="@/assets/homeBg1.jpg" alt="" class="small-pg-img" @click="smallImgc">
                </div>
            </div>
        </div>

        <div class="product-detail">
            <h4 class="pdt_name">Water proof Black boot</h4>
            <small>Made with premium leather</small>
        
            <p class="pdt_price">₦15,000</p>

            <p>Color: Black</p>

            <!-- <select >
                <option>Select size</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
            </select> -->
        
            <button class="cartbtn_">
                <small>Add to cart</small>
                <img src="./assets/toCart.svg" class="carticon" alt="">
            </button>
        </div>
    </section>
</template>

<style>
/* Produt page */
.product-pg-info{
    width: 75%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 30px auto;
}
.product-detail{
    padding-left: 40px;
}
.big-pg-img{
    width: 100%;
}
.small-img-grp{
    display: flex;
    justify-content: space-between;
}
.small-img{
    flex-basis: 30%;
}
.small-pg-img{
    width: 100%;
}
.product-detail select{
    display: block;
    padding: 5px 10px;
}
.product-detail input{
    padding: 5px 10px;
    /* padding-left: 10px; */
    font-size: 16px;
    margin-right: 10px;
}
@media screen and (max-width: 720px) {
    .product-pg-info{
        grid-template-columns: 1fr;
    }
    .product-detail{
        padding-left: 0;
    }
}
</style>
<template>
    <div class="checkout_info">
        <h2 class="page_title">CHECKOUT || Thank you for purchasing from us</h2>
        
        <hr class="first_hr">

        <div class="order_summary">
            <div class="order_pane_title">
                <h3>Order Summary</h3>
            </div>

            <div class="order_item">
                <div class="productNprice">
                    <p>Product 1 - name name name</p>
                    <p>₦45000</p>
                </div>

                <div class="productNprice">
                    <p>Product 1 - name name name</p>
                    <p>₦45000</p>
                </div>
            </div>

            <div class="total">
                <h4>Total</h4>
                <h4>₦50000.00</h4>
            </div>
        </div>
    </div>

    <form action="">
        <div class="account_info">
            <h3>Shipping Details</h3>

            
            <label for="">Shipping Details</label>
            <input type="text" placeholder="first">
            
            <input type="text" placeholder="Last">


            <input type="email" placeholder="email">
        </div>
        
        <div class="billing_info">
            <input type="text" placeholder="Address">
            <input type="text" placeholder="state/city">
            <input type="number" placeholder="phone">
        </div>

        <div class="payment">
            <h2>Payment Method Information</h2>

        </div>

        <hr>

        <div class="form_btn">
            <button>Submit</button>
            <button>Cancel</button>
        </div>

        <label for="">Payment Info</label>
        <p>Infomation to be passed to clients on how the transaction will go to favour both parties</p>


        <button>SUBMIT</button>
        <button>BACK TO CART</button>
    </form>
</template>

<style scoped>
.page_title{
    text-align: center;
}
.first_hr{
    width: 80%;
    margin: auto;
}
.order_summary{
    width: 45%;
    margin: auto;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
}
.order_pane_title{
    padding: 5px 10px;
    background: rgb(239, 102, 239);
    color: #fff;
    border-radius: 5px 5px 0 0;
}
.order_item{
    padding: 5px 10px;
}
.productNprice{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
}
.total{
    display: flex;
    justify-content: space-between;
    /* width: 70%; */
    padding: 5px 10px;
    padding-left: 40%;
}
.account_info{
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    width: 45%;
    margin: auto;
    padding: 5px 10px;

}
</style>
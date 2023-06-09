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
                    <h3>Product 1 - name name name</h3>
                    <h3>#45000</h3>
                </div>

                <div class="productNprice">
                    <h3>Product 1 - name name name</h3>
                    <h3>#45000</h3>
                </div>
            </div>
        </div>

        <div class="total">
            <h3>Total</h3>
            <h3>#50000.00</h3>
        </div>
    </div>

    <form action="">
        <div class="account_info">
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
}
.order_pane_title{
    padding: 5px 10px;
    bac
}
</style>
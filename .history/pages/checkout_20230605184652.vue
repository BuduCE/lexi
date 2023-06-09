<template>
    <div class="checkout_info">
        <h2 class="page_title">CHECKOUT</h2>
        
        <hr class="first_hr">

        <div class="order_summary">
            <div class="order_pane_title">
                <h3>Order Summary</h3>
            </div>

            <div class="order_item">
                <div class="productNprice">
                    <p>Product 1 - name name name</p>
                    <p>₦45,000</p>
                </div>

                <div class="productNprice">
                    <p>Product 1 - name name name</p>
                    <p>₦45,000</p>
                </div>
            </div>

            <div class="total">
                <h4>Total</h4>
                <h4>₦50,000.00</h4>
            </div>
        </div>
    </div>

    <form action="">
        <div class="account_info containers">
            <h3>Shipping Details</h3>
            
            <label for="">Email</label>
            <input type="email" placeholder="abc@gmail.com" class="data">
        </div>
        
        <div class="billing_info containers">
            <h3>Personal Data</h3>

            <label for="">First Name</label>
            <input type="text" placeholder="John" class="data">

            <label for="">Last Name</label>
            <input type="text" placeholder="Doe" class="data">

            <label for="">Address</label>
            <input type="text" placeholder="12A, Malviton Street, Off Alexander Rd." class="data">

            <label for="">State</label>
            <input type="text" placeholder="Lagos" class="data">

            <label for="">Phone No.</label>
            <input type="number" placeholder="+234 123 45 6789" class="data">
        </div>

        <div class="payment containers">
            <h3>Payment Method Options</h3>

            <label for="">Payment Info</label>
            <p>Infomation to be passed to clients on how the transaction will go to favour both parties</p>

            <div class="from_btn">
                <button>SUBMIT</button>
                <button>BACK TO CART</button>
            </div>
        </div>

        <!-- <div class="form_btn">
            <button>Submit</button>
            <button>Cancel</button>
        </div> -->
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
    margin-top: 10px;
    width: 45%;
    margin: auto;
    border-radius: 5px;
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
.containers{
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    width: 45%;
    margin: auto;
    padding: 10px 10px;
    display: grid;
    border-radius: 5px;
}
@media screen and (max-width: 786px) {
    .containers,.order_summary{
        width: 75%;
    }
}
.data{
    width: 50%;
    border: none;
    border-bottom: 1px solid rgb(239, 102, 239);
    padding: 3px 0;
    outline: none;
}
@media screen and (max-width: 550px) {
    .data{
        width: 80%;
    }   
}
@media screen and  {
    
}
</style>
<script setup>
const shoppingCart = ref([])
shoppingCart.value = JSON.parse(localStorage.getItem('shoppingcart') || "[]")


const totalPrice = computed(() => {
    let price = 0
    for (const product of shoppingCart.value) {
        price += product.price * product.count
    }
    return price
})

const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Form Auth
import emailjs from '@emailjs/browser';
const runtimeConfig = useRuntimeConfig();

const btnText = ref('Send');
const formEl = ref();
const name = ref('');
const email = ref('');
const message = ref('');
const address = ref('');
const phone = ref

const sendMail = async () => {
    if (!name.value || !email.value || !message.value) return;

    try {
        btnText.value = 'Sending...';
        const data = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        emailjs.send(runtimeConfig.public.serviceId, runtimeConfig.public.templateId, data as any, runtimeConfig.public.publicKey);
        btnText.value = 'Sent!';
        setTimeout(() => {
            btnText.value = 'Send';
            name.value = '';
            email.value = '';
            message.value = '';
        }, 2000);
    } catch (error) {
        btnText.value = 'Fail to send!';
        setTimeout(() => {
            btnText.value = 'Send';
        }, 2000);
    }
};
</script>

<template>
    <div class="checkout_info">
        <h2 class="page_title">CHECKOUT</h2>
        
        <hr class="first_hr">

        <div class="order_summary">
            <div class="order_pane_title">
                <h3>Order Summary</h3>
            </div>

            <div v-for="cartproduct in shoppingCart" :key="cartproduct.id" class="order_item">
                <div class="productNprice">
                    <p>{{ cartproduct.name }}</p>
                    <p>₦{{ formatAmount(cartproduct.price * cartproduct.count) }}</p>
                </div>
            </div>

            <div class="total">
                <h4>Total</h4>
                <h4>₦{{ formatAmount(totalPrice) }}</h4>
            </div>
        </div>
    </div>

    <form ref="formEl">
        <div class="account_info containers">
            <h3>Shipping Details</h3>
            
            <label for="">Email</label>
            <input type="email" placeholder="abc@gmail.com" class="data">
        </div>
        
        <div class="billing_info containers">
            <h3>Personal Data</h3>

            <label for="name">Name</label>
            <input v-model="name" id="name" name="name" type="text" placeholder="John" class="data">

            <!-- <label for="">Last Name</label>
            <input type="text" placeholder="Doe" class="data"> -->

            <label for="address">Address</label>
            <input v-model="address" id="address" name="address" type="text" placeholder="12A, Malviton Street, Off Alexander Rd." class="data">

            <!-- <label for="">State</label>
            <input type="text" placeholder="Lagos" class="data"> -->

            <label for="phone">Phone No.</label>
            <input v-model="phone" id="phone" name="phone" type="number" placeholder="+234 123 45 6789" class="data">
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
    margin: 20px auto;
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
@media screen and (max-width: 360px) {
    .containers,.order_summary{
        width: 90%;
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
@media screen and (max-width: 480px) {
    .data{
        width: 100%;
    }
}
</style>
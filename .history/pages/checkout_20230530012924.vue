<template>
    <div class="checkout_info">
        <h2>CHECKOUT</h2>
        <hr>
        <div class="checkout_product">
            <div class="productNprice">
                <h3>Product 1</h3>
                <h3>#45000</h3>
            </div>

            <p>Lorem ipsum dolor sit amet</p>
        </div>

        <hr>

        <div class="total">
            <h3>Total</h3>
            <h3>#50000</h3>
        </div>
    </div>

    <form action="">
        <label for="">Shipping Details</label>
        <input type="text" placeholder="first">
        <input type="text" placeholder="Last">
        <input type="text" placeholder="Address">
        <input type="text" placeholder="state/city">
        <input type="number" placeholder="phone">
        <input type="email" placeholder="email">

        <label for="">Payment Info</label>
        <p>Infomation to be passed to clients on how the transaction will go to favour both parties</p>


        <button>SUBMIT</button>
        <button>BACK TO CART</button>
    </form>
</template>
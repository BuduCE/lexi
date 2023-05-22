<template>
    <Header />

    <div class="cart_content">
        <h2 class="title">Your Cart</h2>

        <table>
            <tr class="tab tab_head">
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr class="tab tab_cont">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    </div>
</template>

<style>
.title{
    text-align: center;
}
.cart_content{
    padding-top: 30px;
    width: 90%;
    margin: auto;
}
.tab td{
    padding: 10px;
}
</style>
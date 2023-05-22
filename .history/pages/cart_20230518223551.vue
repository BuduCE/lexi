<template>
    <Header />

    <div class="cart_content">
        <h2 cart>Your Cart</h2>

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
.cart_content{
    width: 90%;
    margin: auto;
}
.tab th, td{
    padding: 10px;
}
</style>
<script>

</script>

<template>
    <Header />

    <div class="form_div">
        <h2>CONATCT US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil magnam alias quae, corporis deleniti ratione sint sequi repellat.</p>

        <form action="">
            <input type="text" placeholder="Your Name" class="text_input">

            <input type="text" placeholder="Your Mail" class="text_input">

            <input type="text" placeholder="Your Message" class="text_input">

            <button>SUBMIT <IconRightArrow /></button>
        </form>

    </div>

    <Footer />
</template>

<style>
.form_div{
    width: 60%;
    margin: 30px auto;
    border: 5px solid greenyellow;
    text-align: center;
    padding: 25px;
    color: #fff;
    background: rgba(128, 0, 128, 0.517);
}
form{
    display: flex;
    flex-direction: column;
}
.text_input{
    background: transparent;
    border: none;
    border-bottom: 1px solid greenyellow;
    margin: 15px 0;
}
</style>
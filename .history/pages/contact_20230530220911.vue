<script>
// import emailjs from '@emailjs/browser';

const sendEmail = () => {
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>

<template>
    <Header />

    <div class="form_div">
        <h2>CONTACT US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil magnam alias quae, corporis deleniti ratione sint sequi repellat.</p>

        <form ref="form" action="" @submit.prevent="sendEmail">
            <input type="text" name="user_name" placeholder="Your Name" class="text_input">

            <input type="email" name="user_email" placeholder="Your Mail" class="text_input">

            <input type="text" name="message" placeholder="Your Message" class="text_input">

            <button type="submit">SUBMIT <IconRightArrow /></button>
        </form>

    </div>
    

    <Footer />
</template>

<style scoped>
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
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
        <div class="contact_head">
            <h2>Contact Us</h2>
            <p>Feel free to drop us a line below!</p>
        </div>

        <form ref="form" action="" @submit.prevent="sendEmail">
            <div class="form_entity">
                <label for="">Full Name:</label>
                <input type="text" name="user_name" placeholder="Enter full name" class="text_input">
            </div>
            
            <div class="form_entity">
                
            </div>
            <label for="">Email:</label>
            <input type="email" name="user_email" placeholder="Enter email address" class="text_input">

            <label for="">Phone:</label>
            <input type="text" name="message" placeholder="Enter phone number" class="text_input">

            <label for="">Message:</label>
            <input type="text" name="message" placeholder="Your Comment..." class="text_input">

            <button type="submit">SUBMIT <IconRightArrow /></button>
        </form>

    </div>
    

    <Footer />
</template>

<style scoped>
.form_div{
    width: 60%;
    margin: 30px auto;
    color: #fff;
    background: rgba(128, 0, 128, 0.517);
    border-radius: 10px;
    /* padding: 20px; */
}
.contact_head{
    background-image: url(@/assets/contact-banner.jpg);
    background-repeat: no-repeat;
    background-size:inherit;
    padding: 20px;
    border-radius: 10px 10px 0 0;
    text-align: center;
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
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
                <label for="">Email:</label>
                <input type="email" name="user_email" placeholder="Enter email address" class="text_input">
            </div>
            
            <div class="form_entity">
                <label for="">Phone:</label>
                <input type="text" name="message" placeholder="Enter phone number" class="text_input">
            </div>
            
            <div class="form_entity">
                <label for="">Message:</label>
                <textarea type="text" name="message" placeholder="Your Comment..." class="text_input"></textarea>
            </div>
            

            <button type="submit" class="form_btn">
               Submit
               <IconsRightArrow />
            </button>
        </form>

    </div>
    

    <Footer />
</template>

<style scoped>
.form_div{
    width: 60%;
    margin: 30px auto;
    -webkit-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    -moz-box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    box-shadow: 0px 1px 18px 0px rgba(235,235,235,1);
    border-radius: 10px;
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
    width: 75%;
    margin: 40px auto;
    padding-bottom: 40px;
}
.form_entity{
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 10px 0;
}
.form_entity label{
    text-align: right;
    padding-right: 20px;
}
.text_input{
    background: transparent;
    border: none;
    border-bottom: 1px solid greenyellow;
    padding-bottom: 10px;
}
.form_btn{
    padding: 15px 10px;
    background: rgb(82, 120, 25);
    border: none;
    border-radius: 40px;
    color: #fff;
    display: flex;
    align-items: center;

    width: 25%;
    margin: auto;
}
</style>
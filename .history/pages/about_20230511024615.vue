<template>
    <Header />

    <main>
            <section class="about-us">
                <div class="about-us-title">
                    <div id="border-up"></div>
                    <h3>WHO WE ARE</h3>
                </div>

                <div class="about-us-txt">
                    <p>We're independently owned, strategic creative agency forever curious and ready to transform the way business is done</p>
                </div>
            </section>

            <section class="why-us">
                <div class="why-us-img">
                    <img src="./assets/Lexi_About_Wallpaper.png" alt="" class="lexi-abt-img">
                </div>

                <div class="why-us-txt">
                    <h3>OUR PEOPLE COMES FIRST</h3>

                    <p>Although we are a well-oiled machine, our people are far from cogs. The talent we cultivate gets importance of honing their respective crafts. It helps to better serve both each other and our patners, and it shows in everything - from what we design and produce, to what we value  and believe </p>
                </div>
            </section>
        
        </main>

    <Footer />
</template>

<style>
.about-us{
    padding: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.about-us-title{
    position: relative;
}
#border-up{
    padding-top: 5px;
    border-top: 3px solid orange;
    /* position: absolute;
    left: 50%; */
    width: 10%;
}
@media screen and (max-width: 520px) {
    .about-us{
        grid-template-columns: 1fr;
    }
}
main{
    position: relative;
}
.why-us{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    padding: 100px 0;
    background: rgb(207, 205, 205);
    /* position: relative; */
}
.lexi-abt-img{
    position: absolute;
    top: 180px;
    left: 200px;
}
@media screen and (max-width: 978px) {
    .lexi-abt-img {
        left: 120px;
    }
}
@media screen and (max-width: 820px) {
    .lexi-abt-img {
        left: 80px;
    }
}

.why-us-txt{
    width: 50%;
}
@media screen and (max-width: 645px) {
    .why-us {
        grid-template-columns: 1fr;
        padding: 30px 0;
    }
    .why-us-txt{
        width: auto;
        margin: auto;
        padding: 0 60px;
    }
    main{
        position: unset;
    }
    .why-us-img{
        padding: 0 60px;
    }
    .lexi-abt-img {
        position: unset;
        width: 50%;
        margin: auto;
    }
}
@media screen and (max-width: 463px) {
    .about-us{
        padding: 60px 5px;
    }
    .about-us-title{
        padding: 0 5px;
    }
    .about-us-text{
        padding: 0 5px;
    }
    .why-us{
        padding: 30px 5px;
    }
    .why-us-txt{
        padding: 0 5px;
    }
    .why-us-img {
        padding: 0 5px;
    }
}
</style>
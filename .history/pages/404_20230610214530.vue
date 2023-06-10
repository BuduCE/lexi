<template>
    <Header />

    <div class="not_available">
        <h1>404</h1>
        <h4>Page not found</h4>
        <p>The page you're looking for does not seem to exist</p>
        <NuxtLink to="/" class="home">Go to Home</NuxtLink>
    </div>
</template>

<style>
.not_available{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15%;
}
p{
    color: rgb(153, 151, 151);
}
.home{
    padding: 10px 15px;
    background: rgb(10, 225, 157);
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
    w
}
</style>
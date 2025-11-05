<!--This is for shopping cart code only-->
<script setup>
function showCheckout() {
    showProduct.value = showProduct.value ? false : true;
}
</script>
<template>
    <router-link to="/Lessons">Back to Lessons</router-link>
    <div>
        <h2>Shopping Cart</h2>
        <p>Your selected subjects will appear here.</p>
        <!-- You can add more functionality to display selected subjects -->
    </div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fontawesome/5.15.1/css/all.min.css">
    <!-- <i><span class ="fa-solid fa-cart-shopping"></span></i> -->
    <!--Need to add an icon on line-->
    <button v-on:click="showCheckout">
        {{ cartItemCount(subjects) }}
        <span class="fas fa-cart-plus"></span>
        Checkout
    </button>
    <div v-if="showProduct">
        <!--Code for product page-->
        <h1>Product Page</h1>
        <!-- <p>You have {{ cartItemCount(subjects) }} items in your cart.</p> -->
    </div>
    <div v-else-if="cartItemCount(subjects) == 0">
        <h1>Checkout Page</h1>
        <p>Your cart is empty.</p>
        <button @click="showProduct = true">Continue Shopping</button>
    </div>
    <div v-else>
        <!--Code for checkout page-->
        <h1>Checkout Page</h1>
        <p>You have {{ cartItemCount(subjects) }} items in your cart.</p> <!--Need to do what happens if have 0 items as well-->
        <button @click="showProduct = true">Continue Shopping</button>
        <h2>Checkout</h2>
        <p>Please proceed to payment.</p>
        <p>
            <strong>First Name:</strong> <input type="text" v-model="firstName">
        </p>

    </div>
</template>
<style scoped>
</style>
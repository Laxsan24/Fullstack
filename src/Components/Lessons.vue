<script setup>
//This is only for lessons.vue only
// import router from '@/router';
import { ref } from 'vue'

const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue

])
const cart = ref([]);

let sortBy = ref("");

const showProduct = ref(true);

function sortSubject() {
    sortBy.value = "subject";
}

function sortLocation() {
    sortBy.value = "location";
}

function sortPrice() {
    sortBy.value = "price";
}

function sortAvailability() {
    sortBy.value = "availability";
}

function ascendingOrder() {
    function compare(a, b) {
        switch (sortBy.value) {
            case "subject":
                if (a.subject > b.subject) return 1;
                if (b.subject > a.subject) return -1;
                return 0;
            case "location":
                if (a.location > b.location) return 1;
                if (b.location > a.location) return -1;
                return 0;
            case "price":
                if (a.Price > b.Price) return 1;
                if (b.Price > a.Price) return -1;
                return 0;
            case "availability":
                if (a.availableInventory > b.availableInventory) return 1;
                if (b.availableInventory > a.availableInventory) return -1;
                return 0;
        }
    }
    return subjects.value.sort(compare);
}


function descendingOrder() {
    subjects.value.sort((a, b) => {
        switch (sortBy.value) {
            case "subject":
                return b.subject.localeCompare(a.subject);
            case "location":
                return b.location.localeCompare(a.location);
            case "price":
                return b.Price - a.Price;
            case "availability":
                return b.availableInventory - a.availableInventory;
        }
    });
}


function addToCart(subject) {
    if (subject.availableInventory > 0) {
        cart.value.push(subject.id);
        subject.availableInventory--;
    }
}
function cartItemCount() {
    return cart.value.length;
}

function itemsLeft(subject) {
    return subject.availableInventory;
}

function showCheckout() {
    showProduct.value = !showProduct.value;
}
return {
    subjects,
    cart,
    showProduct,
    sortBy,
    sortSubject,
    sortLocation,
    sortPrice,
    sortAvailability,
    addToCart,
    cartItemCount,
    itemsLeft,
    showCheckout,
    ascendingOrder,
    descendingOrder,
    fetchLessons
};
async function fetchLessons() {
    try {
        const response = await fetch('http://localhost:3000/lessons');
        if (!response.ok) {
            throw new Error('Fail to fetch lessons: ${response.statusText}');
        }
        const data = await response.json();
        subjects.value = data;
    }
    catch (error) {
        console.error("Failed to fetch lessons:", error);
    }
}
fetchLessons();
</script>
<!-- Javascript (vue.js)-->


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fontawesome/5.15.1/css/all.min.css">
    <router-link to="/Shopping_cart">Go to Shopping Cart</router-link>
    <div>
        <button @click="showCheckout" :disabled="cartItemCount() == 0">
            {{ cartItemCount() }}
            <span class="fas fa-cart-plus"></span>
            Checkout
        </button>

        <div v-if="showProduct">
            <h1>Product Page</h1>

            <h4>Sort by</h4>
            <button @click="sortSubject">Subject</button><br>
            <button @click="sortLocation">Location</button><br>
            <button @click="sortPrice">Price</button><br>
            <button @click="sortAvailability">Availability</button><br>

            <h4>Order</h4>
            <button @click="ascendingOrder">Ascending order</button><br>
            <button @click="descendingOrder">Descending order</button><br>

            <h3>Books available:</h3>
            <ol>
                <li v-for="subject in subjects" :key="subject.id">
                    <p>Subject: {{ subject.subject }}</p>
                    <p>Location: {{ subject.location }}</p>
                    <p>Price: £{{ subject.Price }}</p>
                    <p>Items left: {{ itemsLeft(subject) }}</p>

                    <img v-bind:src="'images/' + subject.image" width="100" height="100" />

                    <p>Rating:
                        <span v-for="n in subject.rating">★</span>
                        <span v-for="n in 5 - subject.rating">☆</span>
                    </p>
                    <br>

                    <button @click="addToCart(subject)" :disabled="subject.availableInventory == 0">
                        Add to cart
                    </button>
                    <p v-if="subject.availableInventory == 0" style="color:red;"> Out of stock</p>
                </li>
            </ol>
        </div>
    </div>

</template>

<style scoped></style>
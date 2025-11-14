<script setup>
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
// import bootstrap from "bootstrap";
import { ref } from 'vue'
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue
    { id: 1, subject: 'Math', location: 'London', Price: 20, spaces: 10, image: 'Math image.jpg', rating: 5, availableInventory: 5 }, //Might need to include rating as well
    { id: 2, subject: 'Science', location: 'Oxford', Price: 5, spaces: 10, image: 'Science image.jpg', rating: 2, availableInventory: 5 },
    { id: 3, subject: 'English', location: 'Cambridge', Price: 10, spaces: 5, image: 'English image.jpg', rating: 3, availableInventory: 5 },
    { id: 4, subject: 'German', location: 'Canterbury', Price: 5, spaces: 5, image: 'German image.jpg', rating: 1, availableInventory: 5 },
    { id: 5, subject: 'French', location: 'Brighton', Price: 7, spaces: 5, image: 'French image.jpeg', rating: 3, availableInventory: 5 },
    { id: 6, subject: 'Spanish', location: 'Bath', Price: 7, spaces: 5, image: 'Spanish image.png', rating: 3, availableInventory: 5 },
    { id: 7, subject: 'Criminology', location: 'Windsor', Price: 7, spaces: 5, image: 'Criminology image.jpeg', rating: 2, availableInventory: 5 },
    { id: 8, subject: 'Computer Science', location: 'London', Price: 15, spaces: 5, image: 'Computer Science image.jpeg', rating: 5, availableInventory: 5 },
    { id: 9, subject: 'Business', location: 'Reading', Price: 10, spaces: 5, image: 'Business image.jpeg', rating: 4, availableInventory: 5 },
    { id: 10, subject: 'Economic', location: 'Luton', Price: 10, spaces: 5, image: 'Economic image.jpeg', rating: 4, availableInventory: 5 }
    //Involve key for v-for.
])
const cart = ref([])
const showProduct = ref(true);
const placeOrder = () => {
    alert(`Thank you for your order, ${order.value.firstName}!`);

    order.value = {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        gift: false,
        method: 'Home'
    };
    cart.value = [];

    showProduct.value = true;
};

const order = ref({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    gift: false,
    method: 'Home',
    // sendGift: 'Send a gift',
    // dontSendGift: "Don't send a gift",
});
const stateOptions = ref({
    E: 'East',
    EC: 'East Central',
    N: 'North',
    NC: 'North Central',
    NE: 'North East',
    NW: 'North West',
    S: 'South',
    SC: 'South Central',
    SE: 'South East',
    SW: 'South West',
    W: 'West',
    WC: 'West Central',
})
// For removing lessons from the cart and adding back to the lessons page need to be done and might have to return -1 and 1 like done below.

    function sortSubject() {
        function compare(a,b){
            if (a.subject < b.subject) return -1;
            if (a.subject > b.subject) return 1;
            return 0;
        }
            return subjects.value.sort(compare);
    }
    // return subjects.value.sort()
//Do descending and ascending order for location as well.
// Need to sort the ascending and descending code as it has to be subject, location, price, spaces available, rating and available inventory.
function sortLocation() {
     function compare(a,b) {
                    if (a.location < b.location) return -1;
                    if (a.location > b.location) return 1;
                    return 0;
                };
                return subjects.value.sort(compare);
        }

function sortPrice(){
    function compare(a,b){
        if(a.Price < b.Price) return -1;
        if(b.Price > a.Price) return 1;
        return 0; 
    }
    return subjects.value.sort(compare);
}
function sortAvailability(){
    function compare(a,b){
        if(a.availableInventory < b.availableInventory) return -1;
        if(b.availableInventory > a.availableInventory) return 1;
        return 0; 
    }
    return subjects.value.sort(compare);
}
//Need to fix Ascending and descending order
function ascendingOrder() {
    function compare(a, b){
        if (a.subject < b.subject) return -1;
        if (a.subject > b.subject) return 1;
        if (a.location < b.location) return -1;
        if (a.location > b.location) return 1;
        if(a.Price < b.Price) return -1;
        if(b.Price > a.Price) return 1;
        if (a.availableInventory < b.availableInventory) return -1;
        if(b.availableInventory > a.availableInventory) return 1;
        return 0;        
    }
    return subjects.value(compare);
}
// function ascendingOrder1() {
//     subjects.value.sort((a,b) => {
//         if(a < b) return -1;
//         if(b > a) return 1;
//         return 0; 
//     });
// }
function descendingOrder() {
    function compare(a,b){
        if (a.subject < b.subject) return -1;
        if (a.subject > b.subject) return 1;
        if (a.location < b.location) return -1;
        if (a.location > b.location) return 1;
        if(a.Price < b.Price) return -1;
        if(b.Price > a.Price) return 1;
        if (a.availableInventory < b.availableInventory) return -1;
        if(b.availableInventory > a.availableInventory) return 1;
        return 0;
    }
    return subjects.value(compare);

}
// function descendingOrder1() {
//     subjects.value.sort((a,b) => {
//         if(a < b) return -1;
//         if(b > a) return 1;
//         return 0; 
//     });
// }
// import {sub} from 'vue'
function addSubject() {
    cart.value.push(subjects.id);
    subjects.push.addToCart(); //Fix this
}

function cartItemCount(subjects) { //This is Cart Item count 
    // return this.cart.length ||"";
    return cart.value.length || "";
}
function canAddToCart(subject) {
    return subject.availableInventory > cart.value.cartItemCount();
}

function addToCart(subject) {
    if (subject.availableInventory > 0) {
        cart.value.push(subject.id);
        subject.availableInventory--;
    }
    else {
        alert("Out of stock!");
    }


}
function removeToCart(subject) {
    //Try using try and catch
    if (subject.availableInventory > 0) {
        cart.value.remove(subject.id);
        subject.availableInventory++;
    }
    else {
        alert("");
    }


}

function itemsLeft(subject) {
    return subject.availableInventory;
}


function showCheckout() {
    showProduct.value = showProduct.value ? false : true;
}
function isOrderValid() {
    return order.value.firstName &&
        order.value.lastName &&
        order.value.phone
}
</script>
<!-- Javascript (vue.js)-->


<template>

    <!-- <div id ="app"> -->
    <!-- </div> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fontawesome/5.15.1/css/all.min.css">


    <button v-on:click="showCheckout" :disabled="!cartItemCount(subjects)">
        {{ cartItemCount(subjects) }}
        <span class="fas fa-cart-plus"></span>
        Checkout
    </button>
    <div v-if="showProduct">
        <!--Code for product page-->
        <h1>Product Page</h1>
        <h1>Hi and Welcome to my book shop!!</h1>
        <div>
            <div>
                <!--Need to sort the lessons and need to sort the ascending and descending order and need buttons so it can be like that-->
                <!-- // Need to sort the ascending and descending code as it has to be subject, location, price, spaces available, rating and available inventory. -->
                <h4>Sort by</h4>
                <div v-for = "subject in sortLocation"></div>
                <button @click="sortSubject">Subject</button><br>
                <button @click="sortLocation">Location</button><br>
                <!-- <li>Price</li>  -->
                 <button @click ="sortPrice">Price</button><br>
                 <button @click ="sortAvailability">Availability</button><br>
                 <h4>Sorting in ascending or descending order</h4>
                <!-- // Need to sort the ascending and descending code as it has to be subject, location, price, spaces available, rating and available inventory. -->
                
                <!-- Need to fix Ascending and descending order -->
                <button @click="ascendingOrder" type = "radio">Ascending Order</button><br>
                <!-- <button @click="ascendingOrder1" type ="radio">Ascending Order1</button><br> -->
                <button @click="descendingOrder" type = "radio">Descending Order</button><br>
                <!-- <button @click="descendingOrder1" type ="radio">Descending Order1</button><br> -->
                --------------------------------------------------------------------------------------------------------------------------------
            </div>
            <h3>Books available:</h3>
            <ol>

                <li v-for="subject in subjects" :key="subject.id">
                    <p>Subject: {{ subject.subject }}</p>
                    <p>Location: {{ subject.location }}</p>
                    <p>Price: {{ subject.Price }}</p>
                    <p>Items left: {{ subject.spaces }}</p>
                    <p>Spaces left: {{ itemsLeft(subject) }}</p>

                    <p>Image: {{ subject.image }}</p>

                    <img :src="'images/' + subject.image" :alt="subject.subject + ' book image'" width="100"
                        height="100">
                    <br>

                    <p>Rating: {{ subject.rating }}</p>
                    <div>
                        <span v-for='n in subject.rating'>★</span>
                        <span v-for='n in 5 - subject.rating'>☆</span>
                        <p>Buy now!</p>
                    </div>
                    <div>
                        <button v-on:click='addToCart(subject)' v-if="subject.availableInventory"> Add to cart</button>

                        <div v-else>
                            <button disabled='disabled'>Add to cart</button>
                            <p>You have used all your items in the cart</p>
                        </div>
                        <p>Only {{ itemsLeft(subject) }} left</p>
                    </div>
                    <!--Need to make the button add to the cart and take away the amount of spaces left.-->
                </li>
            </ol>
        </div>
    </div>
    <!-- The lessons from the code below has to be in the file Lessons.vue -->
    <div v-else>
        <!--Code for checkout page-->
        <h1>Checkout Page</h1>
        <!--User need to remove lessons in the checkout page-->
        <!--The remove lessons need to be added back to the lessons page-->
        <div v-if="cartItemCount(subjects) == 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-else>
            <button @click="showProduct = true">Continue Shopping</button>
            <p>You have {{ cartItemCount(subjects) }} items in your cart.</p>
            <!--Not for loop-->
            <li v-for="subject in subjects" :key="subject.id">
                    <p>Subject: {{ subject.subject }}</p>
                    <p>Location: {{ subject.location }}</p>
                    <p>Price: {{ subject.Price }}</p>
                    <p>Items left: {{ subject.spaces }}</p>
                    <p>Spaces left: {{ subject.availableInventory }}</p>
                    

                    <p>Image: {{ subject.image }}</p>

                    <img :src="'images/' + subject.image" :alt="subject.subject + ' book image'" width="100"
                        height="100">
                    <br>

                    <p>Rating: {{ subject.rating }}</p>
                    <div>
                        <span v-for='n in subject.rating'>★</span>
                        <span v-for='n in 5 - subject.rating'>☆</span>
                        <!-- <p>Remove!</p> -->
                    </div>
                    <div>
                        <button v-on:click='removeToCart(subject)' v-if="subject.availableInventory"> Remove item</button>

                        <div v-else>
                            <!-- <button disabled='disabled'>Add to cart</button>
                            <p>You have used all your items in the cart</p> -->
                        </div>
                        
                    </div>
                    <!--Need to make the button add to the cart and take away the amount of spaces left.-->
                </li>
        </div>
        <!-- <button @click="showProduct = true">Continue Shopping</button> -->

        <div>
            <h2>Order Checkout:</h2>
            <h3>Please enter your details below:</h3>
            <p><strong>First Name: </strong><input v-model.trim="order.firstName" placeholder="First Name"><br></p>

            <p><strong>Last Name:</strong><input v-model.trim="order.lastName" placeholder="Last Name"><br></p>

            <p><strong>Phone:</strong><input v-model.number="order.phone" type="number" placeholder="Phone Number"><br>
            </p>

            <p><strong>Address:</strong><input v-model.trim="order.address" placeholder="Address"><br></p>

            <p><strong>City:</strong><input v-model.trim="order.city" placeholder="City"><br></p>

            <p><strong>State:</strong>
                <!-- 'class ="form-control"' is used for CSS styling -->
                <select v-model.trim="order.state" class="form-control">
                    <option disabled value="">Select State</option>
                    <option v-for="(state, key) in stateOptions" v-bind:value="state">{{ state }} ({{ key }})</option>
                </select><br>
            </p>
            <p><strong>Zip Code:</strong><input v-model.number="order.zip" type="number" placeholder="Zip Code"><br></p>
            <p><input type="checkbox" id="gift" value="true" v-model.trim="order.gift">
                <!-- v-bind:true-value = "order.sendGift"
            v-bind:false-value = "order.dontSendGift"> -->
                <label for="gift">Ship As Gift?</label>
            </p>
            <p><input type="radio" id="home" value="Home" v-model.trim="order.method">
                <label for="home">Home</label>
                <input type="radio" id="business" value="Business" v-model.trim="order.method">
                <label for="business">Business</label>
            </p>
            <!--v-on-click or @click-->

            <div>
                <h2>Order information</h2>
                <p><strong>First Name: </strong>{{ order.firstName }}</p>

                <p><strong>Last Name:</strong>{{ order.lastName }}</p>

                <p><strong>Phone:</strong>{{ order.phone }}</p>

                <p><strong>Address:</strong>{{ order.address }}</p>

                <p><strong>City:</strong>{{ order.city }}</p>

                <p><strong>State:</strong>{{ order.state }}</p>

                <p><strong>Zip Code:</strong>{{ order.zip }}</p>
                <p><strong>Gift:</strong>{{ order.gift ? 'Yes' : 'No' }}</p>
                <p><strong>Shipping Method:</strong>{{ order.method }}</p>
                <!--v-on-click or @click-->

                <p><button @click="placeOrder" :disabled="!isOrderValid()">Confirm Order</button></p>

            </div>
        </div>
    </div>

    <div>

    </div>
</template>
<!-- Used for html-->

<style scoped>
h1{
    color: aliceblue;
}
</style> <!-- Used for css need to do this-->
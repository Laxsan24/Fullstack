<!--This is for shopping cart code only-->
<script setup>
import { ref } from 'vue'
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue

])
const cart = ref([]);
const showProduct = ref(true);
const order = ref({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    gift: false,
    method: 'Home'
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
    WC: 'West Central'
});

function removeToCart(subject) {
    const index = cart.value.indexOf(subject.id);
    if (index !== -1) {
        cart.value.splice(index, 1);
        subject.availableInventory++;
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
function isNameValid(name) {
    let pattern = /^[A-Za-z]+$/;
    let result = pattern.test(name);

    if (result) {
        return true;
    } else {
        return false;
    }
}

function isPhoneValid(phone) {
    let phoneString = String(phone);

    let pattern = /^[0-9]+$/;
    let result = pattern.test(phoneString);

    if (result) {
        return true;
    } else {
        return false;
    }
}

function isOrderValid() {
    return (isNameValid(order.value.firstName) && isNameValid(order.value.lastName) && isPhoneValid(order.value.phone))
}

function placeOrder() {
    alert(`Thank you for your order, ${order.value.firstName} ${order.value.lastName}!`);
    cart.value = [];
    showProduct.value = true;
}
return {
    subjects,
    cart,
    showProduct,
    removeToCart,
    cartItemCount,
    itemsLeft,
    showCheckout,
    order,
    stateOptions,
    isNameValid,
    isPhoneValid,
    isOrderValid,
    placeOrder
};

</script>
<template>
    <router-link to="/Lessons">Back to Lessons</router-link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fontawesome/5.15.1/css/all.min.css">
    <div>
        <button @click="showCheckout" :disabled="cartItemCount() == 0">
            {{ cartItemCount() }}
            <span class="fas fa-cart-plus"></span>
            Checkout
        </button>
        <div>
            <h1>Checkout Page</h1>

            <button @click="showProduct = true">Continue Shopping</button>

            <p>You have {{ cartItemCount() }} items in your cart.</p>

            <h3>Your Cart:</h3>

            <ol>
                <li v-for="id in cart" :key="id">

                    <p>
                        Subject:
                        {{subjects.find(s => s.id === id).subject}}
                    </p>
                    <p>
                        Location:
                        {{ subjects.find(function (s) { return s.id === id }).location }}
                    </p>
                    <p>
                        Price:
                        £{{subjects.find(s => s.id === id).Price}}
                    </p>
                    <p>
                        Items left:
                        {{itemsLeft(subjects.find(s => s.id === id))}}
                    </p>

                    <img v-bind:src="'images/' + subjects.find(s => s.id === id).image" width="100" height="100" />

                    <br>
                    <button @click="removeToCart(subjects.find(s => s.id === id))">
                        Remove from cart
                    </button>
                </li>
            </ol>
            <div>
                <h3>Order Checkout:</h3>

                <p><strong>First Name:</strong>
                    <input v-model.trim="order.firstName" type="text" placeholder="First Name"><br>
                </p>
                <p><strong>Last Name:</strong>
                    <input v-model.trim="order.lastName" type="text" placeholder="Last Name"><br>
                </p>
                <p><strong>Phone:</strong>
                    <input v-model.number="order.phone" type="number" placeholder="Phone Number"><br>
                </p>
                <p><strong>Address:</strong>
                    <input v-model.trim="order.address" placeholder="Address"><br>
                </p>

                <p><strong>City:</strong>
                    <input v-model.trim="order.city" placeholder="City"><br>
                </p>

                <p><strong>State:</strong>
                    <!-- 'class ="form-control"' is used for CSS styling -->
                    <select v-model.trim="order.state" class="form-control">
                        <option disabled value="">Select State</option>
                        <option v-for="(state, key) in stateOptions" v-bind:value="state">{{ state }} ({{ key }})
                        </option>
                    </select><br>
                </p>
                <p><strong>Zip Code:</strong><input v-model.number="order.zip" type="number" placeholder="Zip Code"><br>
                </p>
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

                    <button @click="placeOrder" :disabled="!isOrderValid()">Confirm Order</button>
                </div>
            </div>
        </div>
        </div>
</template>
<style scoped></style>
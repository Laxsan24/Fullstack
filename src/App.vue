<script setup>
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
import { ref } from 'vue'
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue
    { id: 1, subject: 'Math', location: 'London', Price: 20, spaces: 10, image: 'Math image.jpg', rating: 5, availableInventory: 5 }, //Might need to include rating as well
    { id: 2, subject: 'Science', location: 'London', Price: 5, spaces: 10, image: 'Science image.jpg', rating: 2, availableInventory: 5 },
    { id: 3, subject: 'English', location: 'London', Price: 10, spaces: 5, image: 'English image.jpg', rating: 3, availableInventory: 5 },
    { id: 4, subject: 'German', location: 'London', Price: 5, spaces: 5, image: 'German image.jpg', rating: 1, availableInventory: 5 },
    { id: 5, subject: 'French', location: 'London', Price: 7, spaces: 5, image: 'French image.jpeg', rating: 3, availableInventory: 5 },
    { id: 6, subject: 'Spanish', location: 'London', Price: 7, spaces: 5, image: 'Spanish image.png', rating: 3, availableInventory: 5 },
    { id: 7, subject: 'Criminology', location: 'London', Price: 7, spaces: 5, image: 'Criminology image.jpeg', rating: 2, availableInventory: 5 },
    { id: 8, subject: 'Computer Science', location: 'London', Price: 15, spaces: 5, image: 'Computer Science image.jpeg', rating: 5, availableInventory: 5 },
    { id: 9, subject: 'Business', location: 'London', Price: 10, spaces: 5, image: 'Business image.jpeg', rating: 4, availableInventory: 5 },
    { id: 10, subject: 'Economic', location: 'London', Price: 10, spaces: 5, image: 'Economic image.jpeg', rating: 4, availableInventory: 5 }
    //Involve key for v-for.
])
const cart = ref([])
const showProduct = ref(true);
const placeOrder = () => {
    alert(`Thank you for your order, ${order.value.firstName}!`);
    // Reset the order form
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
    // Clear the cart
    cart.value = [];
    // Return to product view

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
    method: 'Home'
});

// function sortSubject() {

// }
// function sortLocation() {

// }
// function sortPrice() {

// }
// function sortSpacesAvailable() {

// }
// function ascendingOrder() {

// }
// function descendingOrder() {

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

    // this.cart.push(this.subjects.id);
    // this.cart.push(this.subjects.subject);

    // return this.subjects.availableInventory > this.cartItemCount;
    // addSubject("Item added to basket!") 
    //Fix this line above
}

function itemsLeft(subject) {
    return subject.availableInventory;  //Fix this, this is showing NaN
}
// function cartCount(){ //This is Cart Item count 
//     return this.cart.length ||"";
// }

//     computed: {
//         itemsLeft();{
//             return this.subject.spaces - this.cartItemCount
//         }
//     }
//     methods: {
//      canAddToCart(subjects) ;{
//          return subjects.spaces > this.cartItemCount(subjects.id);
//     }
// }

function showCheckout() {
    showProduct.value = showProduct.value ? false : true;
}

</script>
<!-- Javascript (vue.js)-->


<template>
    
    <!-- <div id ="app"> -->
    <!-- </div> -->
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
        <h1>Hi and Welcome to my book shop!!</h1>
        <!-- <p>You have {{ cartItemCount(subjects) }} items in your cart.</p> -->
         <div>
   <div>
        <!--Need to sort the lessons and need to sort the ascending and descending order and need buttons so it can be like that-->
        <h4>Sort by</h4>
        <!-- <li>Subject</li>  -->
        <button @click="sortSubject">Subject</button><br>
        <!-- <li>Location</li>  -->
        <button @click="sortLocation">Location</button><br>
        <!-- <li>Price</li>  -->
        <button @click="sortPrice">Price</button><br>
        <!-- <li>Spaces available</li>  -->
        <button @click="sortSpacesAvailable">Spaces Available</button>
        <br>
        <h4>Order</h4>
        <!-- <li>Ascending</li> -->
        <button @click="ascendingOrder">Ascending</button><br>
        <!-- <li>Descending</li> -->
        <button @click="descendingOrder">Descending</button><br>
        ---------------------------------
    </div>
        <h3>Books available:</h3>
        <ol>
            <!--Math book, Science book, English book, German book-->
            <li v-for="subject in subjects" :key="subject.id">
                <p>Subject: {{ subject.subject }}</p>
                <p>Location: {{ subject.location }}</p>
                <p>Price: {{ subject.Price }}</p>
                <p>Items left: {{ subject.spaces }}</p>
                <p>Spaces left: {{ itemsLeft(subject) }}</p>
                <!--Need sort out line 146(spaces are not showing)-->
                <p>Image: {{ subject.image }}</p>
                <!--Line 143 need to not have '.jpg'-->
                <img :src="'images/' + subject.image" :alt="subject.subject + ' book image'" width="100" height="100">
                <br>
                <!--Need to delete this line above ('.png' and '.jpeg')-->
                <p>Rating: {{ subject.rating }}</p>
                <div>
                    <span v-for='n in subject.rating'>★</span>
                    <span v-for='n in 5 - subject.rating'>☆</span>
                    <p>Buy now!</p>
                </div>
                <!-- <input type="button" value = "Add to cart" v-on:click="'addItem'">Adds the item to the cart<br> Adds this item to the cart -->
                <!--It's either subjects or subject-->
                <!-- <button v-on:click="addSubject">Add to cart123</button><br> Need to click add button which goes to the cart -->
                <!--I might not need line 166, I might need line 181-->
                <div>
                    <!--Need to use v-on-click not @-->
                    <!--Do canAddToCart function    (line below)-->

                    <!-- <button @click='addToCart(subject)' v-if="canAddToCart"> Add to cart</button>  -->
                    <!-- <button disabled='disabled' v-else> Add to cart </button> -->
                    <button v-on:click='addToCart(subject)' v-if="subject.availableInventory"> Add to cart</button>
                    <!-- <button v-on:click ="addToCart(subject)" v-if ="canAddToCart">Add to cart</button> -->
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
    <div v-else>
        <!--Code for checkout page-->
        <h1>Checkout Page</h1>
        <!-- <nav>
            <router-link to="/shopping-cart">Go to Shopping Cart</router-link>
            <router-link to="/lessons">Go to Lessons</router-link>
        </nav> -->
        <div v-if="cartItemCount(subjects) == 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-else>
            <p>You have {{ cartItemCount(subjects) }} items in your cart.</p>
        </div>
        <button @click="showProduct = true">Continue Shopping</button>
        <div>
            <h2>Order Summary:</h2>
            <strong>Order Details:</strong><br>
            <p><strong>First Name: </strong><input v-model ="order.firstName" placeholder="First Name"><br></p>
                <!-- <p><strong>First Name: {{ order.firstName }}</strong><input v-model ="order.firstName" placeholder="First Name"><br></p> -->
            <p><strong>Last Name:</strong><input v-model ="order.lastName" placeholder="Last Name"><br></p>
            <!-- <p><strong>Last Name:{{ order.lastName }}</strong><input v-model ="order.lastName" placeholder="Last Name"><br></p> -->
            <p><strong>Phone:</strong><input v-model ="order.phone" placeholder="Phone Number"><br></p>
            <!-- <p><strong>Phone:{{ order.phone }}</strong><input v-model ="order.phone" placeholder="Phone Number"><br></p> -->
            <p><strong>Address:</strong><input v-model ="order.address" placeholder="Address"><br></p>
            <!-- <p><strong>Address:{{ order.address }}</strong><input v-model ="order.address" placeholder="Address"><br></p> -->
            <p><strong>City:</strong><input v-model ="order.city" placeholder="City"><br></p>
            <!-- <p><strong>City:{{ order.city }}</strong><input v-model ="order.city" placeholder="City"><br></p> -->
            <p><strong>State:</strong> 
                <!-- <p><strong>State:{{ order.state }}</strong>  -->
                <select v-model="order.state">
                    <option disabled value="">Please select one</option>
                    <option>E</option>
                    <option>EC</option>
                    <option>N</option>
                    <option>NW</option>
                    <option>SE</option>
                    <option>SE</option>
                    <option>SW</option>
                    <option>W</option>
                    <option>WC</option>
                    <option>NE</option>
                    </select><br></p>
            <p><strong>Zip Code:</strong><input v-model ="order.zip" placeholder="Zip Code"><br></p>
            <p><input type="checkbox" id="gift" value="true" v-model="order.gift">
            <label for="gift">Ship As Gift?</label></p>
            <p><input type="radio" id="home" value="Home" v-model="order.method">
            <label for="home">Home</label>
            <input type="radio" id="business" value="Business" v-model="order.method">
            <label for="business">Business</label></p>
            <p><button @click="placeOrder">Place Order</button></p>
            <!--v-on-click or @click-->
        </div>
        <!-- <router-view></router-view> -->
    </div>
    <!-- <p id = "ordervalue">Hi and welcome to my book shop!!!</p>
<div id="app"></div>
<h7 v-for="subject" in "subjects"">Subject: Math</h7><br>
To structure this do interpalation. Shouldn't do it like this.
<img src="/images/Math image.jpg" alt="Math book image"><br>
<button>
<h4>Remove</h4>
</button> -->
    <!-- <h1>Hi and Welcome to my book shop!!</h1> -->

 
    <!-- <div>

        <h3>Books available:</h3>
        <ol> -->
            <!--Math book, Science book, English book, German book-->
            <!-- <li v-for="subject in subjects" :key="subject.id">
                <p>Subject: {{ subject.subject }}</p>
                <p>Location: {{ subject.location }}</p>
                <p>Price: {{ subject.Price }}</p>
                <p>Items left: {{ subject.spaces }}</p>
                <p>Spaces left: {{ itemsLeft(subject) }}</p> -->
                <!--Need sort out line 146(spaces are not showing)-->
                <!-- <p>Image: {{ subject.image }}</p> -->
                <!--Line 143 need to not have '.jpg'-->
                <!-- <img :src="'images/' + subject.image" :alt="subject.subject + ' book image'" width="100" height="100">
                <br> -->
                <!--Need to delete this line above ('.png' and '.jpeg')-->
                <!-- <p>Rating: {{ subject.rating }}</p>
                <div>
                    <span v-for='n in subject.rating'>★</span>
                    <span v-for='n in 5 - subject.rating'>☆</span>
                    <p>Buy now!</p>
                </div> -->
                <!-- <input type="button" value = "Add to cart" v-on:click="'addItem'">Adds the item to the cart<br> Adds this item to the cart -->
                <!--It's either subjects or subject-->
                <!-- <button v-on:click="addSubject">Add to cart123</button><br> Need to click add button which goes to the cart -->
                <!--I might not need line 166, I might need line 181-->
                <!-- <div> -->
                    <!--Need to use v-on-click not @-->
                    <!--Do canAddToCart function    (line below)-->

                    <!-- <button @click='addToCart(subject)' v-if="canAddToCart"> Add to cart</button>  -->
                    <!-- <button disabled='disabled' v-else> Add to cart </button> -->

                    <!-- <button v-on:click='addToCart(subject)' v-if="canAddToCart"> Add to cart</button> -->
                    <!-- <button v-on:click ="addToCart(subject)" v-if ="canAddToCart">Add to cart</button> -->
                    <!-- <button disabled='disabled' v-else>Add to cart</button> -->
                    <!-- <div v-else>
                        <button disabled='disabled'>Add to cart</button>
                        <p>You have used all your items in the cart</p>
                    </div>-->
                    <!-- <p>Only {{ itemsLeft(subject) }} left</p>
                </div> -->
                <!--Need to make the button add to the cart and take away the amount of spaces left.-->
            <!-- </li>
        </ol>
    </div> -->
    <div>

    </div>
    <!--Use 'v-if', 'v-else-if' and 'v-else' when the spaces are decreasing and when it's out of stock
it needs to say its out of stock
and 'v-onclick' when clicking the button it needs to show on the shopping basket. So
the shopping basket and when the button is clicked it needs to be linked. -->
    <!-- <div> -->
        <!-- <button @click ="addSubject"> Add to cart</button> -->

        <!-- <button v-on:click='addToCart'> Add to cart</button> -->

        <!-- v-if ='addToCart'. This code was in line 177 "'addToCart function'"-->


        <!-- <span v-if ="product.availableInventory - cartItemCount < 5"> Only {{ product.availableInventory - cartItemCount }}left!!</span> -->
        <!-- <span v-if = "itemsLeft.spaces - spaces < 5"> Only {{ itemsLeft.spaces - spaces }} left!</span> -->
        <!-- <span v-if='itemsLeft === 0'>All out!</span>
        <span v-else-if="itemsLeft < 5"> Only {{ itemsLeft }} left!</span> -->
        <!-- <span v-else-if= "itemsLeft >= 5"> Items available!</span> -->
        <!--line 184 and 183 need to do v-else or change line 184 to v-else-->
        <!-- <h2 v-if="subjects.subject">{{ subjects.subject }}</h2>
        <span v-if='subjects.spaces === cartItemCount(subjects.id)'> All finished!</span>
        <span v-else="subjects.spaces - cartItemCount(subjects.id) < 5">
            Only {{ subjects.availableInventory - cartItemCount(subjects.id) }} left! -->
            <!--Look through loop powerpoint-->
        <!-- </span> -->
        <!-- <span v-else>Buy now!</span> -->
        <!--Need to change product-->
    <!-- </div> -->

</template>
<!-- Used for html-->

<style scoped>
</style> <!-- Used for css need to do this-->
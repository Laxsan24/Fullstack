<script setup >
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
import {ref} from 'vue'

const fruits = ref(['Apple', 'Banana'])
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue
    {id:1, subject: 'Math', location: 'London', Price: 20, spaces: 10,image:'Math image.jpg', rating:5,availableInventory:5}, //Might need to include rating as well
    {id:2, subject: 'Science', location: 'London', Price: 5, spaces: 10,image:'Science image.jpg',rating:2,availableInventory:5},
    {id:3, subject: 'English', location: 'London', Price: 10, spaces: 5,image:'English image.jpg',rating:3, availableInventory:5},
    {id:4, subject: 'German', location: 'London', Price: 5, spaces: 5,image:'German image.jpg',rating:1,availableInventory:5},   
    {id:5, subject: 'French', location: 'London', Price: 7, spaces: 5,image:'French image.jpeg',rating:3,availableInventory:5}, 
    {id:6, subject: 'Spanish', location: 'London', Price: 7, spaces: 5,image:'Spanish image.png', rating:3,availableInventory:5},
    {id:7, subject: 'Criminology', location: 'London', Price: 7, spaces: 5,image:'Criminology image.jpeg',rating:2,availableInventory:5},  
    {id:8, subject: 'Computer Science', location: 'London', Price: 15, spaces: 5,image:'Computer Science image.jpeg', rating:5,availableInventory:5},
    {id:9, subject: 'Business', location: 'London', Price: 10, spaces: 5,image:'Business image.jpeg',rating:4,availableInventory:5},
    {id:10, subject: 'Economic', location: 'London', Price: 10, spaces: 5,image:'Economic image.jpeg',rating:4,availableInventory:5}  
     //Involve key for v-for.
])
const cart = ref([])
// const subjects1 = ref([
//     // {id:5, subject1: 'French', location1: 'London', Price1: 7, spaces1: 5,image1:'French image.jpeg'}
// ])
// const subjects2 = ref([
//     // {id:11, subject2: 'Spanish', location2: 'London', Price2: 7, spaces2: 5,image2:'Spanish image.png'}
// ])
// const subjects3 = ref([
//     {id:7, subject3: 'Criminology', location3: 'London', Price3: 7, spaces3: 5,image3:'Criminology image.jpeg'},
//     {id:8, subject3: 'Computer Science', location3: 'London', Price3: 15, spaces3: 5,image3:'Computer Science image.jpeg'},
//     {id:9, subject3: 'Business', location3: 'London', Price3: 10, spaces3: 5,image3:'Business image.jpeg'}, //Need to change it .jpeg same 
//     {id:10, subject3: 'Economic', location3: 'London', Price3: 10, spaces3: 5,image3:'Economic image.jpeg'} 
// ])
 function sortSubject(){
    
 }
 function sortLocation(){

 }
 function sortPrice(){

 }
 function sortSpacesAvailable(){

 }
 function ascendingOrder(){

 }
 function descendingOrder(){

 }

    function addFruit(){
        fruits.value.push('Cherry')
    }

// import {sub} from 'vue'
    function addSubject(){
        
        subjects.addToCart(); //Fix this
        // subjects1.addToCart();
        // subjects2.addToCart();
        // subjects3.addToCart();
    }
    function itemsLeft(){
        return this.subjects.spaces -this.subjects.availableInventory;  //Fix this
    }
    // function itemsLeft1(){
    //     return subjects1.spaces;
    // }
    // function itemsLeft2(){
    //     return subjects2.spaces;
    // }
    // function itemsLeft3(){
    //     return subjects3.spaces;
    // }
    function cartItemCount(){ //This is Cart Item count 
        return this.cart.length ||"";
    }
    function addToCart(){
        this.cart.push(this.subjects.id);
        return this.subjects.availableInventory > this.cartItemCount;
        // addSubject("Item added to basket!") 
        //Fix this line above
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


</script> 
<!-- Javascript (vue.js)-->
 

<template>
    <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/fontawesome/5.15.1/css/all.min.css">
    <!-- <i><span class ="fa-solid fa-cart-shopping"></span></i> -->
    <!--Need to add an icon on line-->
    <button>
        <span class="fas fa-cart-plus">checkout</span>
    </button>
<!-- <p id = "ordervalue">Hi and welcome to my book shop!!!</p>
    <div id="app"></div>
     <h7 v-for="subject" in "subjects"">Subject: Math</h7><br> 
    To structure this do interpalation. Shouldn't do it like this.
    <img src="/images/Math image.jpg" alt="Math book image"><br>
    <button>
    <h4>Remove</h4>
    </button> -->
    <h1>Hi and Welcome to my book shop!!</h1>

    <div>
        <ul>
            <li v-for = "fruit in fruits" :key="fruit.id"> {{ fruit }}
            </li>
        </ul>
        <button @click="addFruit">Add fruit</button>
    </div>

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
        ---------------------------------
        <h4>Order</h4>
            <!-- <li>Ascending</li> -->
             <button @click="ascendingOrder">Ascending</button><br>
            <!-- <li>Descending</li> -->
            <button @click="descendingOrder">Descending</button><br>
        ---------------------------------
    </div>
    <div>
    
        <h3>Books available:</h3>
        <ol>
            <!--Math book, Science book, English book, German book-->
            <li v-for ="subject in subjects" :key ="subject.id">
                <p>Subject: {{ subject.subject }}</p>
                <p>Location: {{ subject.location }}</p>
                <p>Price: {{ subject.Price }}</p>
                <p>Items left: {{subject.spaces }}</p>
                <p>Spaces left: {{itemsLeft(subjects.availableInventory) }}</p>
                <!--Need sort out line 146(spaces are not showing)-->
                <p>Image: {{ subject.image }}</p>
                <!--Line 143 need to not have '.jpg'-->
                <img :src="'images/' + subject.image" 
                    :alt="subject.subject + ' book image'" 
                    width="100" height="100"> <br>
                    <!--Need to delete this line above ('.png' and '.jpeg')-->
                <p>Rating: {{ subject.rating }}</p>
                <div>
                    <span v-for = 'n in subject.rating'>★</span>
                    <span v-for = 'n in 5 -subject.rating'>☆</span>
                </div>
                <!--It's either subjects or subject-->
                <button @click="addSubject">Add</button> <!--Need to click add button which goes to the cart-->
                <p>Buy now!</p>

                 <!--Need to make the button add to the cart and take away the amount of spaces left.-->
            </li>
        </ol>
    </div>
    
        <!--Use 'v-if', 'v-else-if' and 'v-else' when the spaces are decreasing and when it's out of stock
        it needs to say its out of stock
        and 'v-onclick' when clicking the button it needs to show on the shopping basket. So
        the shopping basket and when the button is clicked it needs to be linked. -->
    <div>  
        <!-- <button @click ="addSubject"> Add to cart</button> -->
        <button v-on:click='addToCart'> Add to cart</button>
        <!-- v-if ='addToCart'. This code was in line 176 "'addToCart function'"-->


        <!-- <span v-if ="product.availableInventory - cartItemCount < 5"> Only {{ product.availableInventory - cartItemCount }}left!!</span> -->
        <!-- <span v-if = "itemsLeft.spaces - spaces < 5"> Only {{ itemsLeft.spaces - spaces }} left!</span> -->
         <span v-if = 'itemsLeft === 0'>All out!</span>
         <span v-else-if= "itemsLeft < 5"> Only {{ itemsLeft }} left!</span>
         <!-- <span v-else-if= "itemsLeft >= 5"> Items available!</span> -->
         <!--line 183 and 182 need to do v-else or change line 183 to v-else-->

         <!-- <span v-else>Buy now!</span>
         <span v-for = "n in 5">☆</span> -->
         <!-- <span v-for = 'n in subjects.rating'>★</span><br>
         <span v-for = 'n in 5 -subjects.rating'>☆</span> -->
        <!-- <span v-if = "itemsLeft1 < 5"> Only {{ itemsLeft1 }} left!</span>
        <span v-if = "itemsLeft2 < 5"> Only {{ itemsLeft2 }} left!</span>
        <span v-if = "itemsLeft3 < 5"> Only {{ itemsLeft3 }} left!</span> -->
        

    </div>
    <div v-if='showProduct'>
     <div v-for = "subjects in subject">
        <!--Product info-->
        <h2 v-text="subjects.subject"></h2>
        <span v-if ='subjects.spaces === cartItemCount (subjects.id)' > All finished!</span>
        <span v-else-if = "subjects.spaces - cartItemCount(subjects.id) < 5">
            Only {{ subjects.availableInventory - cartItemCount(subjects.id) }} left!
            <!--Look through loop powerpoint-->
        </span>
        <span v-else>Buy now!</span>
        <!--Need to change product-->
        </div>
    </div>
</template>
<!-- Used for html-->

<style scoped>
</style> <!-- Used for css need to do this later on-->

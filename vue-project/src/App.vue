<script setup>
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
import {ref} from 'vue'
const fruits = ref(['Apple', 'Banana'])
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue
    {id:1, subject: 'Math', location: 'London', Price: 20, spaces: 10},
    {id:2, subject: 'Science', location: 'London', Price: 5, spaces: 10},
    {id:3, subject: 'English', location: 'London', Price: 10, spaces: 5},
    {id:4, subject: 'French', location: 'London', Price: 7, spaces: 5},
    {id:5, subject: 'Spanish', location: 'London', Price: 7, spaces: 5},
    {id:6, subject: 'German', location: 'London', Price: 5, spaces: 5},
    {id:7, subject: 'Crimonology', location: 'London', Price: 7, spaces: 5},
    {id:8, subject: 'Computer Science', location: 'London', Price: 15, spaces: 5},
    {id:9, subject: 'Business', location: 'London', Price: 10, spaces: 5},
    {id:10, subject: 'English', location: 'London', Price: 10, spaces: 5}          //Involve key for v-for.
])
//Use a array and object e.g. ref(['Apple'{Put the stuff in here}, 'Banana'])

    function addFruit(){
        fruits.value.push('Cherry')
    }

// import {sub} from 'vue'
    function addSubject(){
        
        subjects.addToCart();
    }
    function itemsLeft(){
        return subjects.spaces;
    }
    function addToCart(){
        addSubject("Item added to basket!")
    }
//     computed: {
//         itemsLeft();{
//             return this.subject.spaces - this.cartItemCount
//         }
//     }
//     methods: {
//      canAddToCart(subjects) ;{
//          return subjects.spaces > this.cartCount(subjects.id);
//     }

// }

</script> 
<!-- Javascript (vue.js)-->
 

<template>
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
        <h3>Books available:</h3>
        <ol>
            <li v-for ="subject in subjects" :key ="subject.id">
                <p>Subject: {{ subject.subject }}</p>
                <p>Location: {{ subject.location }}</p>
                <p>Price: {{ subject.Price }}</p>
                <p>Items left: {{subject.spaces }}</p>
                <p>Spaces left: {{itemsLeft(subject) }}</p>
                <button @click="addSubject">Add</button>
                 <!--Need to make the button add to the cart and take away the amount of spaces left.-->
            </li>
        </ol>
        
        <!--Use 'v-if', 'v-else-if' and 'v-else' when the spaces are decreasing and when it's out of stock
        it needs to say its out of stock
        and 'v-onclick' when clicking the button it needs to show on the shopping basket. So
        the shopping basket and when the button is clicked it needs to be linked. -->
    </div>
    <div>  
        <!-- <button @click ="addSubject"> Add to cart</button> -->
        <button v-on:click='addToCart' v-if ='canAddToCart'> Add to cart</button>
        <!-- <span v-if ="product.availableInventory - cartItemCount < 5"> Only {{ product.availableInventory - cartItemCount }}left!!</span> -->
        <span v-if = "itemsLeft < 5"> Only {{ itemsLeft }} left!</span>
        

    </div>
    <div v-if='showProduct'>
     <div v-for = "subjects in subject">
        <!--Product info-->
        <h2 v-text="subjects.subject"></h2>
        <span v-if ='subjects.spaces === cartCount (subjects.id)' > All finished!</span>
        <span v-else-if = "subject.spaces - cartCount(subjects.id) < 5">
            Only {{ subject.avilableInventory - cartCount(subjects.id) }} left!
            <!--Look through loop powerpoint-->
        </span>
        <span v-else>Buy now!</span>
        <!--Need to change product-->
        </div>
    </div>
</template>
<!-- Used for html-->

<style scoped>

</style> <!-- Used for css-->

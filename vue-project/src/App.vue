<script setup >
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
import {ref} from 'vue'

const fruits = ref(['Apple', 'Banana'])
const subjects = ref([
    //The lessons from the code below has to be in the file Lessons.vue
    {id:1, subject: 'Math', location: 'London', Price: 20, spaces: 10,image:'Math image'},
    {id:2, subject: 'Science', location: 'London', Price: 5, spaces: 10,image:'Science image'},
    {id:3, subject: 'English', location: 'London', Price: 10, spaces: 5,image:'English image'},
    {id:4, subject: 'German', location: 'London', Price: 5, spaces: 5,image:'German image'},       
     //Involve key for v-for.
])
const subjects1 = ref([
    {id:5, subject1: 'French', location1: 'London', Price1: 7, spaces1: 5,image1:'French image'}
])
const subjects2 = ref([
    {id:6, subject2: 'Spanish', location2: 'London', Price2: 7, spaces2: 5,image2:'Spanish image'}
])
const subjects3 = ref([
    {id:7, subject3: 'Criminology', location3: 'London', Price3: 7, spaces3: 5,image3:'Criminology image'},
    {id:8, subject3: 'Computer Science', location3: 'London', Price3: 15, spaces3: 5,image3:'Computer Science image'},
    {id:9, subject3: 'Business', location3: 'London', Price3: 10, spaces3: 5,image3:'Business image'},
    {id:10, subject3: 'Economic', location3: 'London', Price3: 10, spaces3: 5,image3:'Economic image'} 
])

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
        subjects1.addToCart();
        subjects2.addToCart();
        subjects3.addToCart();
    }
    function itemsLeft(){
        return subjects.spaces;  //Fix this
    }
    function itemsLeft1(){
        return subjects1.spaces;
    }
    function itemsLeft2(){
        return subjects2.spaces;
    }
    function itemsLeft3(){
        return subjects3.spaces;
    }
    function addToCart(){
        addSubject("Item added to basket!") //Fix this
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
                <p>Spaces left: {{itemsLeft(subject) }}</p>
                <p>Image: {{ subject.image }}</p>
                <img :src="'images/' + subject.image + '.jpg'" 
                    :alt="subject.subject + ' book image'" 
                    width="100" height="100"> <br>
                    <!--Need to delete this line above ('.png' and '.jpeg')-->
                <button @click="addSubject">Add</button> <!--Need to click add button which goes to the cart-->

                 <!--Need to make the button add to the cart and take away the amount of spaces left.-->
            </li>
        </ol>
    </div>
    <div>
        <ol>
            <!--French book-->
            <li v-for ="subject1 in subjects1" :key ="subject1.id">
                <p>Subject: {{ subject1.subject1 }}</p>
                <p>Location: {{ subject1.location1 }}</p>
                <p>Price: {{ subject1.Price1 }}</p>
                <p>Items left: {{subject1.spaces1 }}</p>
                <p>Spaces left: {{itemsLeft1(subject1) }}</p>
                <p>Image: {{ subject1.image1 }}</p>
                <img :src="'images/' + subject1.image1 + '.jpeg'" 
                    :alt="subject1.subject1 + ' book image'" 
                    width="100" height="100"> <br>
                <button @click="addSubject">Add</button>               
            </li>
        </ol> <!--Do spanish or economic(economic needed for 1st, 2nd and 3rd.)-->
    </div>
     <div>
        <ol>
            <!--Spanish book-->
            <li v-for ="subject2 in subjects2" :key ="subject2.id">
                <p>Subject: {{ subject2.subject2 }}</p>
                <p>Location: {{ subject2.location2 }}</p>
                <p>Price: {{ subject2.Price2 }}</p>
                <p>Items left: {{subject2.spaces2 }}</p>
                <p>Spaces left: {{itemsLeft2(subject2) }}</p>
                <p>Image: {{ subject2.image2 }}</p>
                <img :src="'images/' + subject2.image2 + '.png'" 
                    :alt="subject2.subject2 + ' book image'" 
                    width="100" height="100"> <br>
                <button @click="addSubject">Add</button>
            </li>
        </ol> <!--Do spanish or economic(economic needed for 1st, 2nd and 3rd.)-->
    </div>
         <div>
        <ol>
            <!--Spanish book-->
            <li v-for ="subject3 in subjects3" :key ="subject3.id">
                <p>Subject: {{ subject3.subject3 }}</p>
                <p>Location: {{ subject3.location3 }}</p>
                <p>Price: {{ subject3.Price3 }}</p>
                <p>Items left: {{subject3.spaces3 }}</p>
                <p>Spaces left: {{itemsLeft3(subject3) }}</p>
                <p>Image: {{ subject3.image3 }}</p>
                <img :src="'images/' + subject3.image3 + '.jpeg'" 
                    :alt="subject3.subject3 + ' book image'" 
                    width="100" height="100"> <br>
                <button @click="addSubject">Add</button>
            </li>
        </ol> <!--Do spanish or economic(economic needed for 1st, 2nd and 3rd.)-->
    </div>
   

    
        <!--Use 'v-if', 'v-else-if' and 'v-else' when the spaces are decreasing and when it's out of stock
        it needs to say its out of stock
        and 'v-onclick' when clicking the button it needs to show on the shopping basket. So
        the shopping basket and when the button is clicked it needs to be linked. -->
    <div>  
        <!-- <button @click ="addSubject"> Add to cart</button> -->
        <button v-on:click='addToCart' v-if ='canAddToCart'> Add to cart</button>
        <!-- <span v-if ="product.availableInventory - cartItemCount < 5"> Only {{ product.availableInventory - cartItemCount }}left!!</span> -->
        <span v-if = "itemsLeft < 5"> Only {{ itemsLeft }} left!</span>
        <span v-if = "itemsLeft1 < 5"> Only {{ itemsLeft1 }} left!</span>
        <span v-if = "itemsLeft2 < 5"> Only {{ itemsLeft2 }} left!</span>
        <span v-if = "itemsLeft3 < 5"> Only {{ itemsLeft3 }} left!</span>
        

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

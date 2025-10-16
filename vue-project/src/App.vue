<script setup>
// const ordervalue = document.getElementById('ordervalue');
// const app = document.getElementById('app');
import {ref} from 'vue'
const fruits = ref(['Apple', 'Banana'])

    function addFruit(){
        fruits.value.push('Cherry')
    }
</script> 
<!-- Javascript (vue.js)-->
 

<template>
<!-- <p id = "ordervalue">Hi and welcome to my book shop!!!</p>
    <div id="app"></div>
     <h7 v-for="subject" in "subjects"">Subject: Math</h7><br> 
    <h7>Location: London</h7> <br>
    <h7>Price: £10</h7><br>
    <h7>Spaces left: 5 spaces</h7><br>
    To structure this do interpalation. Shouldn't do it like this.
    <img src="/images/Math image.jpg" alt="Math book image"><br>
    <button>
    <h4>Remove</h4>
    </button> -->

    <div>
        <ul>
            <li v-for = "fruit in fruits"> {{ fruit }}
            </li>
        </ul>
        <button @click="addFruit">Add fruit</button>
    </div>

    <div>
        <h7 v-for ="Subject in Subjects"> {{ Subjects }} </h7>
        


    </div>
</template>
<!-- Used for html-->

<style scoped></style> <!-- Used for css-->

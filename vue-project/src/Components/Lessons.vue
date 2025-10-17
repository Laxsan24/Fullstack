<script setup>
import {ref} from 'vue'
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
</script>
<template>
    <div>
        <h3>Subjects:</h3>
        <ul>
            <li v-for ="subject in subjects" :key ="subject.id">
                <p>Subject: {{ subject.subject }}</p>
                <p>Location: {{ subject.location }}</p>
                <p>Price: {{ subject.Price }}</p>
                <p>Spaces left: {{itemsLeft(subject) }}</p>

            </li>
        </ul>
        <button @click ="addSubject"> Add to cart</button>
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

    <style scoped></style>
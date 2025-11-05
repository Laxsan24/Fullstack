import { createApp } from 'vue'
import App from './App.vue'
// import router from './Components/index.js';

const app = createApp(App);
// app.use(router);

//This code wouldn't work in script in the vue file.

app.mount('#app')
    // et webstore = new Vue({
    // el: '#app', // <=== Don't forget this comma
    // data: { // the 'data' option
// the key 'sitename' matches the value of 'v-text' earlier
//     sitename: 'Vue.js Book',
//         product:{
//             id:10101,
//             title:"Book",
//             description: "Science",
//             price: 200,
//             image: "images/Science image.jpg"

//         },
//         cart: [],
//         methods:{
//             addToCart: function(){
//                 this.cart.push(this.product.id);
//             }
//         }
// }
//     });
//     console.log("Hello");

//Use

//I need to know how to connect it to method data
//Data, method and different sections of vue instance
//Create new methods in vue js
//how to create functions or data in vue
//Look at vue instance (week 1c slides)

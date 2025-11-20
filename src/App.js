import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  setup() {
    // --- all your existing refs ---
    const subjects = ref([
      { id: 1, subject: 'Math', location: 'London', Price: 20, spaces: 10, image: 'Math image.jpg', rating: 5, availableInventory: 5 },
      { id: 2, subject: 'Science', location: 'Oxford', Price: 5, spaces: 10, image: 'Science image.jpg', rating: 2, availableInventory: 5 },
      { id: 3, subject: 'English', location: 'Cambridge', Price: 10, spaces: 5, image: 'English image.jpg', rating: 3, availableInventory: 5 },
      { id: 4, subject: 'German', location: 'Canterbury', Price: 5, spaces: 5, image: 'German image.jpg', rating: 1, availableInventory: 5 },
      { id: 5, subject: 'French', location: 'Brighton', Price: 7, spaces: 5, image: 'French image.jpeg', rating: 3, availableInventory: 5 },
      { id: 6, subject: 'Spanish', location: 'Bath', Price: 7, spaces: 5, image: 'Spanish image.png', rating: 3, availableInventory: 5 },
      { id: 7, subject: 'Criminology', location: 'Windsor', Price: 7, spaces: 5, image: 'Criminology image.jpeg', rating: 2, availableInventory: 5 },
      { id: 8, subject: 'Computer Science', location: 'London', Price: 15, spaces: 5, image: 'Computer Science image.jpeg', rating: 5, availableInventory: 5 },
      { id: 9, subject: 'Business', location: 'Reading', Price: 10, spaces: 5, image: 'Business image.jpeg', rating: 4, availableInventory: 5 },
      { id: 10, subject: 'Economic', location: 'Luton', Price: 10, spaces: 5, image: 'Economic image.jpeg', rating: 4, availableInventory: 5 }
    ]);

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

    // ---- Functions ----

    function sortSubject() {
      subjects.value.sort((a, b) => a.subject.localeCompare(b.subject));
    }

    function sortLocation() {
      subjects.value.sort((a, b) => a.location.localeCompare(b.location));
    }

    function sortPrice() {
      subjects.value.sort((a, b) => a.Price - b.Price);
    }

    function sortAvailability() {
      subjects.value.sort((a, b) => a.availableInventory - b.availableInventory);
    }

    function ascendingOrder(){
          function compare(a, b) {
            if (a.subject > b.subject) return 1;
            if (b.subject > a.subject) return -1;
            if (a.Price > b.Price) return 1;
            if (b.Price > a.Price) return -1;
            return 0;
          }
          return subjects.value.sort(compare);
    }
    

    function descendingOrder(){
        subjects.value.sort((a,b)=> b.subjects.compare(a.subjects))
    }


    function addToCart(subject) {
      if (subject.availableInventory > 0) {
        cart.value.push(subject.id);
        subject.availableInventory--;
      }
    }

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

    function isOrderValid() {
      return order.value.firstName && order.value.lastName && order.value.phone;
    }

    function placeOrder() {
      alert(`Thank you for your order, ${order.value.firstName}!`);
      cart.value = [];
      showProduct.value = true;
    }

    // console.log(cart.value)
        // for(let i = 0; i < cart.value.length; i++) {
        //   console.log(cart.value[i])
        //   // for(let a of subjects) {
        //   //   if(a.id === item.id) {
        //   //     console.log(item.subject)
        //   //   }
        //   // }
        // }

 
    return {
      subjects,
      cart,
      showProduct,
      sortSubject,
      sortLocation,
      sortPrice,
      sortAvailability,
      addToCart,
      removeToCart,
      cartItemCount,
      itemsLeft,
      showCheckout,
      order,
      stateOptions,
      isOrderValid,
      placeOrder,
      ascendingOrder,
      descendingOrder
    };
  },

  // --- TEMPLATE (converted from your App.vue) ---
  template: `
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

        <button @click="ascendingOrder">Ascending order</button><br>
        <button @click="descendingOrder">Descending order</button><br>

        <h3>Books available:</h3>
        <ol>
          <li v-for="subject in subjects" :key="subject.id">
            <p>Subject: {{ subject.subject }}</p>
            <p>Location: {{ subject.location }}</p>
            <p>Price: £{{ subject.Price }}</p>
            <p>Items left: {{ itemsLeft(subject) }}</p>

            <img :src="'images/' + subject.image" width="100" height="100" />

            <p>Rating:</p>
            <span v-for="n in subject.rating">★</span>
            <span v-for="n in 5 - subject.rating">☆</span>
            <br>

            <button @click="addToCart(subject)" :disabled="subject.availableInventory == 0">
              Add to cart
            </button>
          </li>
        </ol>
      </div>

      <div v-else>
        <h1>Checkout Page</h1>

        <button @click="showProduct = true">Continue Shopping</button>
        
        <p>You have {{ cartItemCount() }} items in your cart.</p>

        <h3>Your Cart:</h3>

        <ol>
          <li 
            v-for="id in cart" 
            :key="id"
          >
          
            <p>
              Subject: 
              {{ subjects.find(s => s.id === id).subject }}
            </p>
            <p>
              Location: 
              {{ subjects.find(function(s) { return s.id === id}).location }}
            </p>
            <p>
              Price: 
              £{{ subjects.find(s => s.id === id).Price }}
            </p>
            <p>
              Items left: 
              {{ itemsLeft(subjects.find(s => s.id === id)) }}
            </p>

            <img :src="'images/' + subjects.find(s => s.id === id).image" width="100" height="100" />

            <button 
              @click="removeToCart(subjects.find(s => s.id === id))"
            >
              Remove from cart
            </button>
          </li>
        </ol>
        <div>
          <h3>Order Checkout:</h3>

          <p><strong>First Name:</strong>
            <input v-model="order.firstName" />
          </p>
          <p><strong>Last Name:</strong>
            <input v-model="order.lastName" />
          </p>
          <p><strong>Phone:</strong>
            <input v-model="order.phone" />
          </p>

          <button @click="placeOrder" :disabled="!isOrderValid()">Confirm Order</button>
        </div>
      </div>
    </div>
  `
};

import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  setup() {
    // Subjects array to hold fetched lessons
    const subjects = ref([

    ]);
    // Cart array to hold added subjects
    const cart = ref([]);
    // Sorting criteria
    let sortBy = ref("");
    // Show product or checkout page
    const showProduct = ref(true);
    //Order form data
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
    // State options for dropdown
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

    // Sort Functions

    function sortSubject() {
      sortBy.value = "subject";
    }

    function sortLocation() {
      sortBy.value = "location";
    }

    function sortPrice() {
      sortBy.value = "price";
    }

    function sortAvailability() {
      sortBy.value = "availability";
    }
    // Ascending and Descending order functions
    function ascendingOrder() {
      function compare(a, b) {
        switch (sortBy.value) {
          case "subject":
            if (a.subject > b.subject) return 1;
            if (b.subject > a.subject) return -1;
            return 0;
          case "location":
            if (a.location > b.location) return 1;
            if (b.location > a.location) return -1;
            return 0;
          case "price":
            if (a.Price > b.Price) return 1;
            if (b.Price > a.Price) return -1;
            return 0;
          case "availability":
            if (a.availableInventory > b.availableInventory) return 1;
            if (b.availableInventory > a.availableInventory) return -1;
            return 0;
        }
      }
      return subjects.value.sort(compare);
    }

    function descendingOrder() {
      function compare(a, b) {
        switch (sortBy.value) {
          case "subject":
            if (a.subject < b.subject) return 1;
            if (b.subject < a.subject) return -1;
            return 0;
          case "location":
            if (a.location < b.location) return 1;
            if (b.location < a.location) return -1;
            return 0;
          case "price":
            if (a.Price < b.Price) return 1;
            if (b.Price < a.Price) return -1;
            return 0;
          case "availability":
            if (a.availableInventory < b.availableInventory) return 1;
            if (b.availableInventory < a.availableInventory) return -1;
            return 0;
        }
      }
      return subjects.value.sort(compare);
    }
    // Cart Functions
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
    // Checkout Functions
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
    // Place Order Function
    async function placeOrder() {
      const data = {
        cart: cart.value,
        order: order.value
      };
      // Send order to backend
      try {
        // POST order
        const response = await fetch('https://backend-hhxg.onrender.com/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        await response.json();

        // For each lesson in the cart – update availableInventory on backend
        for (let id of cart.value) {
          const lesson = subjects.value.find(s => s.id === id);
          if (lesson) {
            await updateLessonInventory(lesson.id, lesson.availableInventory);
          }
        }

        alert(`Thank you for your order, ${order.value.firstName} ${order.value.lastName}!`);
        // Clear cart and order form
        cart.value = [];
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
        showProduct.value = true;

        // Refresh updated inventory
        fetchLessons();

      } catch (error) {
        console.error("Order error:", error);
      }
    }
    // Fetch lessons from backend
    async function fetchLessons() {
      try {
        const response = await fetch('https://backend-hhxg.onrender.com/lessons');
        if (!response.ok) {

          console.log(`Fail to fetch lessons: ${response.statusText}`);
          throw new Error("Response not ok");

        }
        const data = await response.json();
        subjects.value = data.map(lesson => ({
          id: lesson._id?.toString(),
          subject: lesson.Subject,
          location: lesson.Location,
          Price: lesson.Price,
          image: `https://backend-hhxg.onrender.com${lesson.images}`,
          rating: lesson.Rating,
          availableInventory: lesson.availableInventory
        }));
      }
      catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchLessons();
    // Update lesson inventory on backend
    async function updateLessonInventory(id, newInventory) {
      try {
        await fetch(`https://backend-hhxg.onrender.com/lessons/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ availableInventory: newInventory })
        });
      } catch (error) {
        console.error("Failed to update lesson inventory:", error);
      }
    }


    // Return all reactive references and functions to the template
    return {
      subjects,
      cart,
      showProduct,
      sortBy,
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
      descendingOrder,
      updateLessonInventory

    };
  },

  // Template
  template: `
    <div>
      <button @click="showCheckout" :disabled="cartItemCount() == 0">
        {{ cartItemCount() }}
        <span class="fas fa-cart-plus"></span>
        Checkout
      </button>

      <div v-if="showProduct">
        <h1>Product Page</h1>
        <div class="layout">
      <div class="sidebar">
        <h3>Sort by</h3>
        <button @click="sortSubject">Subject</button><br>
        <button @click="sortLocation">Location</button><br>
        <button @click="sortPrice">Price</button><br>
        <button @click="sortAvailability">Availability</button><br>

        
        <h3>Order</h3>
        <button @click="ascendingOrder">Ascending order</button><br>
        <button @click="descendingOrder">Descending order</button><br>
      </div>
      <div class="products">
        <h3>Books available:</h3>
        <ol>
          <li v-for="subject in subjects" :key="subject.id">
            <p>Subject: {{ subject.subject }}</p>
            <p>Location: {{ subject.location }}</p>
            <p>Price: £{{ subject.Price }}</p>
            <p>Items left: {{ itemsLeft(subject) }}</p>

            <img :src="subject.image" width="100" height="100" />

            <p>Rating:
            <span v-for="n in subject.rating">★</span>
            <span v-for="n in Math.max(0, 5 - (subject.rating || 0))">☆</span>

            </p>
            <br>

            <button @click="addToCart(subject)" :disabled="subject.availableInventory == 0">
              Add to cart
            </button>
            <p v-if="subject.availableInventory ==0" style="color:red;"> Out of stock</p>
            
          </li>
        </ol>
      </div>
      </div>
      </div>

      <div v-else class="cart-info">
        <h1>Checkout Page</h1>

        <button @click="showProduct = true">Continue Shopping</button>
        
        <h3><p>You have {{ cartItemCount() }} items in your cart.</p></h3>

        <div class="cart-info"><h3>Your Cart:</h3>

        <ol>
          <li 
            v-for="id in cart" 
            :key="id"
          >
    <div v-if="subject = subjects.find(s => s.id === id)">

      <p>Subject: {{ subject.subject }}</p>
      <p>Location: {{ subject.location }}</p>
      <p>Price: £{{ subject.Price }}</p>
      <p>Items left: {{ itemsLeft(subject) }}</p>

      <img :src="subject.image" width="100" height="100" />

      <br>

      <button @click="removeToCart(subject)">
        Remove from cart
      </button>
      </div>

    </div>
          </li>
        </ol>
        <div class="checkout-form">
          <h2>Order Checkout</h2>

          <p><strong>First Name:</strong>
            <input v-model.trim="order.firstName" type="text" placeholder="First Name" @input="order.firstName = order.firstName.replace(/[^A-Za-z]/g, '')"><br>
          </p>
          <p><strong>Last Name:</strong>
            <input v-model.trim="order.lastName" type="text" placeholder="Last Name" @input="order.lastName = order.lastName.replace(/[^A-Za-z]/g, '')"><br>
          </p>
          <p><strong>Phone:</strong>
            <input v-model.trim="order.phone" type="text" placeholder="Phone Number" @input="order.phone = order.phone.replace(/[^0-9]/g, '')"><br>
          </p>
          <p><strong>Address:</strong>
            <input v-model.trim="order.address" type="text" placeholder="Address"><br></p>

            <p><strong>City:</strong>
              <input v-model.trim="order.city" type="text" placeholder="City" @input="order.city = order.city.replace(/[^A-Za-z]/g, '')"><br></p>

            <p><strong>State:</strong>
                <select v-model.trim="order.state" class="form-control">
                    <option disabled value="">Select State</option>
                    <option v-for="(state, key) in stateOptions" v-bind:value="state">{{ state }} ({{ key }})</option>
                </select><br>
            </p>
            <p><strong>Zip Code:</strong><input v-model.trim="order.zip" type="text" placeholder="Zip Code" @input="order.zip = order.zip.replace(/[^0-9]/g, '')"><br></p>
            <p><input type="checkbox" id="gift" value="true" v-model.trim="order.gift">
                <label for="gift">Ship As Gift?</label>
            </p>
            <p><input type="radio" id="home" value="Home" v-model.trim="order.method">
                <label for="home">Home</label>
                <input type="radio" id="business" value="Business" v-model.trim="order.method">
                <label for="business">Business</label>
            </p>

            <div class="checkout-form">
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

          <button @click="placeOrder" :disabled="!isOrderValid()">Confirm Order</button>
        </div>
      </div>
    </div>
  `
};
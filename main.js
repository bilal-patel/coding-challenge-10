// Task 2 - USE HTML to test

// get size dropdown and price display 
let size = document.getElementById("size");

let price = document.getElementById("price");

// handle size changes and update price
size.addEventListener("change", function() { let selectedSize = size.value;
let stock = { small: 100, medium: 110, large: 120}; // using stock object to store prices
// update price display
    price.textContent = "Price: $" + stock[selectedSize];});

    // TAsk 3- 

    // stock with an object
let stock = { small: { price: 100, inStock: true },

medium: { price: 110, inStock: true }, 

large: { price: 120, inStock: false } // large is out of stock
};

// get size dropdown + price display and purchase button
let button = document.getElementById("purchase");

// handle size changes - update price + availability
size.addEventListener("change", function() {
let selectedSize = size.value; let product = stock[selectedSize]; // get the selected product details

    // update price 
    price.textContent = "Price: $" + product.price;

    // disable button based on availability
    if (product.inStock) {
         button.disabled = false; 
    } else {
        button.disabled = true; // Disable button if not in stock
    }});
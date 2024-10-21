// Task 2 - USE HTML to test

// get size dropdown and price display 
let size = document.getElementById("size");
let price = document.getElementById("price");

// handle size changes and update price
size.addEventListener("change", function() { let selectedSize = size.value;
let stock = { small: 100, medium: 110, large: 120}; // using stock object to store prices
// update price display
    price.textContent = "Price: $" + stock[selectedSize];});
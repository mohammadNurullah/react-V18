// catch all the elements
const total = document.getElementById("total");
const Price = document.getElementById("Price");
const button = document.getElementById("button");

// set data or state
const productPrice = 5000;
let totalPrice = 0;

// set initial value
price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ ${totalPrice}`;

button.addEventListener("click", () => {
  totalPrice += productPrice; // totalPrice = totalPrice + productPrice

  // update UI
  total.innerText = `Toal: ৳ ${totalPrice}`;
});

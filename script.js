const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantityDisplay = document.querySelector(".quantity-value");
const cartBtn = document.querySelector(".cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
const emptyCartText = document.querySelector(".empty-cart");
const cartItem = document.querySelector(".cart-item");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartQty = document.querySelector(".cart-qty");
const cartTotal = document.querySelector(".cart-total");
const deleteBtn = document.querySelector(".delete-btn");

const PRICE = 125;
let cartQuantity = 0;
let quantity = 0;

plusBtn.addEventListener("click", () => {
  quantity++;
  updateQuantity();
});

minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
  }
  updateQuantity();
});

function updateQuantity() {
  quantityDisplay.textContent = quantity;
}

cartBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  cartDropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  cartDropdown.classList.add("hidden");
});

addToCartBtn.addEventListener("click", () => {
  if (quantity === 0) return;

  cartQuantity = quantity;

  cartQty.textContent = cartQuantity;
  cartTotal.textContent = (cartQuantity * PRICE).toFixed(2);
  cartCount.textContent = cartQuantity;

  emptyCartText.classList.add("hidden");
  cartItem.classList.remove("hidden");
  checkoutBtn.classList.remove("hidden");
});

deleteBtn.addEventListener("click", () => {
  cartQuantity = 0;
  cartCount.textContent = 0;

  cartItem.classList.add("hidden");
  checkoutBtn.classList.add("hidden");
  emptyCartText.classList.remove("hidden");
});

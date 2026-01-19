const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantityDisplay = document.querySelector(".quantity-value");
const cartBtn = document.querySelector(".cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");

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

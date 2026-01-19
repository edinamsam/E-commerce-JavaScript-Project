const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantityDisplay = document.querySelector(".quantity-value");

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

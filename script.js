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
const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumb");
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay");
const lightboxMain = document.querySelector(".lightbox-main");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const lightboxThumbs = document.querySelectorAll(".lightbox-thumbnails .thumb");

const PRICE = 125;
let cartQuantity = 0;
let quantity = 0;
let currentIndex = 1;

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

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const index = thumb.dataset.index;

    //Update main image
    mainImage.src = `images/image-product-${index}.jpg`;

    //Update active thumbnail
    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

mainImage.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
  lightboxMain.src = mainImage.src;
});

function closeLightbox() {
  lightbox.classList.add("hidden");
}

closeLightboxBtn.addEventListener("click", closeLightbox);
overlay.addEventListener("click", closeLightbox);

//keydowns are often added to the document element
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

function updateLightboxImage() {
  lightboxMain.src = `images/image-product-${currentIndex}.jpg`;

  lightboxThumbs.forEach((t) => t.classList.remove("active"));
  lightboxThumbs[currentIndex - 1].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 1 ? 4 : currentIndex - 1;
  updateLightboxImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 4 ? 1 : currentIndex + 1;
  updateLightboxImage();
});

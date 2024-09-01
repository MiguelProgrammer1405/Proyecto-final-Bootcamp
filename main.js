// select the elements
const btnContainer = document.querySelector(".btn-container");
const quantity = document.querySelector(".quantity");
const productPrice = document.querySelector(".product-price");
const subtotal = document.querySelector(".subtotal-text");

quantity.value = 0;
window.addEventListener("DOMContentLoaded", updateSubtotal);

btnContainer.addEventListener("click", (e) => {
  selectActiveBtn(e);
  setActiveTextinDOM(e);
});

function selectActiveBtn(e) {
  if (e.target.classList.contains("tab-btn")) {
    const tabBtns = btnContainer.querySelectorAll(".tab-btn");
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active-btn");
    });
    e.target.classList.add("active-btn");
  }
}

function setActiveTextinDOM(e) {
  if (e.target.classList.contains("tab-btn")) {
    const id = e.target.dataset.id;
    const textToShow = document.getElementById(id);
    const informativeTexts = document.querySelectorAll(".informative-text");
    informativeTexts.forEach((text) => {
      text.classList.remove("show-text");
    });
    textToShow.classList.add("show-text");
  }
}

quantity.addEventListener("click", updateSubtotal);
window.addEventListener("click", updateSubtotal);

function updateSubtotal() {
  const quantityOfProduct = quantity.value;
  const priceOfItem = parseFloat(productPrice.textContent);
  const totalPrice = parseFloat((quantityOfProduct * priceOfItem).toFixed(2));
  subtotal.textContent = totalPrice;
}

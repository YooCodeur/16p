document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});

const checkoutButton = document.getElementById("checkout-button");

checkoutButton.addEventListener('click', function() {
  window.location.href = 'https://buy.stripe.com/3csdUD4xIeJX7BKfYY';
});
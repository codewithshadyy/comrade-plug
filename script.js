

// Initializing the EmailJS
(function () {
  emailjs.init("mdklvjdn"); 
})();

function addToCart(productName) {
  // redirect to contact page with product info
  window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");

  if (product && document.getElementById("product")) {
    document.getElementById("product").value = product;
    document.getElementById("message").value = `I would like to buy: ${product}`;
  }

  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
          alert("Your order has been sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          alert("Something went wrong. Please try again.");
        });
    });
  }
};

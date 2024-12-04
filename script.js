"use strict";
const body = document.body;
const products = [
    { id: 1, name: 'Product 1', price: 20.00, image: 'https://live.staticflickr.com/65535/53413304649_475910cb42_b.jpg', description: "Happy Holidays frame photo with three snowmen, red flowers."},
    { id: 2, name: 'Product 2', price: 30.00, image: 'https://live.staticflickr.com/65535/53392691246_752b9ff7a4_b.jpg', description: "Santa photo frame with flag of Merry Christmas at the left side."},
    {id: 3, name: 'Product 3', price: 15.00, image: 'http://live.staticflickr.com/2497/4178189729_eed2be9d38_b.jpg', description: "A snowy scene with a cute snowman."},
    {id: 4, name: 'Product 4', price: 10.00, image: 'https://live.staticflickr.com/65535/52539074934_70dd89a48c_b.jpg', description: "Christmas tree with ornaments."}
  ];
  
  let cart = [];
const taxRate = 0.10; // 10% tax rate
const shippingFee = 5.00; // Shipping cost

// DOM elements
const cartItemsContainer = document.getElementById('cart-items');
const totalCostElement = document.getElementById('total-cost');
const taxElement = document.getElementById('tax');
const shippingElement = document.getElementById('shipping');
const totalWithTaxElement = document.getElementById('total-with-tax');
const checkoutButton = document.getElementById('checkout-btn');
const checkoutMessage = document.getElementById('checkout-message');

// Function to update the cart UI
function updateCart() {
  cartItemsContainer.innerHTML = ''; // Clear the cart display

  let totalCost = 0;
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemElement);
    totalCost += item.price;
  });

  // Update total cost
  totalCostElement.textContent = totalCost.toFixed(2);

  // Calculate tax and total with tax
  const tax = totalCost * taxRate;
  taxElement.textContent = tax.toFixed(2);

  // Calculate total with shipping and tax
  const totalWithTax = totalCost + tax + shippingFee;
  totalWithTaxElement.textContent = totalWithTax.toFixed(2);
}

// Function to handle the "Add to Cart" / "Remove from Cart" toggle
function toggleProductInCart(product, button) {
  const productIndex = cart.findIndex(item => item.id === product.id);

  if (productIndex === -1) {
    // Product is not in the cart, so add it
    cart.push(product);
    button.textContent = 'Remove from Cart'; // Change button text to "Remove from Cart"
  } else {
    // Product is in the cart, so remove it
    cart.splice(productIndex, 1);
    button.textContent = 'Add to Cart'; // Change button text to "Add to Cart"
  }

  // Update cart display
  updateCart();
}

// Handle product button click (Add/Remove from Cart)
document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', function () {
    const productId = parseInt(this.parentElement.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    toggleProductInCart(product, this); // Toggle product in the cart
  });
});

// Handle checkout
checkoutButton.addEventListener('click', function () {
  if (cart.length === 0) {
    checkoutMessage.textContent = 'Please add some items to your cart before checking out.';
  } else {
    // Calculate the total price
    const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = totalCost * taxRate;
    const totalWithTax = totalCost + tax + shippingFee;

    // Display thank you message
    checkoutMessage.textContent = `Thank you for your order! Your total was $${totalWithTax.toFixed(2)}.`;

    // Clear the cart
    cart = [];
    updateCart(); // Update the UI (reset the cart)

    // After checkout, reset all buttons to "Add to Cart"
    document.querySelectorAll('.product button').forEach(button => {
      button.textContent = 'Add to Cart'; // Reset button text
    });
  }
});


  // Game Section
 document.getElementById("submit-guess").addEventListener("click", function() {
        const userGuess = Number(document.getElementById("guess").value);
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const resultMessage = userGuess === randomNumber ? "You win!" : `Try again! The number was ${randomNumber}.`;
        document.getElementById("game-result").innerText = resultMessage;
    });

//form Section
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting to handle validation
  
    // Clear any previous error messages
    clearErrors();
  
    // Get form elements
    const fName = document.getElementById("fName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    
    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const contactMethodError = document.getElementById("contactMethodError");
    const messageError = document.getElementById("messageError");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    let valid = true;
    
    // Validate Full Name (Required)
    if (!fName.value.trim()) {
      valid = false;
      nameError.textContent = "Full name is required.";
    }
  
    // Validate Email (Required and regex check)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailRegex.test(email.value)) {
      valid = false;
      emailError.textContent = "Please enter a valid email address.";
    }
  
    // Validate Phone Number (Required and regex check)
    const phoneRegex = /^[0-9]{10}$/; // Adjust regex for phone number as needed
    if (!phone.value || !phoneRegex.test(phone.value)) {
      valid = false;
      phoneError.textContent = "Please enter a valid 10-digit phone number.";
    }
  
    // Validate Contact Method (Phone or Email)
    if (!contactMethod) {
      valid = false;
      contactMethodError.textContent = "Please select a contact method (Phone or Email).";
    }
  
    // Validate Message (Required)
    if (!message.value.trim()) {
      valid = false;
      messageError.textContent = "Please enter your message.";
    }
  
    // If form is valid, create customer object and show success message
    if (valid) {
      const customer = {
        fullName: fName.value.trim(),
        email: email.value,
        phone: phone.value,
        contactMethod: contactMethod.value,
        message: message.value.trim()
      };
  
      // Display success message
      thankYouMessage.innerHTML = `
        <h3>Thank you for your submission, ${customer.fullName}!</h3>
        <p>We will contact you via: ${customer.contactMethod}</p>
        <p>Your message: ${customer.message}</p>
      `;
  
      // Reset the form
      document.getElementById("contact-form").reset();
    }
  });
  
  // Function to clear previous error messages
  function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("contactMethodError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("thankYouMessage").innerHTML = "";
  }


document.getElementById('modeToggle').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const body = document.body;

    // Toggle the classes
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Optionally change the SVG icon or styles here
    const svgPath = document.getElementById('svgPath');
    if (body.classList.contains('dark-mode')) {
        svgPath.setAttribute('fill', '#2F88FF'); // Change SVG color for dark mode
    } else {
        svgPath.setAttribute('fill', '#ffef00'); // Change SVG color for light mode
    }
});

// Initialize the default mode
document.body.classList.add('light-mode'); // Set initial mode



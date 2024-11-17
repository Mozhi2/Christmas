"use strict";
const body = document.body;

//Product Section
document.addEventListener("DOMContentLoaded", function() {
    // Product data
    const productData = [
        { 
            name: "Product 1", 
            image: "https://live.staticflickr.com/65535/53413304649_475910cb42_b.jpg",
            description: "Happy Holidays frame photo with three snowmen, red flowers." 
        },
        { 
            name: "Product 2", 
            image: "https://live.staticflickr.com/65535/53392691246_752b9ff7a4_b.jpg", 
            description: "Santa photo frame with flag of Merry Christmas at the left side." 
        },
        { 
            name: "Product 3", 
            image: "http://live.staticflickr.com/2497/4178189729_eed2be9d38_b.jpg", 
            description: "A snowy scene with a cute snowman." 
        },
        { 
            name: "Product 4", 
            image: "https://live.staticflickr.com/65535/52539074934_70dd89a48c_b.jpg", 
            description: "Christmas tree with ornaments." 
        },
    ];

    // Cart array to hold added products
    let cart = [];

    // Create the product elements dynamically
    const productDisplay = document.getElementById("product-display");

    // Function to display all products
    function displayProducts() {
        productData.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                <p>${product.description}</p>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
            `;
            
            // Append product card to the product display section
            productDisplay.appendChild(productCard);
        });

        // Add event listeners to the "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function() {
                const productIndex = button.getAttribute("data-index");
                addToCart(productIndex); // Add product to cart
            });
        });
    }

    // Function to add product to the cart
    function addToCart(productIndex) {
        const product = productData[productIndex];
        cart.push(product); // Add the selected product to the cart

        updateCartDisplay(); // Update the cart UI
    }

    // Function to update the cart display
    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        cartItemsContainer.innerHTML = ''; // Clear the existing cart items

        cart.forEach(product => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <strong>${product.name}</strong>: ${product.description}
            `;
            cartItemsContainer.appendChild(listItem);
        });

        // Update the total number of items in the cart
        cartTotal.innerText = `Total Items: ${cart.length}`;
    }

    // Initial call to display all products
    displayProducts();
});

  // Game Section
 document.getElementById("submit-guess").addEventListener("click", function() {
        const userGuess = Number(document.getElementById("guess").value);
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const resultMessage = userGuess === randomNumber ? "You win!" : `Try again! The number was ${randomNumber}.`;
        document.getElementById("game-result").innerText = resultMessage;
    });

//form Section
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("full-name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("message").value;
    const contactMethod = document.getElementById("prefEmail").value;
    const contactMethod1 = document.getElementById("prefPhone").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let errors = [];
    if (!emailRegex.test(email)) {
        errors.push("Invalid email format.");
    }
    if (!phoneRegex.test(phone)) {
        errors.push("Phone number must be 10 digits.");
    }

    if (errors.length > 0) {
        document.getElementById("form-message").innerText = errors.join(", ");
        return;
    }

    const customerInfo = { name, phone, email, comments, contactMethod, contactMethod1};
        if(document.getElementById("form-message").innerText = contactMethod)
        {
        document.getElementById("form-message").innerText = `Thank you, ${customerInfo.name}! We will contact you via ${customerInfo.contactMethod}.`;
        this.reset();}
        else{
            document.getElementById("form-message").innerText = `Thank you, ${customerInfo.name}! We will contact you via ${customerInfo.contactMethod1}.`;
        this.reset();
        }
    
});


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



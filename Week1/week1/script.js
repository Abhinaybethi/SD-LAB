const products = [ 
    { id: 1, name: "Product 1", price: 10.99 }, 
    { id: 2, name: "Product 2", price: 19.99 }, 
       // Add more products as needed 
    ]; 
    // Cart to store added items 
    var cart = []; 
    // Function to display products in the catalog 
    function displayCatalog() { 
       const catalogSection = document.querySelector('.catalog'); 
    products.forEach(product => { 
           const productCard = document.createElement('div'); 
    productCard.classList.add('product-card'); 
    productCard.innerHTML = ` 
     <h3>${product.name}</h3> 
 <p>$${product.price}</p> 
 <button onclick="addToCart(${product.id})">Add to Cart</button> 
    `; 
 catalogSection.appendChild(productCard); 
    }); 
 } 
 // Function to add items to the cart 
 function addToCart(productId) { 
    const selectedProduct = products.find(product => product.id === productId); 
 cart.push(selectedProduct); // Add the selected product to the cart 
 updateCartDisplay(); 
 } 
 // Function to update the cart display 
 function updateCartDisplay() { 
    const cartItemsContainer = document.querySelector('.cart-items'); 
 cartItemsContainer.innerHTML = ''; // Clear the previous items in the cart 
    let totalAmount = 0; 
 cart.forEach(item => { 
        const cartItem = document.createElement('div'); 
 cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`; 
 cartItemsContainer.appendChild(cartItem); 
 totalAmount += item.price; 
    }); 
    const totalAmountDisplay = document.getElementById('totalAmount'); 
 totalAmountDisplay.textContent = totalAmount.toFixed(2); // Update the total amount in the cart 
 } 
// Function to handle the checkout process 
function checkout() { 
cart = []; // Clear the cart 
updateCartDisplay(); 
alert('Thank you for your purchase!'); 
} 
// Display the catalog when the page loads 
window.onload = displayCatalog;
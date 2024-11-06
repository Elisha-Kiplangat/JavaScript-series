// Array of product objects
const products = [
    { id: 1, name: "Apple", price: 1.00, description: "Fresh and juicy apples" },
    { id: 2, name: "Banana", price: 0.50, description: "Ripe bananas full of potassium" },
    { id: 3, name: "Orange", price: 0.75, description: "Sweet and tangy oranges" },
    { id: 4, name: "Grapes", price: 2.00, description: "Fresh green grapes" }
];

// Array to hold cart items
let cart = [];

// Function to display products using a loop
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
        
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
    }
}

// Function to display cart items using a loop
function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = ""; // Clear previous content

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Display products on page load
displayProducts();


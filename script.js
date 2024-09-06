const products = [
    { id: 1, name: "Lays", price: 4.99, image: "./lays.jpg" },
    { id: 2, name: "Cold Drink", price: 9.99, image: "./cold drink.jpg" },
    { id: 3, name: "Onions", price: 3.99, image: "./onion.jpg" },
    { id: 4, name: "Milk", price: 7.99, image: "./Milk.jpg" },
    { id: 5, name: "Potatoes", price: 10.99, image: "./Potato.jpg" },
    { id: 6, name: "Cauliflower", price: 9.99, image: "./vegetable.jpg" },
    { id: 7, name: "Kurkure", price: 5.99, image: "./Kurkure.jpg" },
    { id: 8, name: "Soap", price: 6.99, image: "./soap.jpg" }
  ];
  
  let cart = [];
  
  function displayProducts() {
    const productSection = document.getElementById('product-listings');
    productSection.innerHTML = ''; 
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">ADD</button>
      `;
      productSection.appendChild(productDiv);
    });
  }
  
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  
    const cartItemsSection = document.getElementById('cart-items');
    cartItemsSection.innerHTML = ''; 
  
    const cartTotal = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
  
    cart.forEach(product => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
      `;
      cartItemsSection.appendChild(cartItemDiv);
    });
  }
  
  function clearCart() {
    cart = [];
    updateCart();
  }
  
  window.onload = function() {
    displayProducts();
  }
  
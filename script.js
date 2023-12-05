const cartItems = [];
    let total = 0;

    function addToCart(productName, price) {
      cartItems.push({ name: productName, price: price });
      total += price;

      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart-items');
      const totalElement = document.getElementById('cart-total');

      // Clear the existing items
      cartList.innerHTML = '';

      // Populate the cart with the updated items
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
      });

      // Update the total amount
      totalElement.textContent = total.toFixed(2);
    }
  // Function to add items to the cart
  function addToCart(name, price) {
    const item = { name, price };

    // Add the item to the cart query parameter
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);
    params.append('cart', JSON.stringify(item));

    // Update the URL
    currentUrl.search = params.toString();
    window.history.pushState({}, '', currentUrl);

    // Update the cart display
    updateCartDisplay();
  }

  // Function to update the cart display
  function updateCartDisplay() {
    // Similar to the previous example, retrieve the cart data from the URL and update the display
  }

  // Update the cart display when the page loads
  updateCartDisplay();


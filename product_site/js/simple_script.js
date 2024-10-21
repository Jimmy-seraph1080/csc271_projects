// create an array call cart when it will be const
const cart = [];

// a function where it will take a name and price as its parameter
// object will be created to represent the
// item and price for a product. item will be pushed into the cart array
// after cart display will be updated
function add_to_cart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        // Increase quantity if item already exists
        existingItem.quantity += 1;
    }
    else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    // push object
    // update the cart display
    update_cart_display();
}


//a funtion called update_cart_display will update the visual contents of the cart
//
function update_cart_display() {
    // get the HTML element cart_display
    const cart_display = document.getElementById("cart_update");
    // here we need to check if cart value and type  are empty
    if (cart.length === 0) {
        // if so return Your cart is empty
        cart_display.innerHTML = "<h3>Your Cart</h3><p>Your cart is empty.</p>";
        return;
    }
    // create 2 variables called cart_HTML and total
    let cart_HTML = "<h3>Your Cart</h3><table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>";
    let total = 0;
    // we will the foreach method since it is short and non complex operation
    // loop through each item in the cart and append a new row to cart_HTML for each item's name and price
    // lastly it will add all the price together together to get the sum total.
    cart.forEach(item => {
        // quanitity
        const item_total = item.price * item.quantity;
        cart_HTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td><td>$${item_total.toFixed(2)}</td></tr>`;
        total += item_total;
    });

    // we need to add decimal placement that for total
    cart_HTML += `<tr><td colspan="3"><strong>Total</strong></td><td><strong>$${total.toFixed(2)}</strong></td></tr></table>`;
    cart_display.innerHTML = cart_HTML;
}

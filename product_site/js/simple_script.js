// a variable called logo_container that calls the first class Name with the class logo_container that is var
var logo_container = document.getElementsByClassName("logo_container")[0];
// change background color style to black
logo_container.style.backgroundColor = "#000";
// a var variable called header_adjustment will get the first h1 tag 
var header_adjustment = document.getElementsByTagName("h1")[0];
// change font style to 50px
header_adjustment.style.fontSize = "50px";

// a function with no parameter that calculates and returns the total number of items in the cart
function get_total_items() {
    // create a variable call total_items
    let total_items = 0;
    // we will use the foreach method since it is short and non complex operation and since we are also dealing an array
    // loop through each item in the cart to sum up the quantities
    cart.forEach(item => {
        total_items += item.quantity;
    });
    // Return the total count of items in the cart
    return total_items;
}

// create an array call cart when it will be var
var cart = [];

// a function where it will take a name and price as its parameter
// object will be created to represent the
// item and price for a product. item will be pushed into the cart array
// after cart display will be updated
function add_to_cart(name, price) {
    //using the find method to find the first element with that name
    var existingItem = cart.find(item => item.name === name);
    // if true
    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    }
    else {
        // push object
        cart.push({ name: name, price: price, quantity: 1 });
    }
    // update the cart display
    update_cart_display();
}


// a funtion with no parameter called update_cart_display will update the visual contents of the cart
// 
function update_cart_display() {
    //a variable that stores cart_display, subtotal, tax, and total
    // display items in cart
    var cart_display = document.getElementById("cart_items");
    // display subtotal
    var subtotal_display = document.getElementById("subtotal_display");
    // display tax
    var tax_display = document.getElementById("tax_display");
    // display total with tax
    var total_items_display = document.getElementById("total_items_display");

    // check if chart is empty
    if (cart.length === 0) {
        // if so return Your cart is empty
        cart_display.innerHTML = "<p>Your cart is empty.</p>";
        subtotal_display.textContent = "0.00";
        tax_display.textContent = "0.00";
        total_display.textContent = "0.00";
        return;
    }
    // create 2 variables called cart_HTML and subtotal
    let cart_HTML = "<table><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Total</th></tr>";
    let subtotal = 0;
    // we will use the foreach method since it is short and non complex operation and since we are also dealing an array
    // loop through each item in the cart and append a new row to cart_HTML for each item's name and price
    // lastly it will add all the price together together to get the sum total.
    cart.forEach(item => {
        // quanitity
        var item_total = item.price * item.quantity;
        cart_HTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td><td>$${item_total.toFixed(2)}</td></tr>`;
        subtotal += item_total;
    });
    cart_HTML += "</table>";
    // display the cart items
    cart_display.innerHTML = cart_HTML;

    // calculate the tax and final total
    var tax = subtotal * 0.07;
    var final_total = subtotal + tax;

    // display subtotal, tax, and final total in the table
    // use textContent to update the values dynamically
    subtotal_display.textContent = subtotal.toFixed(2);
    tax_display.textContent = tax.toFixed(2);
    total_display.textContent = final_total.toFixed(2);
    total_items_display.textContent = get_total_items();

    // updated HTML to display the cart
    cart_display.innerHTML = cart_HTML;
}

// call the function and store the result in a variable for logging
var total_item_count = get_total_items();
// output the count
console.log("Total number of items in the cart:", total_item_count);


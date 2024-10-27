// a variable called logo_container that calls the first class Name with the class logo_container that is const
const logo_container = document.getElementsByClassName("logo_container")[0];
// change background color style to black
logo_container.style.backgroundColor = "#000";
// a const variable called header_adjustment will get the first h1 tag 
const header_adjustment = document.getElementsByTagName("h1")[0];
// change font style to 50px
header_adjustment.style.fontSize = "50px";

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
    //a variable that stores cart_display, subtotal, tax, and total
    const cart_display = document.getElementById("cart_items"); // Display items in cart
    const subtotal_display = document.getElementById("subtotal_display"); // Display subtotal
    const tax_display = document.getElementById("tax_display"); // Display tax
    const total_display = document.getElementById("total_display"); // Display total with tax

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
    // we will the foreach method since it is short and non complex operation
    // loop through each item in the cart and append a new row to cart_HTML for each item's name and price
    // lastly it will add all the price together together to get the sum total.
    cart.forEach(item => {
        // quanitity
        const item_total = item.price * item.quantity;
        cart_HTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td><td>$${item_total.toFixed(2)}</td></tr>`;
        subtotal += item_total;
    });
    cart_HTML += "</table>";
    // display the cart items
    cart_display.innerHTML = cart_HTML;

    // calculate the tax and final total
    const tax = subtotal * 0.07;
    const final_total = subtotal + tax;

    // display subtotal, tax, and final total in the table
    // use textContent to update the values dynamically
    subtotal_display.textContent = subtotal.toFixed(2);
    tax_display.textContent = tax.toFixed(2);
    total_display.textContent = final_total.toFixed(2);

    // updated HTML to display the cart
    cart_display.innerHTML = cart_HTML;
}

const hamburger_icon = document.getElementById("hamburger_icon");
const menuListItems = document.querySelectorAll("#nav_bar li"); // Using querySelectorAll for menu items

// toggle the navigation menu on click
hamburger_icon.addEventListener("click", () => {
    const nav_menu = document.getElementById("nav_bar");
    nav_menu.classList.toggle("active");
});

// add hover effect to each li element in the menu
menuListItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#555";
    });
    //reset background color
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "";
    });
});



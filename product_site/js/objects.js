//a function that is creating an object using constructor notation for computer parts
// will take in name, image, description, original_price, discounted_price, rating as its parameter
function computer_part(name, image, description, original_price, discounted_price, rating) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.original_price = original_price;
    this.discounted_price = discounted_price;
    this.rating = rating;

    // Method to display the product as a table row
    this.display = function () {
        return `
            <tr>
                <td>${this.name}</td>
                <td><img src="${this.image}" alt="${this.name}" style="width:100px;"></td>
                <td>${this.description}</td>
                <td>$${this.original_price.toFixed(2)}</td>
                <td>$${this.discounted_price.toFixed(2)}</td>
                <td>${this.get_stars()}</td>
                <td><button onclick="add_to_cart('${this.name}', ${this.discounted_price})">Add to Cart</button></td>
            </tr>
        `;
    };
    // Method to generate number of star based on the rating value
    this.get_stars = function () {
        // Filled stars
        const filled_stars = "★".repeat(this.rating);
        // Empty stars
        const empty_stars = "☆".repeat(5 - (this.rating));
        return filled_stars + empty_stars;
    };
}

// Create two instances of computer_part
// first one would be nvidia gefore RTX 3080
var computer_part_1 = new computer_part(
    "NVIDIA GeForce RTX 3080",
    "images/rtx3080.webp",
    "Powerful GPU for gaming and content creation.",
    1200,
    360,
    5
);
// second one would be intel core i9 14900k
var computer_part_2 = new computer_part(
    "Intel Core i9-14900K",
    "images/i9.jpg",
    "Top-tier 14th Gen Intel processor for gaming and productivity.",
    499.99,
    439.99,
    4
);

// Dynamically add products to the table
// the DOMContentLoaded event tiggered when the HTML document is completely loaded and parsed
// this ensures that all elements in DOM are available for manipulation with js
// purpose is to populate the table
document.addEventListener("DOMContentLoaded", () => {
    // select an element
    var table_body = document.querySelector("table");
    // display the content for the first instance 
    table_body.innerHTML += computer_part_1.display();
    // display the content for the second instance
    table_body.innerHTML += computer_part_2.display();
});
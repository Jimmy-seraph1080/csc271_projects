// use hamburger_icon for getElementById ID
const hamburger_icon = document.getElementById("hamburger_icon");
// using querySelectorAll for menu items
const menu_list_items = document.querySelectorAll("#nav_bar li"); 

// toggle the navigation menu on click
// to do that we use an addEventListener
// an addEventListener method is a function that allows one to attach a handler to an element on a webpage
// the syntax for it element.addEventListener(eventType, function);
// element-> DOM element, eventType -> a string that specifies the type of event you want to listen for
// function -> the code you one wants to run when the event happens
// use an addEventListener with a parameter of click(eventType) and a function that toggles an 
// active class on the navigation menu (nav_menu)-> control visibility of the nav_menu
hamburger_icon.addEventListener("click", () => {
    const nav_menu = document.getElementById("nav_bar");
    nav_menu.classList.toggle("active");
});

// add hover effect to each li element in the menu
// using a forEach method to iterate through each items in menu List 
// the use of forEach simple non complex code and array or rather a nodelist

for (let i = 0; i < menu_list_items.length; i++){
    // add an addEventListener Method to hover over (mouseover) change background 
    const item = menu_list_items[i];
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#555";
    });
    // // add an addEventListener Method when mouse is leaves out of the items boundary (mouseout) reset background color
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "";
    });
}



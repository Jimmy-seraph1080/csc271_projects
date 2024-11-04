// an addEventListener method is a function that allows one to attach a handler to an element on a webpage
// the syntax for it element.addEventListener(eventType, function);
// element-> DOM element, eventType -> a string that specifies the type of event you want to listen for
// function -> the code you one wants to run when the event happens
// use an addEventListener with a parameter of DOMContentLoaded(eventType)
// this make all the DOM element accessible before js can run, hence avoiding errors if element are not accessible
document.addEventListener("DOMContentLoaded", function () {
    // an array with steps for the giveaway
    var giveaway_steps = [
        "Step 1: Follow us on social media (Instagram, Twitter, Facebook).",
        "Step 2: Share the giveaway post with the hashtag #CardTechGiveaway.",
        "Step 3: Tag three friends in the comments of the giveaway post.",
        "Step 4: Fill out the entry form on our website to complete your entry.",
        "Step 5: Keep an eye on our social media for the winner announcement!"
    ];
    //a variable keep track of the current index  of an array
    var current_step_index = 0;
    // 3 variavle that represent element in the index.html webpage
    const steps_container = document.querySelector("giveaway_steps_display");
    const next_step_button = document.querySelector("#next_step_btn");
    const show_all_steps_button = document.querySelector("#show_all_steps_btn");
    //console.log(show_all_steps_button);
    // using an addEventListener method for "Show All Steps" button to display all steps using a for loop
    show_all_steps_button.addEventListener("click", function () {
        //console.log(show_all_steps_button);
        // clear any previous content
        steps_container.innerHTML = ""; 
        // iterating from 0 to the 4 = giveaway_steps.length and i+1 for counter
        for (let i = 0; i < giveaway_steps.length; i++) {
            // we creating an <p> using  document.createElement("p") for each step
            // https://www.geeksforgeeks.org/html-dom-createelement-method/#
            var step_item = document.createElement("p");
            step_item.textContent = giveaway_steps[i];
            //append(same concept as python) appends a node or rather an element as the last child
            //https://www.w3schools.com/jsref/met_node_appendchild.asp#gsc.tab=0
            steps_container.appendChild(step_item);
        }
         // hide "Next Step" button after showing all
        next_step_button.style.display = "none";
    });
    // same proccess as the before however using conditional the next step ( one at a time)
    next_step_button.addEventListener("click", function () {
        // if current step index is less than the length of giveaway =_steps
        if (current_step_index < giveaway_steps.length) {
            //  we creating an <p> using  document.createElement("p") for each step
            var step = document.createElement("p");
            // add content from the element of  giveaway_steps[current_step_index] to the step_item
            step.textContent = giveaway_steps[current_step_index];
            // append the text to end the of p
            steps_container.appendChild(step);
            // + 1 to current_step_index
            current_step_index++;
            // if they are both equal then hide the button
            if (current_step_index === giveaway_steps.length) {
                // Hide button after the last step
                next_step_button.style.display = "none";
            }
        }
    });

    // goal of entries to unlock giveaway
    var entry_goal = 10; 
    // initial count of entries
    let current_entries = 0;
    var countdown_container = document.querySelector("#giveaway_countdown");
    // clear previous content
    function update_countdown() {
        countdown_container.innerHTML = "";
        let entries_needed = entry_goal - current_entries;
        
        // This message will update based on entries needed
        // so while entries_needed  is greater than 0 
        while (entries_needed > 0) {
            // we creating an <p> using  document.createElement("p") 
            var message = document.createElement("p");
            // add textContent show how many entries are needed
            message.textContent = `Entries Needed: ${entries_needed}`;
            message.className = "countdown message";
            // append message to countdown_container
            countdown_container.appendChild(message);
            // Decrease entries needed for display
            entries_needed--;
        }

        // final message if the entry goal is equal or greater than entry goal
        if (current_entries >= entry_goal) {
            countdown_container.innerHTML = "<p>Thank you for participating!</p>";
        }
    }

    // addEventListener to simulate adding entries
    // basically this code listen to a click on add entry button
    // we put x in the function's parameter.
    // x would prevent the page from reseting using the preventDefault method
    // https://www.w3schools.com/jsref/event_preventdefault.asp
    document.querySelector("#add_entry_button").addEventListener("click", function(x) {
        x.preventDefault();
        // if current entries is less than entries goal then 
        if (current_entries < entry_goal) {
            // increase the current entries count
            current_entries++;
            // Update countdown
            update_countdown();
            // Notify user that entry was added
            alert("Entry added!");
        }
        else {
            // Notify user that entry was added
            alert("The giveaway has already been unlocked!");
        }
    });

    // call the function and display countdown
    update_countdown();
    
});

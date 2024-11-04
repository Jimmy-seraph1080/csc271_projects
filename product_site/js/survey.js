//function to update the satisfaction question based on survey responses
function update_question() {
    // create 3 variable that would store the value of user_type, category, and satisfaction_label
    var user_type = document.getElementById("user_type").value;
    var category = document.getElementById("category").value;
    var satisfaction_label = document.getElementById("satisfaction_label");

    //evaluate three conditions resulting in Booleans
    var is_customer = user_type === "customer";
    var is_TCG = category === "TCG Cards";
    var is_components = category === "Computer Components";

    //use an if else if else structure with a logical operator
    if (is_customer && is_TCG){
        // condition 1 - user is a customer and interested in TCG Cards
        satisfaction_label.textContent = "3. How satisfied are you with our TCG card selection?";
    }
    else if (is_customer && is_components) {
        //condition 2 - user is a customer and interested in Computer Components
        satisfaction_label.textContent = "3. How satisfied are you with our computer component selection?";
    }
    else if (!is_customer || (is_customer && category === "")) {
        //condition 3 - user is a visitor, or a customer who hasn't selected a category
        satisfaction_label.textContent = "3. How satisfied are you with our website?";
    }
    else {
        //default 
        satisfaction_label.textContent = "3. How satisfied are you with our products?";
    }
}

//using addEventListener s to update question based user selection in the survey page
document.getElementById("user_type").addEventListener("change", update_question);
document.getElementById("category").addEventListener("change", update_question);

function submit_survey() {
    //once user submit display thank you message as a pop up
    alert("Survey submitted!");
    document.getElementById("survey_form").reset();
    //reset question text to default after submission
    update_question();
}

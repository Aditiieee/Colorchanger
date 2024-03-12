# Colorchanger

Click on the buttons to change the color of the background

initially we made a div in the body added span elements in which buttons were added. the width , height & placement were added in the css file.
In the js file first we created a const to hold all the buttons we selected through the query selector all.
Than another const was made to hold the body attribute so that we can change it later.
The buttons const which we crated now provides us an array like structure(but not an array, only few properties we get map etc are not available).
To this put an iteration using the forEach loop where an arrow function was used & a click event listener was added for the buttons and the background color was changed according to target & id was used to changed.

Another way

const body = document.querySelector('body')
document.querySelectorAll(".button").forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the ID of the clicked button
        var color = this.id;
        
        // Check which button was clicked and change the background color accordingly
        if (color === "yellow") {
            body.style.backgroundColor = "yellow";
        } else if (color === "pink") {
            body.style.backgroundColor = "pink";
        } else if (color === "white") {
            body.style.backgroundColor = "white";
        } else if (color === "skyblue") {
            body.style.backgroundColor = "skyblue";
        } else if (color === "lightgrey") {
            body.style.backgroundColor = "lightgrey";
        }
    });
});

This can also be done by using a function along with for each
// script.js

// Function to change the background color
function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}

// Loop through each button and add event listeners
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the color from the clicked button's ID
        const color = this.id;
        // Call the changeBackgroundColor function with the color
        changeBackgroundColor(color);
    });
});

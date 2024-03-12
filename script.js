const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

/*buttons.forEach( (button) => {
    //console.log(button)
    button.addEventListener('click', function (e){
       // console.log(e)
            body.style.backgroundColor =e.target.id;
    })
});*/
/*buttons.forEach(function(button) {
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
});*/

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

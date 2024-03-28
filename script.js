function changeBackgroundColor() {
    // Select the .intro element
    const introDiv = document.querySelector('.intro');

    // Add a click event listener to the .intro div
    introDiv.addEventListener('click', function() {
        // Toggle the background color between two colors
        if (introDiv.style.backgroundColor === 'antiquewhite') {
            introDiv.style.backgroundColor = 'lightgrey';
        } else {
            introDiv.style.backgroundColor = 'antiquewhite';
        }
    });
}

// Call the function when the script loads
changeBackgroundColor();
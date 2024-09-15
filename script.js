// Modal functionality
var modal = document.getElementById("announcementModal");
var span = document.getElementsByClassName("close")[0];

// Display the modal after a certain period
window.onload = function() {
    setTimeout(function() {
        modal.style.display = "block";
    }, 2000);
}

// Close the modal when the user clicks on the "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

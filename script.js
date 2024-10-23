// script.js

// Redirect to LinkedIn when the LinkedIn icon is clicked
document.querySelector('.nav-right a[href="#linkedin"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.open('https://www.linkedin.com/in/rashed-alsafadi/', '_blank'); // Open in new tab
  });
  
document.querySelector('.nav-right a[href="#linkedin"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.open('https://www.linkedin.com/in/rashed-alsafadi/', '_blank'); 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      if (!nameInput.value.trim()) {
        alert('Please enter your name.');
      } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
      } else if (!messageInput.value.trim()) {
        alert('Please enter your message.');
      } else {
        emailjs.send("service_8ohjmek", "template_egk4i1d", {
          from_name: nameInput.value,
          from_email: emailInput.value,
          message: messageInput.value,
        })
        .then(function(response) {
          alert('Message sent successfully!');
          form.reset(); 
        }, function(error) {
          alert('Failed to send the message. Please try again later.');
        });
      }
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  
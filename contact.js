
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
    if (!nameInput.value.trim()) {
      alert('Please enter your name.');
      event.preventDefault();
    } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      alert('Please enter a valid email address.');
      event.preventDefault();
    } else if (!messageInput.value.trim()) {
      alert('Please enter your message.');
      event.preventDefault();
    } else {
      alert('Form submitted successfully!');
    }
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});

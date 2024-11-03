
function toggleMenu() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  nav.classList.toggle('nav-open');
  console.log("Hamburger clicked, nav-open class toggled:", nav.classList.contains('nav-open'));
}
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
        console.log('SUCCESS!', response);
        alert('Message sent successfully!');
        form.reset(); 
      }, function(error) {
        console.error('FAILED...', error); 
        alert('Failed to send the message. Please try again later.');
      });
    }
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});

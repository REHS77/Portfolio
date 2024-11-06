document.addEventListener("DOMContentLoaded", function() {
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
    console.log("Hamburger clicked, nav-open class toggled:", nav.classList.contains('nav-open'));
  }

  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const sanitizedData = {
      from_name: DOMPurify.sanitize(nameInput.value.trim()),
      from_email: DOMPurify.sanitize(emailInput.value.trim()),
      message: DOMPurify.sanitize(messageInput.value.trim()),
    };

    if (typeof grecaptcha !== "undefined" && grecaptcha.getResponse() === "") {
      alert("Please complete the reCAPTCHA to submit the form.");
      return;
    }

    if (!sanitizedData.from_name) {
      alert('Please enter your name.');
    } else if (!sanitizedData.from_email || !validateEmail(sanitizedData.from_email)) {
      alert('Please enter a valid email address.');
    } else if (!sanitizedData.message) {
      alert('Please enter your message.');
    } else {
      emailjs.send("service_8ohjmek", "template_egk4i1d", sanitizedData)
      .then(function(response) {
        console.log('SUCCESS!', response);
        alert('Message sent successfully!');
        form.reset(); 
        if (typeof grecaptcha !== "undefined") grecaptcha.reset();
      })
      .catch(function(err) {
        console.error('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });
    }
  });
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.resume-section');

  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    title.addEventListener('click', function() {
      section.classList.toggle('active');
      const content = section.querySelector('.section-content');
      
      if (section.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});

document.querySelector('.nav-right a[href="#linkedin"]').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.open('https://www.linkedin.com/in/rashed-alsafadi/', '_blank'); 
});

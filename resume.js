
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.resume-section');

  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    title.addEventListener('click', function() {
      const content = section.querySelector('.section-content');
      const isActive = section.classList.contains('active');
            sections.forEach(otherSection => {
        if (otherSection !== section) {
          otherSection.classList.remove('active');
          otherSection.querySelector('.section-content').style.maxHeight = '0';
        }
      });
      if (!isActive) {
        section.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        section.classList.remove('active');
        content.style.maxHeight = '0';
      }
    });
  });
});
document.querySelector('.nav-right a[href="#linkedin"]').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.open('https://www.linkedin.com/in/rashed-alsafadi/', '_blank'); 
});

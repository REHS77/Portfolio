
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = button.getAttribute('data-filter');
  
        projects.forEach(project => {
          if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
  
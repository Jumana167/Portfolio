// Filter projects by category on the Projects page
const categoryButtons = document.querySelectorAll('.category-btn');
const projects = document.querySelectorAll('.project');

if (categoryButtons.length > 0 && projects.length > 0) {
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get the category to filter
      const category = button.getAttribute('data-category');

      // Show or hide projects based on the selected category
      projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
}

// Scroll animations for projects
const projectsForAnimation = document.querySelectorAll('.project');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

projectsForAnimation.forEach(project => {
  observer.observe(project);
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('.html', '');
    const targetElement = document.querySelector(`#${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link.getAttribute('href');
    }
  });
});

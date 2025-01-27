// Highlight the active link in the navigation bar
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

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

// Smooth scroll for internal links (optional for better UX)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

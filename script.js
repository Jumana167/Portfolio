document.addEventListener("DOMContentLoaded", () => {
  gsap.from("nav", { opacity: 0, y: -50, duration: 1 });
  gsap.from("h1", { opacity: 0, y: 50, duration: 1 });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gsap.to("body", { opacity: 0, duration: 0.5, onComplete: () => {
        window.location.href = link.getAttribute("href");
      }});
    });
  });
});

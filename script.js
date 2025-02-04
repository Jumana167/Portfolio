document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const projects = document.querySelectorAll(".project");

  // فلترة المشاريع عند الضغط على الزر المناسب
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      // إزالة الفئة "active" من جميع الأزرار
      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // إظهار المشاريع المناسبة فقط
      projects.forEach(project => {
        if (category === "all" || project.getAttribute("data-category") === category) {
          project.style.display = "block";
          gsap.fromTo(project, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // **إضافة تأثيرات GSAP عند تحميل الصفحة**
  gsap.from("nav", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
  gsap.from("h1", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5, ease: "power3.out" });
  gsap.from(".projects-container", { opacity: 0, y: 50, duration: 1, delay: 0.8, ease: "power3.out" });

  // **إضافة تأثير hover على المشاريع**
  projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
      gsap.to(project, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", duration: 0.3 });
    });

    project.addEventListener("mouseleave", () => {
      gsap.to(project, { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3 });
    });
  });

  // **تأثيرات تنقل السلاسة عند الضغط على الروابط في القائمة العلوية**
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        gsap.to(window, { duration: 0.8, scrollTo: target, ease: "power3.inOut" });
      }
    });
  });
});

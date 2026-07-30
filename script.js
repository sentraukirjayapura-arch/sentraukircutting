// Smooth scroll untuk menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Header berubah saat scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.style.background = "#020617";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.background = "rgba(15,23,42,.95)";
    header.style.boxShadow = "none";
  }
});

// Animasi muncul saat di-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, .gallery img, .about, #contact").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = ".7s";
  observer.observe(el);
});

// Tombol WhatsApp mengambang
const wa = document.createElement("a");

wa.href = "https://wa.me/6281240953965";
wa.target = "_blank";
wa.innerHTML = "💬";

wa.style.position = "fixed";
wa.style.right = "20px";
wa.style.bottom = "20px";
wa.style.width = "60px";
wa.style.height = "60px";
wa.style.background = "#25D366";
wa.style.borderRadius = "50%";
wa.style.display = "flex";
wa.style.justifyContent = "center";
wa.style.alignItems = "center";
wa.style.fontSize = "28px";
wa.style.color = "#fff";
wa.style.textDecoration = "none";
wa.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
wa.style.zIndex = "9999";

document.body.appendChild(wa);

// Tahun otomatis di footer (opsional)
const footer = document.querySelector("footer p");
if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Sentra Ukir Jayapura. All Rights Reserved.`;
}

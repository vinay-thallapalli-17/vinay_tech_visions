// Contact form submission
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    try {
      const response = await fetch('/contact', { method: 'POST', body: data });
      const text = await response.text();
      formMessage.textContent = text;
      formMessage.style.color = 'green';
      form.reset();
    } catch (error) {
      formMessage.textContent = 'Error sending message!';
      formMessage.style.color = 'red';
    }
  });
}

// Smooth scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  const headerOffset = 120;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

// Toggle videos/shorts/playlists
function toggleVideos(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const extra = grid.querySelector(".extra-videos");
  const btn = grid.querySelector(".view-all-btn");

  if (!extra || !btn) return;

  if (extra.style.display === "flex") {
    extra.style.display = "none";
    btn.textContent = "View All";
  } else {
    extra.style.display = "flex";
    extra.style.flexWrap = "wrap";
    btn.textContent = "View Less";
  }
}








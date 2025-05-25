const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // In real deployment: send to backend/server/API

  // Temporary confirmation
  confirmation.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
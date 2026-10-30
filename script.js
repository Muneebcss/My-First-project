// This demo form validates input in the browser but does not send or store it.
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    feedback.textContent = "Demo only: your form passed browser validation, but no message was sent.";
    contactForm.reset();
  });
}

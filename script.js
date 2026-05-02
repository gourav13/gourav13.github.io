const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = document.querySelector(".lightbox-close");
const form = document.forms.cool1397;
const statusMessage = document.querySelector(".form-status");
const scriptURL = "https://script.google.com/macros/s/AKfycbyRhIw5zGuUs520DRbQRwVVJe_6koxvZsWisk_wu74NYw-k7PMrvHJ1/exec";
const orderEmail = "gourav1397@gmail.com";

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".product-tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    const image = tile.querySelector("img");
    const label = tile.querySelector("span").textContent;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = label;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = form.querySelector("button");
  const phoneNumber = document.getElementById("num12").value.trim();

  if (!phoneNumber) {
    statusMessage.textContent = "Please enter your phone number.";
    return;
  }

  submitButton.disabled = true;
  statusMessage.textContent = "Opening email...";

  const subject = encodeURIComponent("New GoHankies order callback");
  const body = encodeURIComponent(`Phone number: ${phoneNumber}`);
  window.location.href = `mailto:${orderEmail}?subject=${subject}&body=${body}`;

  try {
    await fetch(scriptURL, { method: "POST", body: new FormData(form) });
    form.reset();
    statusMessage.textContent = "Email draft opened. Please send it from your email app.";
  } catch (error) {
    statusMessage.textContent = "Email draft opened. Please send it from your email app.";
  } finally {
    submitButton.disabled = false;
  }
});

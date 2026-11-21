// expand / collapse note
document.querySelectorAll(".shot").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.closest(".zoom-btn")) return;
    const open = btn.classList.toggle("open");
    const hint = btn.querySelector(".hint");
    if (hint) hint.textContent = open ? "hide" : "click for note";
  });
});

// lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.hidden = false;
  requestAnimationFrame(() => {
    lightbox.classList.add("active");
  });
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!lightbox.classList.contains("active")) {
      lightbox.hidden = true;
      lightboxImg.src = "";
    }
  }, 200);
}

document.querySelectorAll(".zoom-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const wrap = btn.closest(".shot-img-wrap");
    const img = wrap.querySelector("img");
    if (img) openLightbox(img.src, img.alt);
  });
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

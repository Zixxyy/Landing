document.querySelectorAll(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const open = btn.classList.toggle("open");
    const hint = btn.querySelector(".hint");
    if (hint) hint.textContent = open ? "hide" : "click for note";
  });
});
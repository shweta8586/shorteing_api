const menuBtn = document.querySelector(".btn");
const mobileMenu = document.querySelector(".mobileMenu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");

  if (mobileMenu.style.opacity == 1) {
    mobileMenu.style.opacity = 0;
    mobileMenu.style.pointerEvents = "none";
  } else {
    mobileMenu.style.opacity = 1;
    mobileMenu.style.pointerEvents = "unset";
  }
});

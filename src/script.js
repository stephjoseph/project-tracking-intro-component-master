const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");
const mobileNav = document.querySelector("#mobileNav");

openNav.addEventListener("click", () => {
  openNav.classList.add("opacity-0", "pointer-events-none", "scale-0");
  closeNav.classList.remove("opacity-0", "pointer-events-none", "scale-0");
  mobileNav.classList.remove("opacity-0", "pointer-events-none", "scale-0");
});

closeNav.addEventListener("click", () => {
  closeNav.classList.add("opacity-0", "pointer-events-none", "scale-0");
  openNav.classList.remove("opacity-0", "pointer-events-none", "scale-0");
  mobileNav.classList.add("opacity-0", "pointer-events-none", "scale-0");
});

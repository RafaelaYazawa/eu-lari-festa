export function displayMenu() {
  const menuIcon = document.querySelector(".hamburguer-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

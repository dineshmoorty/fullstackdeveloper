const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const mobileNav = document.getElementById("mobileNav");

menu.onclick = () => mobileNav.classList.add("active");
closeBtn.onclick = () => mobileNav.classList.remove("active");

// Close when clicking menu links
document.querySelectorAll("#mobileNav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
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

// BS Inputs Custom JS
const input = document.querySelectorAll("input");

input.forEach( input => 
  input.addEventListener('focus', () => {
    input.style.boxShadow = 'none';
  }) 
)

input.forEach( input => 
  input.addEventListener('mouseout', () => {
    input.style.boxShadow = 'none';
  }) 
)

// Mobile Validation
const mobileValidation = document.querySelector('.mobile');
mobileValidation.addEventListener("input", () => {
  const value = mobileValidation.value;

  // Only numbers allowed
  mobileValidation.value = value.replace(/\D/g, '');

  // Max 10 digits
  if (mobileValidation.value.length > 10) {
    mobileValidation.value = mobileValidation.value.slice(0, 10);
  }

  // Validation UI
  if (mobileValidation.value.length === 10) {
    mobileValidation.style.borderColor = "green";
  } else {
    mobileValidation.style.borderColor = "red";
  }
});

// Email Validation
const emailValidation = document.querySelector('.email');

emailValidation.addEventListener("input", () => {
  const email = emailValidation.value.trim();

  // Simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailValidation.style.borderColor = "green";
  } else {
    emailValidation.style.borderColor = "red";
  }
});
const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("nav-wrapper");
const navList = document.getElementById("nav-list");

mobileMenuTrigger.addEventListener("click", () => {
  console.log("Button Clicked");
  mobileMenuTrigger.classList.toggle("active");
  navWrapper.classList.toggle("active");
  navList.classList.toggle("active");
});

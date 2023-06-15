const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("nav-wrapper");
const navList = document.getElementById("nav-list");
const barSpans = document.querySelectorAll(".bar");

// Add a click event listener to the mobileMenuTrigger button
mobileMenuTrigger.addEventListener("click", () => {
  // Toggle the "active" class on mobileMenuTrigger, navWrapper, and navList
  mobileMenuTrigger.classList.toggle("active");
  navWrapper.classList.toggle("active");
  navList.classList.toggle("active");

  // Check if navWrapper has the "active" class to determine the expanded state
  const isExpanded = navWrapper.classList.contains("active");
  mobileMenuTrigger.setAttribute("aria-expanded", isExpanded.toString());

  // Toggle the "active" class on each barSpan
  barSpans.forEach((span) => {
    span.classList.toggle("active");
  });
});

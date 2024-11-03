function toggleMenu() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');
  nav.classList.toggle('nav-open');
  console.log("Hamburger clicked, nav-open class toggled:", nav.classList.contains('nav-open'));
}

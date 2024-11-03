function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-open');
  console.log("Hamburger clicked, nav-open class toggled:", nav.classList.contains('nav-open'));
}

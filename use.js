/*const toggleButton = document.getElementsByClassName('.toggle-button')
const navbarLink = document.getElementsByClassName('.navbar-link')

toggleButton.addEventListener('click', () => {
	navbarLink.classList.toggle('active'))
})*/
function myFunction() {
  var x = document.getElementById("navbar-link");
  if (x.className === "navbar-link") {
    x.className += " responsive";
  } else {
    x.className = "navbar-link";
  }
}
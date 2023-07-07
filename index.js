const toggle = (toggleTextId) => {
    const toggleText = document.getElementById(toggleTextId);
    toggleText.style.display === "none" ?
      toggleText.style.display = "block" : toggleText.style.display = "none";
  }
  
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-ul').classList.toggle('open');
});
const toggle = (toggleTextId) => {
    const toggleText = document.getElementById(toggleTextId);
    toggleText.style.display === "none" ?
      toggleText.style.display = "block" : toggleText.style.display = "none";
  }

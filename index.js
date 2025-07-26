 function loadBody() {
    document.getElementById("loader").style.display = "none";
    document.querySelector(".head-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }

  // Wait until the whole page is loaded
  window.addEventListener("load", () => {
 
    setTimeout(loadBody, 7000);
  });
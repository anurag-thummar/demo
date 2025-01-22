// window.addEventListener("load", function () {
//   console.log("Page fully loaded, hiding loader...");

//   // Hide loader
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("loaderSlide").style.display = "none";

//   // Show content
//   document.getElementById("content").style.display = "block";

//   // Enable page scrolling
//   document.body.style.overflow = "auto";
// });



window.addEventListener("load", function () {

  const content = document.getElementById("loaderSlide");
  content.style.display = "block";
  
  // Enable page scrolling
  document.body.style.overflow = "auto";

  // Hide the loaderSlide after a 1-second delay
  setTimeout(function() {
    document.getElementById("loaderSlide").style.display = "none";
  }, 2000); 
});




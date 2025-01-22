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
  console.log("Page fully loaded, hiding loader...");
  // document.getElementById("loader");
  // Show content with animation (Choose either 'slide-right' or 'slide-left')
  const content = document.getElementById("loaderSlide");
  content.style.display = "block";

  // Enable page scrolling
  document.body.style.overflow = "auto";

  // Hide the loaderSlide after a 1-second delay
  setTimeout(function() {
    document.getElementById("loaderSlide").style.display = "none";
  }, 2000); // 1000 milliseconds = 1 second
});




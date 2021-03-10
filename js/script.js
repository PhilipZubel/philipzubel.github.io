const hamburger = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-list");
//const header = document.getElementsByTagName("header")[0];

hamburger.addEventListener("click", function() {
	navLinks.classList.toggle("open");
  // header.classList.toggle(".header-closed")
})

const mediaQuery = window.matchMedia('(max-width: 880px)')

$('.nav-link').click(function(e){
  navLinks.classList.remove("open");
});




const header = document.getElementsByClassName("header")[0];
// Create a condition that targets viewports at least 768px wide

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    // console.log('Media Query Matched!')
	header.classList.remove("header");
  }else{
	header.classList.add("header");
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)



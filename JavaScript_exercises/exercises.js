// 1a) create a class that applies a "highlight" effect to text


// 1b) apply this effect programmatically to all elements on the page with a span element type and which have a .highlight class.

var highlightSpans = document.querySelectorAll('span.highlight');
highlightSpans.forEach(function(highlightSpans){
    highlightSpans.classList.add('text-highlight');
})

// 2a) define a single CSS3 class which applies an animation to an image (e.g. spin | flip | shake etc..)
  

// 2b) apply this class programatically to the banner image when the page loads


document.querySelector(".banner_image img").addEventListener("mouseover", start);
document.querySelector(".banner_image img").addEventListener("mouseout", stop);

function start() {
  document.querySelector(".banner_image").classList.add("flip-effect");
}

function stop(){
  document.querySelector(".banner_image").classList.remove("flip-effect");
}

// 2c) in addition to 1b, apply this animation class programatically when the user hovers their mouse over the banner image (stop the effect when they move the mouse from over the image)


// 3a) define a single CSS3 class that applies an animation to a nav item (e.g. increase/decrease font height | add/remove text shadow | change bg colour etc... )



// 3b) apply this class programmatically to ALL primary nav items when the page loads

var increaseNav = document.querySelectorAll('nav');
increaseNav.forEach(function(increaseNav){
    increaseNav.classList.add('nav-font');
})
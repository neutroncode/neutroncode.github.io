function shownav() {
  var shownav = document.getElementById("nav");
  var button = document.getElementById("nav-button");
  // Show/hide navigation menu
  // Add jquery transition effect in this block
  if(shownav.className == "box expand fullwidth"){
    // Collapse nav
    fall();
    button.style.color = "#fff";
  } else {
    // Expand nav
    expand();
    button.style.color = "#999";
  }
}

function expand(){
  var shownav = document.getElementById("nav");
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box expand fullwidth";
      shownav.style.height = "100%";
    });
  });
}

function fall(){
  var hidenav = document.getElementById("nav");
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function(time) {
    window.requestAnimationFrame(function(time) {
      document.querySelector(".box").className = "box fall";
      hidenav.style.height = "0";
    });
  });
}

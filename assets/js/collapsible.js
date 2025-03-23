var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
function changeText() {
  var button = document.getElementById("myButton");
  if (button.innerHTML === "Show More") {
      button.innerHTML = "Show Less";
  } else {
      button.innerHTML = "Show More";
  }
}
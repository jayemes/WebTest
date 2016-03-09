var bodyStyle = document.getElementById("the-body").style;
var divStyle = document.querySelector(".my-div").style;

var scroll = function() {
  var offset = window.pageYOffset;
  var red = (offset) % 255;
  var green = 100 + (offset) % 50;
  var blue = 180;

  divStyle.backgroundSize = Math.min((100 + (offset / 5)), 200) + "%";

  bodyStyle.backgroundColor = "rgb(" +
    red + "," + green + "," + blue + ")";
}
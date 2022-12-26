// document.getElementById("cosa").style.color = "red";
// document.getElementById("cosa").style.backgroundColor = "yellow";

// var x = document.getElementById("cosa").style;
// x.color = "red";
// x.backgroundColor = "yellow";
// x.border = "4px dotted green";

document.getElementById("cosa").onclick = cambiarColor;

function cambiarColor(color) {
  var x = document.getElementById("cosa").style;
  x.color = "red";
  x.backgroundColor = "yellow";
  x.border = "4px dotted green";
}
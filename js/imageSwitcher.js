let staticCube = document.querySelector(".staticCube");
let hiddenCube = document.querySelector(".hiddenCube");

let gifURL = "./defaultcube/defaultCubeuwu.gif";

addEventListener("load", init);

function init() {
  staticCube.addEventListener("mouseover", showHiddenCube);
  hiddenCube.addEventListener("mouseout", showStaticCube);

  showStaticCube();
}

function showStaticCube() {
  staticCube.style.display = "block";
  hiddenCube.style.display = "none";
}

function showHiddenCube() {
  staticCube.style.display = "none";
  hiddenCube.style.display = "block";

  let gifImg = document.getElementById("gifImg");
  gifImg.src = "";
  gifImg.src = gifURL;
}

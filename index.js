let modalLeft = document.getElementById("modal-left");
let modalCenter = document.getElementById("modal-center");
let modalRight = document.getElementById("modal-right");
let btnLeft = document.getElementById("btn-left");
let btnCenter = document.getElementById("btn-center");
let btnRight = document.getElementById("btn-right");
let closeLeft = document.getElementById("close-left");
let closeCenter = document.getElementById("close-center");
let closeRight = document.getElementById("close-right");

btnLeft.onclick = function () {
  modalLeft.style.display = "block";
};
btnCenter.onclick = function () {
  modalCenter.style.display = "block";
};
btnRight.onclick = function () {
  modalRight.style.display = "block";
};

closeLeft.onclick = function () {
  modalLeft.style.display = "none";
};
closeCenter.onclick = function () {
  modalCenter.style.display = "none";
};
closeRight.onclick = function () {
  modalRight.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalLeft) {
    modalLeft.style.display = "none";
  }
  if (event.target == modalCenter) {
    modalCenter.style.display = "none";
  }
  if (event.target == modalRight) {
    modalRight.style.display = "none";
  }
};

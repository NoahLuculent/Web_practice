function night() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
}
function day() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
}

function click_for() {
  let element = document.getElementsByTagName("h2");
  for (let e of element) {
    e.style.color = "red";
    e.innerText = e.innerText.toUpperCase();
  }
}
function click_while() {
  let element = document.querySelector(".h2");
  let n = 0;
  while (n < element.length) {
    element[n].stlye.color = "red";
    element[n].innerText = element[n].innerText.toUpperCase();
    n++;
  }
}

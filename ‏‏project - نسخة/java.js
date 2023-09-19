function mouseOver(id) {
  document.getElementById(id).style.backgroundColor = "yellow";
}

function mouseOut(id) {
  document.getElementById(id).style.backgroundColor = "#fff";
}

window.onload = () => {
  document.getElementById("popup").classList.toggle("show");
};

function remove_popup() {
  document.getElementById("mypopup").style.visibility = "hidden";
}

function large_font() {
  var allElemets = document.querySelectorAll("p");
  allElemets.forEach((element) => {
    element.style.fontSize = "20px";
  });
  var allElemets = document.querySelectorAll("b");
  allElemets.forEach((element) => {
    element.style.fontSize = "20px";
  });
  var allElemets = document.querySelectorAll("h1");
  allElemets.forEach((element) => {
    element.style.fontSize = "38px";
  });

  document.getElementById("btn-font-large").style.backgroundColor =
    "rgb(200, 200, 200,0.6 )";
  document.getElementById("btn-font-normall").style.backgroundColor = "#fff";
  document.getElementById("btn-font-large").disabled = true;
  document.getElementById("btn-font-normall").disabled = false;
}

function normall_font() {
  var allElemets = document.querySelectorAll("p");
  allElemets.forEach((element) => {
    element.style.fontSize = "16px";
  });

  var allElemets = document.querySelectorAll("b");
  allElemets.forEach((element) => {
    element.style.fontSize = "16px";
  });
  var allElemets = document.querySelectorAll("h1");
  allElemets.forEach((element) => {
    element.style.fontSize = "24px";
  });

  document.getElementById("btn-font-normall").style.backgroundColor =
    "rgb(200, 200, 200,0.6 )";
  document.getElementById("btn-font-large").style.backgroundColor = "#fff";
  document.getElementById("btn-font-normall").disabled = true;
  document.getElementById("btn-font-large").disabled = false;
}

const topFunction = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

function confiarm_function() {
  var allElemets = document.querySelectorAll(".lastText");
  allElemets.forEach((element) => {
    element.style.visibility = "visible";
  });
}

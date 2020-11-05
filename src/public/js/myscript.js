function openSection(evt, sectionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("section");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-green", "");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-pale-green", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-green";
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-pale-green";
}


function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

function openArboles(arbolName) {
  var f;
  var j = document.getElementsByClassName("arboles");
  for (f = 0; f < j.length; f++) {
    j[f].style.display = "none";
  }
  document.getElementById(arbolName).style.display = "block";
}



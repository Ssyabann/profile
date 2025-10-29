fetch("about.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("about").innerHTML = data));

fetch("gallery.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("gallery").innerHTML = data));

fetch("contact.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("contact").innerHTML = data));

fetch("regist.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("regist").innerHTML = data));
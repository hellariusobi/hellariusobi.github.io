// INDEX AND NAVBAR
function myFunction() {
  document.getElementById("mydropdown-content").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("mydropdown-content");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
var dropdown2 = document.getElementsByClassName("dropbtn2");
var i;

for (i = 0; i < dropdown2.length; i++) {
  dropdown2[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
let sidebar = document.querySelector("#menu-icon");
let sidebarmenu = document.querySelector("#sidebarmobile");

sidebar.onclick = () => {
  sidebar.classList.toggle("bx-x");
  sidebarmenu.classList.toggle("open");
};

// ILLUSTRATION PAGE
var modal = document.getElementById("myModal");
var images1 = document.getElementsByClassName("img-landscape");
var images2 = document.getElementsByClassName("img-portrait")
var modalImg = document.getElementById("imgsrc");
for (var i = 0; i < images1.length; i++) {
  var img = images1[i];
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  };
}
for (var i = 0; i < images2.length; i++) {
  var img = images2[i];
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  };
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
};

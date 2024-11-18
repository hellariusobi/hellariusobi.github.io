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

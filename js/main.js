function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  document.getElementById("myDIV").style.backgroundImage = "url(footer.jpg)";
}

function dark_light(x) {
  x.classList.toggle("fa-sun");
}

function toggle(y) {
  y.classList.toggle("fa-close");
}

$(document).ready(function () {
  $(".movie-image").hover(
    function () {
      $(this).find(".play").show();
    },
    function () {
      $(this).find(".play").hide();
    }
  );
});

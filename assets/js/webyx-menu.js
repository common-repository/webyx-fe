/*! Webyx FE - https://webyx.it/wfe-guide */!function() {
  var n, e, t, c, o = document.getElementById("webyx-nav");
  function a() {
    e.forEach(function(e) {
      e.classList.remove("webyx-sub-menu-expand");
    });
  }
  function s() {
    t.forEach(function(e) {
      e.classList.remove("webyx-menu-arrow-rotated");
    });
  }
  o && (n = document.querySelector("#webyx-toggle-btn"), e = document.querySelectorAll(".sub-menu"), 
  t = document.querySelectorAll(".webyx-menu-arrow"), c = document.querySelectorAll("#webyx-nav #webyx-nav-container a"), 
  e.forEach(function(e) {
    e.classList.add("webyx-sub-menu-collapse");
  }), n.addEventListener("click", function() {
    n.classList.toggle("webyx-menu-active"), n.classList.contains("webyx-menu-active") && (a(), 
    s());
  }), t.forEach(function(e) {
    e.addEventListener("click", function(e) {
      var n = e.target;
      e.target.nextElementSibling.classList.toggle("webyx-sub-menu-expand"), n.classList.toggle("webyx-menu-arrow-rotated");
    });
  }), c.forEach(function(e) {
    e.addEventListener("click", function(e) {
      n.classList.toggle("webyx-menu-active"), a(), s();
    });
  }), o.classList.remove("webyx-nav-hide"));
}();
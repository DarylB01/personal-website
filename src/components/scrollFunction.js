const scrollFunction = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor =
        "hsla(199, 78%, 46%, 0.92)";
      document.getElementById("nav-logo").style.color = "white";
      let links = document.querySelectorAll(".nav-links a");
      links.forEach(link => {
        link.style.color = "white";
      });
      let underlines = document.querySelectorAll("hr");
      underlines.forEach(underline => {
        underline.style.backgroundColor = "white";
      });
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    if (window.scrollY === 0) {
      document.getElementById("navbar").style.backgroundColor = "white";
      document.getElementById("nav-logo").style.color = null;
      let links = document.querySelectorAll(".nav-links a");
      links.forEach(link => {
        link.style.color = null;
      });
      let underlines = document.querySelectorAll("hr");
      underlines.forEach(underline => {
        underline.style.backgroundColor = null;
      });
    }
    prevScrollpos = currentScrollPos;
  };
};

export default scrollFunction;

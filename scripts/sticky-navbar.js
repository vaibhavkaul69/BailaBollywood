 window.onscroll = function()
  {
      myFunction()
    };
      
      var navbar = document.getElementById("nav-header");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          document.getElementById("nav-header").style.background = "#fff";
        } else {
          navbar.classList.remove("sticky");
        }
      }
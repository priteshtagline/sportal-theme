
// Include html file
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

includeHTML();

  //  Sign in form 
  $(document).ready(function () {
    $("#do_not_account").click(function () {
      $("#sign_in").addClass("d-none");
      $("#sign_up").removeClass("d-none");
    });
  });

  // sign up form
  $(document).ready(function () {
    $("#already_member").click(function () {
      $("#sign_in").removeClass("d-none");
      $("#sign_up").addClass("d-none");
    });
  });
  //forgotten link
  $(document).ready(function () {
    $("#forgotten_password").click(function () {
      $("#sign_in").addClass("d-none");
      $("#forgotten_form").removeClass("d-none");
    });
  });
  // back_Sign_in forgottent form
  $(document).ready(function () {
    $("#back_signin").click(function () {
      $("#forgotten_form").addClass("d-none");
      $("#sign_in").removeClass("d-none");
    });
  });
  // back_Sign_in change password
  $(document).ready(function () {
    $("#password_to_signin").click(function () {
      $("#change_password").addClass("d-none");
      $("#sign_in").removeClass("d-none");
    });
  });

// Sidebar collapse

$(document).ready(function() {
  $("#side_nav_btn").on("click", function() {
    $(".sidebar").toggleClass("active");
    $("header").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(this).toggleClass("active");
  });
});



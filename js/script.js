
$(document).ready(function () {
     // sidebar profile 
     $('.profile-dropdown').on('click', function () {
      $('.features-list li a.active').removeClass('active');
      $('.profile-dropdown').addClass('active')
      $('.user-detail').on('click', 'li', function () {
        $('.features-list li a.active').removeClass('active');
        $('.profile-dropdown').addClass('active')
      })
    })
  //  Sign in form
  $("#do_not_account").click(function () {
    $("#sign_in").addClass("d-none");
    $("#sign_up").removeClass("d-none");
  });

  // sign up form
  $("#already_member").click(function () {
    $("#sign_in").removeClass("d-none");
    $("#sign_up").addClass("d-none");
  });

  //forgotten link
  $("#forgotten_password").click(function () {
    $("#sign_in").addClass("d-none");
    $("#forgotten_form").removeClass("d-none");
  });

  // back_Sign_in forgottent form
  $("#back_signin").click(function () {
    $("#forgotten_form").addClass("d-none");
    $("#sign_in").removeClass("d-none");
  });

  // back_Sign_in change password
  $("#password_to_signin").click(function () {
    $("#change_password").addClass("d-none");
    $("#sign_in").removeClass("d-none");
  });

  // Sidebar collapse
  $("#side_nav_btn").on("click", function () {
    $(".sidebar").toggleClass("active");
    $("header").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(this).toggleClass("active");
  });
});



// Image Upload Javascript
("use strict");
function dragNdrop(event) {
  var fileName = URL.createObjectURL(event.target.files[0]);
  var preview = document.getElementById("preview");
  var previewImg = document.createElement("img");
  previewImg.setAttribute("src", fileName);
  preview.innerHTML = "";
  preview.appendChild(previewImg);
}
function drag() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}
function drop() {
  document.getElementById("uploadFile").parentNode.className = "dragBox";
}

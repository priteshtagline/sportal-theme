
$(document).ready(function () {

  // sidebar resize
  $(window).resize(function() {
    if ($(window).width() <= 1024) {
     $('.sidebar').addClass('active');
     $('.main-content').addClass('active');
     $('header').addClass('active');
    }
  });

  // sidebar - navtab
  $("#settings-tab").on('click',function(){ 
    $('.navbar-brand').html('Settings');
    $('#setting_nav_tab').show();
  });
  $("#customers-tab").click(function(){
    $('.navbar-brand').html('Customers');
    $('#setting_nav_tab').hide(); 
  });

  // Setting_nav_tab
  $('#setting_nav_tab').hide();
  $("#settings-tab").click(function(){
    $('.navbar-brand').html('Settings');
    $('#customer_title').hide(); 
  });

  // Customer_nav_tab
  $('#customer_subtab').hide();
  $('#nav-back-arrow').hide();
  $('#customer_subtab_content').hide();
  $('#customer_show_more_btn').on('click',function(){
    $('.navbar-brand').hide();
    $('#customer_title').hide();
    $('#customer_subtab').show();
    $('#customer_subtab_content').show();
    $('#customer_main_module').hide();  
    $('#nav-back-arrow').show();
  })
  $('#nav-back-arrow').on('click',function(){
    $('.navbar-brand').show();
    $('#customer_title').show();
    $('#customer_subtab').hide();
    $('#customer_subtab_content').hide();
    $('#customer_main_module').show();  
    $('#nav-back-arrow').hide();
  })

  // scheduletime for setting overview
  $('.btn').on('click',function(){
    $(this).closest('li.schedule_time_list').toggleClass('edit');
  })
  $(".form_card .btn-reset").click(function () {
    $(".schedule_time_list").removeClass("edit");
  });

  // sidebar profile 
  $('.sidebar .profile-dropdown').on('click', function(){
  $('.features-list li a.active').removeClass('active');
  $('.main-content .tab-content .tab-pane').removeClass('show active');
  $('.sidebar .profile-dropdown').addClass('active')
  $('.features-list li a').on('click', function(){
    $('.sidebar .profile-dropdown').removeClass('active');
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

// Navbar
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 20) {
    jQuery("header").addClass("fixed-header");
  } else {
    jQuery("header").removeClass("fixed-header");
  }
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

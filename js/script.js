$(document).ready(function () {

  localStorage.clear()
  function format(option) {
    if (!option.id) {
      return option.text;
    }
    var ob = '<img src="images/user_profile.png" />' + option.text;
    return ob;
  };

  // Reservation_modal
  $(".reservation_customer_modal .modal-footer .btn").on('click', function () {
    $('body').css({ "height": "100vh", "overflow-y": "hidden" });
  });
  $("#add_schedule_modal .modal-footer .btn").on('click', function () {
    $('body').css({ "overflow-y": "auto" });
  });

  $(".select_image").select2({
    templateResult: format,
    templateSelection: function (option) {
      if (option.id.length > 0) {
        return '<img src="images/user_profile.png">' + option.text;
      } else {
        return option.text;
      }
    },
    escapeMarkup: function (m) {
      return m;
    }
  });

  $(".fc-button-group .fc-button").on('click', function () {
    $('#list_view_table').hide();
    $(".fc-menuButton-button").removeClass('active');
  });

  $(".fc-menuButton-button").on('click', function () {
    $('#list_view_table').toggle();
    $(this).toggleClass('active')
  })

  // Notification_module
  $('#notification-back-arrow').hide();
  $('.notification_section').hide();
  $("#notification_see_all_button").on('click', function () {
    $('.navbar-brand').html('Notifications').show();
    $('#nav_search_field').hide();
    $('.notification_section').show();
    $('#notification-back-arrow').show();
    let activate_element = $(".sidebar").children(".features-list").children(".features-item").children("a.active");
    activate_element.removeClass("active");
    activate_element.attr('aria-expanded', 'false');
    let activate_element1 = $(".main-content").children(".tab-content").children(".tab-pane.show.active");
    activate_element1.removeClass("show active")
    let activate_element2 = $("#header").children(".navbar").children(".container-fluid").children(".nav-right").children(".btn-group").children(".notification-btn");
    activate_element2.addClass("collapsed");
    let activate_element3 = $("#header").children(".navbar").children(".container-fluid").children(".nav-right").children(".btn-group").children(".notification_menu");
    activate_element3.removeClass("show");
  });

  $(".notification_close_btn").on('click', function () {
    let activate_element4 = $(".notification_close_btn").closest(".tab-pane");
    activate_element4.removeClass("active show");
    let activate_element5 = $("#v-pills-notification-tab").children("li").children(".nav-link");
    activate_element5.removeClass("active unread_message");
  });

  // tournament route
  $("#new_tournament_form").hide();
  $("#create_tournament_btn").on('click', function () {
    $("#new_tournament_form").show();
    $("#tournament_main_module").hide();
  });
  $(".tournament_form .btn").on('click', function () {
    $("#new_tournament_form").hide();
    $("#tournament_main_module").show();
  });
  $("#edit_tournament_form").hide();
  $("#tournament_edit").on('click', function () {
    $("#edit_tournament_form").show();
    $("#tournament_main_module").hide();
  });
  $("#edit_tournament_form .btn").on('click', function () {
    $("#edit_tournament_form").hide();
    $("#tournament_main_module").show();
  });
  $("#tournament_nav_tab").hide();
  $("#tournaments-tab").on('click', function () {
    $('.navbar-brand').show().html('Tournament');
    $("#nav_search_field").hide();
  });

  $("#tournaments_show_more_btn").on('click', function () {
    $('.navbar-brand').hide();
    $("#tournament_nav_tab").show();
    $("#nav-back-arrow").show();
    $("#tournament_main_module").hide();
    $("#nav_search_field").hide();
    $("#tournament_subtab_content").show();
  });
  $("#tournament_subtab_content").hide();




  // sidebar resize
  $(window).resize(function () {
    if ($(window).width() <= 1024) {
      $('#sidebar').addClass('active');
      $('.sidebar').addClass('active');
      $('#sidebar .side-nav-btn').addClass('active');
      $('.main-content').addClass('active');
      $('#header').addClass('active');
    }
  });
  $("#customer_nav_title").hide();
  $(window).resize(function () {
    if ($(window).width() <= 991) {
      $("#humburge_menu").hide();
      $("#reports-tab").on('click', function () {
        $("#humburge_menu").show();
      });
      $("#customers-tab").on('click', function () {
        $("#humburge_menu").show();
      });
      $("#settings-tab").on('click', function () {
        $("#humburge_menu").show();
      });
    }
  });

  // Loader
  $(window).on('load', function () {
    $('.loader').css({ "opacity": "0", "visibility": "hidden" });
  });

  // sidebar - navtab
  $("#settings-tab").on('click', function () {
    $('.navbar-brand').html('Settings').show();
    $('#setting_nav_tab').show();
    $('#nav_search_field').hide();
  });
  $("#overview-tab").on('click', function () {
    $('.navbar-brand').hide();
  });
  $("#dashboard-tab").on('click', function () {
    $('.navbar-brand').hide();
    $('#reports_nav_tab').hide();
  });

  $('.navbar-brand').hide();

  $('#customer_tab').hide();
  $("#customers-tab").click(function () {
    $('.navbar-brand').html('Customers').show();
    $('#customer_tab').show();
    $('#setting_nav_tab').hide();
    $('#customer_nav_list').show();
    $('#nav_search_field').hide();
  });
  $("#schedule-tab").click(function () {
    $('.navbar-brand').hide();
    $('#customer_tab').show();
    $('#customer_title').hide();
    $('#nav_search_field').show();
  });

  // Setting_nav_tab
  $('#setting_nav_tab').hide();
  $("#settings-tab").click(function () {
    $('.navbar-brand').html('Settings');
    $('#customer_title').hide();
  });

  // Report_nav_tab
  $('#reports_nav_tab').hide();
  $("#reports-tab").click(function () {
    $('.navbar-brand').html('Reports').show();
    $('#nav_search_field').hide();
    $('#reports_nav_tab').show();
  });

  // Billings_nav_tab
  $("#billings-tab").click(function () {
    $('.navbar-brand').html('Billings').show();
    $('#nav_search_field').hide();
  });

  // Customer_nav_tab
  $('#customer_subtab').hide();
  $('#nav-back-arrow').hide();
  $('#customer_subtab_content').hide();
  $('#customer_show_more_btn').on('click', function () {
    $('.navbar-brand').hide();
    $('#customer_title').hide();
    $('#customer_subtab').show();
    $('#customer_subtab_content').show();
    $('#customer_main_module').hide();
    $('#nav-back-arrow').show();
  })
  $('#nav-back-arrow').on('click', function () {
    $('.navbar-brand').show();
    $('#customer_title').show();
    $('#customer_subtab').hide();
    $('#customer_subtab_content').hide();
    $('#customer_main_module').show();
    $('#nav-back-arrow').hide();
  })

  // scheduletime for setting overview
  $('.schedule_time .btn').on('click', function () {
    $(this).closest('li.schedule_time_list').toggleClass('edit');
  })
  $(".form_card .btn-reset").click(function () {
    $(".schedule_time_list").removeClass("edit");
  });

  // sidebar profile 
  $('.sidebar .profile-dropdown').on('click', function () {
    $('.features-list li a.active').removeClass('active');
    $('.main-content .tab-content .tab-pane').removeClass('show active');
    $('.sidebar .profile-dropdown').addClass('active')
    $('.features-list li a').on('click', function () {
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
    $("#sidebar").toggleClass("active");
    $("header").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(this).toggleClass("active");
    // $("#calendar").fullCalendar('render');
  });
  $(".sidebar").hover(
    function () {
      $("#sidebar.active").toggleClass("hover");
    }
  );

  // Notification_pagination
  var items = $(".list-wrapper li");
  var numItems = items.length;
  var perPage = 10;
  items.slice(perPage).hide();
  $('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "Previous",
    nextText: "Next",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    }
  });

  // Image Upload Javascript
  ("use strict");
  function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementsByClassName("image_preview");
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

  // Select2
  $(".select").select2({
    tags: true
  });

  // DataTable
  $('.display').DataTable();

  // schedule
  $(".fc-addButton-button").attr("data-toggle", "modal").attr("href", "#add_schedule_modal");

  // chart selectbox
  $(".custom_date_picker").hide();
  $('.sorting_select').on('change', function () {
    var value = $(this).val()
    if (value == 'custom') {
      $(".custom_date_picker").show();
    } else {
      $(".custom_date_picker").hide();
    }
  });

  function toggleSidebar(ref) {
    document.getElementsByClassName("onboarding_sidebar").classList.toggle('active');
  }



  // Filter button in tournament,schedule and notification dropdown
  var removeClass = true;
  $("html").click(function () {
    if (removeClass) {
      $(".tournament-filter-popup").removeClass('active');
      $('.fc-filterButton-button').removeClass("active");
      $('.fc-pricingfilter-button').removeClass("active");
      $('.notification_menu').removeClass("show");
    }
    removeClass = true;
  });
  $(".fc-pricingfilter-button,.pricing-filter-popup,.tournament-filter-popup, .fc-filterButton-button, .tournament-filter, .notification-btn, .notification_menu").click(function () {
    removeClass = false;
  });
  $(".fc-filterButton-button, .tournament-filter").on("click", function () {
    $(this).toggleClass("active");
    $(".tournament-filter-popup").toggleClass("active");
    removeClass = false;
  });
  $(".fc-pricingfilter-button").on("click", function () {
    $(this).toggleClass("active");
    $(".pricing-filter-popup").toggleClass("active");
    removeClass = false;
  });
  $(".notification-btn").on("click", function () {
    $(".notification_menu").toggleClass("show");
    removeClass = false;
  });

  // schedule
  $(".fc-pricingAdd-button").attr("data-toggle", "modal").attr("href", "#add_pricing_modal");
});



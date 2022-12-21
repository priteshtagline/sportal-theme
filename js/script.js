$(document).ready(function () {
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

  // sidebar resize
  $(window).resize(function () {
    if ($(window).width() <= 1024) {
      $('.sidebar').addClass('active');
      $('.main-content').addClass('active');
      $('header').addClass('active');
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
  $('.btn').on('click', function () {
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
  });
  $(".sidebar").hover(
    function () {
      $("#sidebar.active").toggleClass("hover");
    }
  );
  $(function () {
    $('.navbar-toggler').removeAttr(style);
  });

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

  // Select2
  $(".select").select2({
    tags: true
  });

  // DataTable
  $('.display').DataTable();

  // schedule
  $(".fc-addButton-button").attr("data-toggle", "modal").attr("href", "#add_schedule_modal");
  // $(".fc-filterButton-button").attr("data-toggle", "collapse").attr("href", "#schedule_filter").attr("type", "button").attr("aria-expanded", "#false").attr("aria-controls", "button").attr("aria-expanded", "#schedule_filter").append("<p>Append</p>");


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

});


// Schedule
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var btn = document.getElementsByClassName("fc-filterButton-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-filterButton-button').item(0)
    elms.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" ></svg>'
  }, 0);

  var btn = document.getElementsByClassName("fc-menuButton-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-menuButton-button').item(0)
    elms.innerHTML = '<span class="material-symbols-outlined">list</span> <svg id="Group_215" data-name="Group 215" xmlns="http://www.w3.org/2000/svg" width="12.438" height="12.438" viewBox="0 0 12.438 12.438"><path id="Path_68" data-name="Path 68" d="M.777,4.582v7.774a.777.777,0,0,0,.777.777h9.328a.777.777,0,0,0,.777-.777V4.582ZM1.555,2.25A1.555,1.555,0,0,0,0,3.8v8.551a1.555,1.555,0,0,0,1.555,1.555h9.328a1.555,1.555,0,0,0,1.555-1.555V3.8A1.555,1.555,0,0,0,10.883,2.25Z" transform="translate(0 -1.473)" fill="currentcolor" fill-rule="evenodd"/><path id="Path_69" data-name="Path 69" d="M7.139,0a.389.389,0,0,1,.389.389V.777a.389.389,0,0,1-.777,0V.389A.389.389,0,0,1,7.139,0Zm7,0a.389.389,0,0,1,.389.389V.777a.389.389,0,0,1-.777,0V.389A.389.389,0,0,1,14.135,0Z" transform="translate(-4.418)" fill="currentcolor" fill-rule="evenodd"/><path id="Path_70" data-name="Path 70" d="M25.139,13.5h.777a.389.389,0,0,1,.389.389v.777a.389.389,0,0,1-.389.389h-.777a.389.389,0,0,1-.389-.389v-.777A.389.389,0,0,1,25.139,13.5Z" transform="translate(-16.199 -8.836)" fill="currentcolor"/></svg>'
  }, 0);

  var btn3 = document.getElementsByClassName("fc-addButton-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-addButton-button').item(0)
    elms.innerHTML = '<span class="material-symbols-rounded add_icon">add_circle</span><span>Add New</span>'
  }, 0);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    themeSystem: 'bootstrap4',

    customButtons: {
      filterButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" /></svg>;'
      },
      menuButton: {
        html: '<span class="material-symbols-outlined">list</span>;'
      },
      addButton: {
        html: '<span class="material-symbols-rounded add_icon">add_circle</span><span>Add New</span>'
      }
    },
    buttonText: {
      month: 'Monthly',
      week: 'Weekly',
      day: 'Daily',
      list: 'List'
    },
    headerToolbar: {
      left: 'title prev,next filterButton',
      center: 'timeGridDay,timeGridWeek,dayGridMonth',
      right: 'menuButton addButton',
    },
    initialView: 'timeGridWeek',
    editable: true,
    weekNumbers: false,
    expandRows: 4,
    firstDay: Monday = 1,
    showNonCurrentDates: false,
    contentHeight: 'auto',
    allDaySlot: false,
    slotLabelInterval: "01:00",
    editable: false,
    fixedWeekCount: false,
    views: {
      dayGridMonth: {
        titleFormat: { month: 'long' }
      },
      dayGridWeek: {
        titleFormat: '{DD.{MM.}}YYYY'
      },
    },
    initialDate: "2022-09-01",
    eventContent: function (arg) {
      return { html: arg.event.title };
    },
    events: [
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-30T08:00:00',
        end: '2022-08-30T09:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-30T06:00:00',
        end: '2022-08-30T07:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-31T06:00:00',
        end: '2022-08-31T07:00:00',
        color: "#DDFFF5",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T05:00:00',
        end: '2022-09-01T6:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T7:00:00',
        end: '2022-09-01T8:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T09:00:00',
        end: '2022-09-01T10:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-02T04:00:00',
        end: '2022-09-02T05:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-03T02:00:00',
        end: '2022-09-03T03:00:00',
        color: "#DDFFF5",
      },
    ],

    eventRender: function (event, element) {
      if (event.additionalInfo) {
        element.find(".fc-title").append("<p>hello</p>" + event.additionalInfo);
      }
    },
    // eventContent: { html: '<div class="monthly_event"><ul><li class="light_blue_event">Futsal (6 reservations)</li><li class="light_pink_event">Badminton (9 reservations)</li><li class="light_green_event">Tennis (4 reservations)</li></ul></div>' }
  });
  calendar.render();
});



// Tournament filter

$(".tournament-filter").click(function(){
  $(".tournament-filter-popup").toggleClass("active");
});
$(".tournament-filter").click(function(){
  $(".tournament-filter").toggleClass("active");
});
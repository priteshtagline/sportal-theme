$(document).ready(function () {
  // sidebar resize
  $(window).resize(function () {
    if ($(window).width() <= 1024) {
      $('.sidebar').addClass('active');
      $('.main-content').addClass('active');
      $('header').addClass('active');
    }
  });

  // sidebar - navtab
  $("#settings-tab").on('click', function () {
    $('.navbar-brand').html('Settings');
    $('#setting_nav_tab').show();
    $('#nav_search_field').hide();
  });

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
    $("header").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(this).toggleClass("active");
  });

  // Select2
  $(".select").select2({
    tags: true
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

  // Navbar
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 20) {
      jQuery("header").addClass("fixed-header");
    } else {
      jQuery("header").removeClass("fixed-header");
    }
  });

  // DataTable
  $('.display').DataTable();

  // $('.paginate_button.previous').html('<span class="material-symbols-outlined">arrow_left</span>');
  // $('.paginate_button.next').html('<span class="material-symbols-outlined">arrow_right</span>');

  // schedule
  $(".fc-addButton-button").attr("data-toggle", "modal").attr("href", "#add_shedule_modal");
  // $(".fc-filterButton-button").attr("data-toggle", "collapse").attr("href", "#schedule_filter").attr("type", "button").attr("aria-expanded", "#false").attr("aria-controls", "button").attr("aria-expanded", "#schedule_filter").append("<p>Append</p>");

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
    elms.innerHTML = '<span class="material-symbols-outlined">list</span>'
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
    initialView: 'dayGridMonth',
    firstDay: Monday = 1,
    showNonCurrentDates: false,
    height: 800,
    contentHeight: 600,
    allDaySlot: false,
    slotLabelInterval: "01:00",
    views: {
      dayGridMonth: {
        titleFormat: { month: 'long' }
      },
    },
    initialDate: "2022-09-01",
    events: [
      {
        title: 'Day 1',
        start: '2022-08-29T06:00:00',
        end: '2022-08-29T07:00:00',
        color: "#eff5f9",
        textColor: "",
        durationEditable: false,
        className: "free",
        additionalInfo: "A great event"
      },
      {
        title: 'Day 2',
        start: '2022-08-30T06:00:00',
        end: '2022-08-30T07:00:00',
      },
      {
        title: 'Day 3',
        start: '2022-08-31T06:00:00',
        end: '2022-08-31T07:00:00',
      },
      {
        title: 'Day 4',
        start: '2022-09-01T06:00:00',
        end: '2022-09-01T07:00:00',
      },
      {
        title: 'Day 5',
        start: '2022-09-02T06:00:00',
        end: '2022-09-02T07:00:00',
      },
      {
        title: 'Day 6',
        start: '2022-09-03T06:00:00',
        end: '2022-09-03T08:00:00',
      },
    ],

    eventContent: { html: '<div class="monthly_event"><ul><li class="light_blue_event">Futsal (6 reservations)</li><li class="light_pink_event">Badminton (9 reservations)</li><li class="light_green_event">Tennis (4 reservations)</li></ul></div>' }
    // events: 'https://fullcalendar.io/api/demo-feeds/events.json'
  });
  calendar.render();
});

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
  $("#overview-tab").on('click', function () {
    $('.navbar-brand').hide();
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
    editable: false,
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
        title: '<div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-08-30T08:00:00',
        end: '2022-08-30T09:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-08-30T06:00:00',
        end: '2022-08-30T07:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Tennis</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-08-31T06:00:00',
        end: '2022-08-31T07:00:00',
        color: "#DDFFF5",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-09-01T09:00:00',
        end: '2022-09-01T10:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-09-01T09:00:00',
        end: '2022-09-01T10:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-09-01T09:00:00',
        end: '2022-09-01T10:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-09-02T06:00:00',
        end: '2022-09-02T07:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Futsal Court 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div>',
        start: '2022-09-03T06:00:00',
        end: '2022-09-03T07:00:00',
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


// timeline_chart
var options = {
  series: [{
    name: 'Online Booking',
    data: [40, 42, 50, 52, 59, 55, 20, 30, 40, 55, 70, 10, 45, 30,]
  }, {
    name: 'Offline Booking',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 85, 80, 25, 56, 61,]
  }],
  colors: ['#A98FF1', '#764AF3',],
  chart: {
    type: 'bar',
    height: 450
  },
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'right',
    onItemHover: {
      highlightDataSeries: false
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      horizontal: false,
      columnWidth: '60%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Sept 18', 'Sept 19', 'Sept 20', 'Sept 21', 'Sept 22', 'Sept 23', 'Sept 24', 'Sept 25', 'Sept 26', 'Sept 27', 'Sept 28', 'Sept 29', 'Sept 30', 'Sept 31'],
    labels: {
      style: {
        colors: '#8e8da4',
      },
    },
  },
  yaxis: {
    lines: {
      show: true,
    },
    labels: {
      style: {
        colors: '#8e8da4',
      },
    },
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    position: 'back',
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      },
    },
  },

  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};
var chart = new ApexCharts(document.querySelector("#timeline_chart"), options);
chart.render();


// #sales_overview_chart
var options = {
  series: [43, 57,],
  chart: {
    width: 375,
    type: 'donut',
  },
  labels: ["Online Booking", "Offline Booking",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 50,
    height: 150,
  },
  responsive: [{
    breakpoint: 1201,
    options: {
      legend: {
        position: "bottom",
        height: 50,
        offsetY: 0,
      },
      chart: {
        width: 300,
      },
    }
  },
  {
    breakpoint: 1000,
    options: {
      legend: {
        position: "bottom",
        height: 50,
        offsetY: 0,
      },
      chart: {
        width: 320,
      },
    }
  }],
};

var chart = new ApexCharts(document.querySelector("#sales_overview_chart"), options);
chart.render();


function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}


// player_analytics_chart
var options = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }],
  chart: {
    height: 200,
    type: 'area',
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 1,
    colors: ["#8964F5",],
  },
  grid: {
    show: false,
  },
  xaxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Sun"],
    labels: {
      style: {
        colors: '#8e8da4',
      },
    },
  },
  yaxis: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#player_analytics_chart"), options);
chart.render();




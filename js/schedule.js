// Schedule
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var btn = document.getElementsByClassName("fc-filterButton-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-filterButton-button').item(0)
    elms.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" ></svg>'
  }, 0);

  var btn2 = document.getElementsByClassName("fc-addButton-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-addButton-button').item(0)
    elms.innerHTML = '<span class="material-symbols-rounded add_icon">add_circle</span><span>Add New</span>'
  }, 0);

  var btn3 = document.getElementsByClassName("fc-listMonth-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-listMonth-button').item(0)
    elms.innerHTML = '<span class="material-symbols-outlined">list</span> <svg id="Group_215" data-name="Group 215" xmlns="http://www.w3.org/2000/svg" width="12.438" height="12.438" viewBox="0 0 12.438 12.438"><path id="Path_68" data-name="Path 68" d="M.777,4.582v7.774a.777.777,0,0,0,.777.777h9.328a.777.777,0,0,0,.777-.777V4.582ZM1.555,2.25A1.555,1.555,0,0,0,0,3.8v8.551a1.555,1.555,0,0,0,1.555,1.555h9.328a1.555,1.555,0,0,0,1.555-1.555V3.8A1.555,1.555,0,0,0,10.883,2.25Z" transform="translate(0 -1.473)" fill="currentcolor" fill-rule="evenodd"/><path id="Path_69" data-name="Path 69" d="M7.139,0a.389.389,0,0,1,.389.389V.777a.389.389,0,0,1-.777,0V.389A.389.389,0,0,1,7.139,0Zm7,0a.389.389,0,0,1,.389.389V.777a.389.389,0,0,1-.777,0V.389A.389.389,0,0,1,14.135,0Z" transform="translate(-4.418)" fill="currentcolor" fill-rule="evenodd"/><path id="Path_70" data-name="Path 70" d="M25.139,13.5h.777a.389.389,0,0,1,.389.389v.777a.389.389,0,0,1-.389.389h-.777a.389.389,0,0,1-.389-.389v-.777A.389.389,0,0,1,25.139,13.5Z" transform="translate(-16.199 -8.836)" fill="currentcolor"/></svg>'
  }, 0);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    themeSystem: 'bootstrap4',

    customButtons: {
      filterButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" /></svg>; ',
        click: function () {
          $(".fc-filterButton-button").toggleClass("active");
          $(".filter-popup-schedule").toggleClass("active");
          $(".fc-header-toolbar .fc-filterButton-button").append($(".filter-popup-schedule"));
        },
      },
      menuButton: {
        html: '<span class="material-symbols-outlined">list</span>;'
      },
      addButton: {
        html: '<span class="material-symbols-rounded add_icon">add_circle</span><span>Add New</span>'
      },
    },
    buttonText: {
      month: 'Monthly',
      week: 'Weekly',
      day: 'Daily',
      listMonth: ' ',
    },
    headerToolbar: {
      left: 'title prev,next filterButton',
      center: 'timeGridDay,timeGridWeek,dayGridMonth',
      right: 'listMonth addButton',
    },
    initialView: 'timeGridWeek',
    editable: false,
    weekNumbers: false,
    dayMaxEvents: true,
    firstDay: Monday = 1,
    showNonCurrentDates: false,
    contentHeight: 'auto',
    allDaySlot: false,
    slotLabelInterval: "01:00",
    fixedWeekCount: false,
    navLinks: true,
    dayHeaderFormat: { weekday: 'long' },
    views: {
      dayGridMonth: {
        titleFormat: { month: 'long' }
      },
      dayGridWeek: {
        titleFormat: '{DD.{MM.}}YYYY'
      },
    },
    initialDate: "2023-01-03",
    eventContent: function (arg) {
      return { html: arg.event.title };
    },
    events: [
      {
        title: '<div class="schedule_event_wrap light_blue_event"><div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><span class="btn btn-sm btn-view radius-rounded"><img src="images/view-icon.svg" alt="view"><span>View</span></span></div></div>',
        start: '2023-01-03T00:00:00',
        end: '2023-01-03T01:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Badminton Court # 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-30T01:00:00',
        end: '2022-08-30T02:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap light_green_event"><div class="schedule_event"><span class="event_title">Tennis</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 4</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T02:00:00',
        end: '2022-09-01T03:00:00',
        color: "#DDFFF5",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-02T04:00:00',
        end: '2022-09-02T05:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap light_blue_event"><div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Courtyard # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-03T05:00:00',
        end: '2022-09-03T06:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-04T06:00:00',
        end: '2022-09-04T07:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap light_blue_event"><div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Badminton Court # 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-29T02:00:00',
        end: '2022-08-29T03:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 4</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-08-29T04:00:00',
        end: '2022-08-29T05:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap light_green_event"><div class="schedule_event"><span class="event_title">Tennis</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T06:00:00',
        end: '2022-09-01T07:00:00',
        color: "#DDFFF5",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Badminton Court # 1</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-02T08:00:00',
        end: '2022-09-02T09:00:00',
        color: "#F1DDFF",
      },
      {
        title: '<div class="schedule_event_wrap light_blue_event"><div class="schedule_event"><span class="event_title">Futsal</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Badminton Court # 2</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T03:00:00',
        end: '2022-09-01T04:00:00',
        color: "#DDECFF",
      },
      {
        title: '<div class="schedule_event_wrap light_pink_event"><div class="schedule_event"><span class="event_title">Badminton</span><span class="time">08:00 - 09:00 am</span><span class="court_title">Beach Front Arena - Court # 4</span><div class="schedule_profile"><img src="images/user_profile.png" alt="profile"><span class="user_name">Moeed Shahid</span></div></div><div class="event-btns"><a class="btn btn-sm btn-edit radius-rounded" data-toggle="modal" href="#edit_schedule_modal"><img src="images/edit.svg" alt="Cancel"><span>Edit</span></a><a class="btn btn-sm btn-cancel radius-rounded"><img src="images/cancel.svg" alt="Cancel"><span>Cancel</span></a></div></div>',
        start: '2022-09-01T00:00:00',
        end: '2022-09-01T01:00:00',
        color: "#F1DDFF",
      },
    ],
    eventMouseEnter: function (info) {
      $(info.el).children("div.fc-event-main").children("div.schedule_event_wrap").children("div.event-btns").show();
      var background_color = $(info.el).css('background-color');
      $(info.el).children("div.fc-event-main").children("div.schedule_event_wrap").children("div.event-btns").css('background', background_color);
    },
    eventMouseLeave: function (info) {
      $(info.el).children("div.fc-event-main").children("div.schedule_event_wrap").children("div.event-btns").hide();
    },
  });
  calendar.render();
});
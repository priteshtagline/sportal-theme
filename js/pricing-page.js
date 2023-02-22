// Schedule
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('pricing-calendar');
  var btn1 = document.getElementsByClassName("fc-pricingfilter-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-pricingfilter-button').item(0)
    elms.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" ></svg>'
  }, 0);

  var btn2 = document.getElementsByClassName("fc-pricingAdd-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-pricingAdd-button').item(0)
    elms.innerHTML = '<span class="material-symbols-rounded add_icon">add_circle</span><span>New Pricing</span>'
  }, 0);

  var btn3 = document.getElementsByClassName("fc-listWeek-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-listWeek-button').item(0)
    elms.innerHTML = '<span class="material-symbols-outlined">list</span>'
  }, 0);

  var btn4 = document.getElementsByClassName("fc-sportsDropdown-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-sportsDropdown-button').item(0)
    elms.innerHTML = '<select class="sorting_select" id="overview_custom_select"><option selected value = "futsal">Futsal</option><option value="football">Football</option><option value="cricket">Cricket</option><option value=">Badminton</option></select>'
  }, 0);
  var btn5 = document.getElementsByClassName("fc-SwitchView-button");
  setTimeout(() => {
    var elms = document.getElementsByClassName('fc-SwitchView-button').item(0)
    elms.innerHTML = 'Switch to Court View'
  }, 0);

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    themeSystem: 'bootstrap4',

    customButtons: {
      pricingfilter: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="10.833" height="11.403" viewBox="0 0 10.833 11.403"><path id="filter" d="M6.786,12.528H5.678V6.775L1.687,2.023v-.9H12.52v.894L8.719,6.77V10.6Zm-.347-.76h.033L7.959,10.28V6.5l3.694-4.618H2.564L6.438,6.5Z" transform="translate(-1.687 -1.125)" fill="currentcolor" /></svg>; ',
        click: function () {

          let clicked_count = localStorage.getItem("clicked")

          if (clicked_count) {
            clicked_count = parseInt(clicked_count) + 1
          } else {
            clicked_count = 1
          }
          if (clicked_count == 1) {
            $(".fc-header-toolbar .fc-toolbar-chunk:first-child").append($("#pricing-filter-popup"));
          }

          localStorage.setItem("clicked", clicked_count)

        },
      },
      pricinglist: {
        html: '<span class="material-symbols-outlined">list</span>;'
      },
      pricingAdd: {
        html: '<span class="material-symbols-rounded add_icon">add_circle</span><span>Add New</span>'
      },
      SwitchView: {
        html: 'SwitchtoCourtView',
        click: function () {
          calendar.changeView('timeGridDay')
        },
      },
    },
    buttonText: {
      week: 'Weekly',
      day: 'Daily',
      listWeek: ' ',
    },
    headerToolbar: {
      left: 'title prev,next pricingfilter',
      center: 'timeGridDay,timeGridWeek SwitchView',
      right: 'sportsDropdown listWeek pricingAdd',
    },
    initialView: 'timeGridWeek',
    editable: false,
    weekNumbers: false,
    dayMaxEvents: true,
    firstDay: Monday = 1,
    contentHeight: 'auto',
    allDaySlot: false,
    slotLabelInterval: "01:00",
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      meridiem: false
    },
    initialDate: "2023-02-13",
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
    eventContent: function (arg) {
      return { html: arg.event.title };
    },
    events: [
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-13T00:00:00',
        end: '2023-02-13T04:00:00',
        color: "#764af3",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-13T04:00:00',
        end: '2023-02-13T06:30:00',
        color: "#42D599",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-14T00:00:00',
        end: '2023-02-14T08:00:00',
        color: "#764af3",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-15T00:00:00',
        end: '2023-02-15T08:00:00',
        color: "#764af3",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-16T00:00:00',
        end: '2023-02-16T08:00:00',
        color: "#764af3",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-17T00:00:00',
        end: '2023-02-17T02:00:00',
        color: "#764af3",
      },
      {
        title: '<div class="pricing_event"><h6>50 AED</h6><p>10:00 am - 11:00 pm</p></div>',
        start: '2023-02-17T03:00:00',
        end: '2023-02-17T08:00:00',
        color: "#764af3",
      },
    ],
  });
  calendar.render();
});




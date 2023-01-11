// timeline_chart for dashboard
var timeline_chart_options = {
  series: [{
    name: 'Online Booking',
    data: [40, 42, 50, 52, 59, 55, 20, 30, 40, 55, 70, 10, 45, 30,]
  }, {
    name: 'Offline Booking',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 85, 80, 25, 56, 61,]
  }],
  colors: ['#764AF3', '#A98FF1',],
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
  yaxis:
  {
    axisBorder: {
      show: true,
      colors: '#8e8da4',
      width: 1,
      offsetX: -1,
      offsetY: 0,
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
};
var chart = new ApexCharts(document.querySelector("#timeline_chart"), timeline_chart_options);
chart.render();

// sales_overview_chart for dashboard
var sales_overview_options = {
  series: [43, 57,],
  chart: {
    width: "100%",
    height: 250,
    type: 'donut',
  },
  labels: ["Online Booking", "Offline Booking",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetX: 100,
    offsetY: 70,
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: -50,
      donut: {
        size: '70%',
        offsetY: 0,
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: '40px',
            offsetY: 16,
            formatter: function (val) {
              return val
            }
          },
          total: {
            show: true,
            color: '#373d3f',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0)
            },
          }
        }
      }
    }
  },
  responsive: [{
    breakpoint: 1500,
    options: {
      legend: {
        offsetY: 50,
        offsetX: 0,
      },
      plotOptions: {
        pie: {
          customScale: 0.9,
          offsetX: 0,
        },
      },
    },
  },
  {
    breakpoint: 1401,
    options: {
      chart: {
        width: "350px",
        height: 300,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          customScale: 0.9,
          offsetX: -35,
          donut: {
            size: '70%',
            offsetY: 0,
          }
        }
      },
      legend: {
        offsetX: 40,
        fontSize: 10,
        offsetY: 65,
      },
    },
  },
  ],
};

var chart = new ApexCharts(document.querySelector("#sales_overview_chart"), sales_overview_options);
chart.render();

// player_analytics_chart for dashboard
var player_analytics_options = {
  series: [{
    name: 'series1',
    data: [31, 40, 35, 60, 42, 50, 55]
  }],
  chart: {
    height: 250,
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
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
  responsive: [{
    breakpoint: 1500,
    options: {
      chart: {
        height: 170,
      },
    },
  },
  ],
  yaxis: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#player_analytics_chart"), player_analytics_options);
chart.render();

// reports_revenue_chart for Reports
var reports_revenue_options = {
  series: [{
    name: 'Income',
    type: 'column',
    data: [700, 1600, 1200, 800, 1300, 200, 750],
  }, {
    name: 'Revenue',
    type: 'line',
    data: [700, 1600, 1200, 800, 1300, 200, 750],
  }],
  markers: {
    size: 5,
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: "#764AF3",
      strokeColor: "#FFF",
      size: 13,
    }]
  },
  colors: ["#4E9AFE", "#A98FF1"],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      borderRadius: 4,
    }
  },
  stroke: {
    width: [1, 1],
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["January", "February", "March", "April", "May", "June", "July"],
    labels: {
      style: {
        colors: '#A4A9BC',
      },
    },
    lines: {
      show: true,
    }
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    position: 'back',
    yaxis: {
      lines: {
        show: false
      },
    },
  },
  yaxis: [
    {
      axisBorder: {
        show: true,
        colors: '#8e8da4',
        width: 1,
        offsetX: 3,
      },
      min: 0,
      labels: {
        style: {
          colors: '#A4A9BC',
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
      tooltip: {
        enabled: true
      }
    },
  ],
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#reports_revenue_chart"), reports_revenue_options);
chart.render();

// Payment Chart for Reports
var payment_options = {
  series: [43, 57,],
  chart: {
    width: "350px",
    height: 200,
    type: 'donut',
  },
  labels: ["Split Payment", "Single Pay",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 50,
    offsetX: -20,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "300px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 40,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
            donut: {
              size: '70%',
              offsetY: 0,
            }
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "350px",
          height: 300,
        },
        legend: {
          offsetX: 30,
          offsetY: 80,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_payment_chart"), payment_options);
chart.render();

// Sport Chart for Reports
var payment_options = {
  series: [50, 20, 30],
  chart: {
    width: "350px",
    height: 200,
    type: 'donut',
  },
  labels: ["Futsal", "Tennis", "Pedal",],
  colors: ['#4E9AFE', '#06D6A0', "#A98FF1",],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 50,
    offsetX: -10,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "265px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 20,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "320px",
          height: 300,
        },
        legend: {
          offsetX: 20,
          offsetY: 70,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_sports_chart"), payment_options);
chart.render();

// Product Chart For Report
var reports_product_options = {
  series: [43, 57,],
  chart: {
    width: "350px",
    height: 200,
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
    offsetX: -10,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "300px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 40,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
            donut: {
              size: '70%',
              offsetY: 0,
            }
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "350px",
          height: 300,
        },
        legend: {
          offsetX: 30,
          offsetY: 80,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_product_chart"), reports_product_options);
chart.render();

// Court Coverage Chart For Report
var reports_court_coverage_options = {
  series: [43, 57,],
  chart: {
    width: "350px",
    height: 200,
    type: 'donut',
  },
  labels: ["Outdoor", "Indoor",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 50,
    offsetX: -10,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "280px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 40,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
            donut: {
              size: '70%',
              offsetY: 0,
            }
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "330px",
          height: 300,
        },
        legend: {
          offsetX: 30,
          offsetY: 80,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_court_coverage_chart"), reports_court_coverage_options);
chart.render();

// Court Size Chart For Report

var reports_court_size_options = {
  series: [43, 57,],
  chart: {
    width: "350px",
    height: 200,
    type: 'donut',
  },
  labels: ["Outdoor", "Indoor",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 50,
    offsetX: -10,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "280px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 40,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
            donut: {
              size: '70%',
              offsetY: 0,
            }
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "330px",
          height: 300,
        },
        legend: {
          offsetX: 30,
          offsetY: 80,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_court_size_chart"), reports_court_size_options);
chart.render();

// Court Feature Chart For Report

var reports_court_feature_options = {
  series: [43, 57,],
  chart: {
    width: "350px",
    height: 200,
    type: 'donut',
  },
  labels: ["Cystal", "Syntehtic",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 25,
    offsetX: -10,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      offsetX: 0,

      donut: {
        size: '70%',
        offsetY: 0,
      }
    }
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: "280px",
          height: 200,
        },
        legend: {
          offsetX: 30,
          offsetY: 40,
        },
        plotOptions: {
          pie: {
            offsetX: -35,
            donut: {
              size: '70%',
              offsetY: 0,
            }
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: "330px",
          height: 300,
        },
        legend: {
          offsetX: 30,
          offsetY: 80,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_court_feature_chart"), reports_court_feature_options);
chart.render();

// Report_revenue_Breakdown_chart
var reports_breakdown_options = {
  series: [{
    data: [38, 25, 14, 7],
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      barHeight: '30%',
      distributed: true,
      horizontal: true,
    }
  },
  legend: {
    show: false,
  },
  colors: ['#DCD1FC', '#BAA4F9', '#9877F6', '#764AF3',],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['Online', 'Offline', 'Club Wallet', 'Club Offer',],
    labels: {
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#90A4AE',
      },
      formatter: function (value) {
        return value + "%";
      },
    },
  },
  yaxis:
  {
    labels: {
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#90A4AE',
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
        show: false,
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reports_breakdown_chart"), reports_breakdown_options);
chart.render();

//Reports_Revenue_Product_chart 

var revenue_product_options = {
  series: [{
    name: 'PRODUCT A',
    data: [20, 40, 40, 20, 10, 20, 15]
  }, {
    name: 'PRODUCT B',
    data: [10, 20, 20, 8, 13, 25, 20]
  }, {
    name: 'PRODUCT C',
    data: [08, 10, 15, 15, 21, 14, 15]
  }, {
    name: 'PRODUCT D',
    data: [04, 04, 04, 04, 04, 04, 04]
  }, {
    name: 'PRODUCT E',
    data: [04, 04, 04, 04, 04, 04, 04]
  }, {
    name: 'PRODUCT F',
    data: [04, 04, 04, 04, 04, 04, 04]
  }, {
    name: 'PRODUCT G',
    data: [04, 04, 04, 04, 04, 04, 04]
  }],
  chart: {
    type: 'bar',
    width: "100%",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#E5A24D",
    "#C000CC",
    "#00A3CC",
    "#7240FF",
    "#FF7FD8",
    "#3D8A7B",
    "#4FFFB3",
  ],
  xaxis: {
    categories: ['Sept 19', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 19', 'Sept 19',],
    labels: {
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#A4A9BC',
      }
    }
  },
  yaxis:
  {
    labels: {
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#A4A9BC',
      },
      formatter: function (value) {
        return "$" + value;
      },
    },
    axisBorder: {
      show: true,
      colors: '#A4A9BC',
      width: 1,
      offsetX: -1,
      offsetY: -4,
    },
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    position: 'back',
    xaxis: {
      lines: {
        show: false
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_revenue_product_chart"), revenue_product_options);
chart.render();

// Report Revenue Payment Type
var reports_revenue_payment_options = {
  series: [5, 60, 15, 10, 2, 3, 3, 2],
  chart: {
    type: 'donut',
    width: '600px',
    height: 360,
  },
  labels: ["Online Booking", "Offline Booking", "League", "Sportal Matches", "Tournament", "Offer", "Class", "Bookings Recurring",],
  colors: ['#4E9AFE', "#E5A24D", "#C000CC", "#00A3CC", "#7240FF", "#FF7FD8", "#3D8A7B", "#4FFFB3",],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 80,
    offsetX: -40,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      donut: {
        size: '80%',
      },
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: '420px',
          height: 360,
        },
        legend: {
          offsetX: 0,
          offsetY: 70,
          height: 200,
        },
        plotOptions: {
          pie: {
            offsetX: -20,
            offsetY: 65,
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: '500px',
          height: 360,
        },
        legend: {
          offsetX: -30,
          offsetY: 110,
          height: 200,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_revenue_payment_chart"), reports_revenue_payment_options);
chart.render();

// Report Player Activity
var report_player_activity_options = {
  series: [{
    name: 'series1',
    data: [10, 25, 25, 35, 55, 70, 55, 50, 60, 70]
  }],
  chart: {
    height: 250,
    type: 'area',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
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
    categories: ["Sept 17", "Sept 18", "Sept 19", "Sept 20", "Sept 21", "Sept 22", "Sept 23", "Sept 24", "Sept 25", "Sept 26"],
    labels: {
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#A4A9BC',
      }
    },
  },
  yaxis:
  {
    labels: {
      align: 'left',
      minWidth: 50,
      offsetX: -50,
      style: {
        fontFamily: 'Outfit Medium',
        fontFamily: 10,
        colors: '#A4A9BC',
      },
      title: {
        offsetX: 50,
      },
    },

    axisBorder: {
      show: true,
      colors: '#A4A9BC',
      width: 0.5,
      offsetX: 49,
      offsetY: -4,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reports_player_activity_chart"), report_player_activity_options);
chart.render();


// Report Players Payment Type
var reports_player_payment_options = {
  series: [5, 60, 15, 10, 2, 3, 3, 2],
  chart: {
    type: 'donut',
    width: '600px',
    height: 360,
  },
  labels: ["Online Booking", "Offline Booking", "League", "Sportal Matches", "Tournament", "Offer", "Class", "Bookings Recurring",],
  colors: ['#4E9AFE', "#E5A24D", "#C000CC", "#00A3CC", "#7240FF", "#FF7FD8", "#3D8A7B", "#4FFFB3",],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 80,
    offsetX: -40,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      donut: {
        size: '80%',
      },
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: '420px',
          height: 360,
        },
        legend: {
          offsetX: 0,
          offsetY: 70,
          height: 200,
        },
        plotOptions: {
          pie: {
            offsetX: -20,
            offsetY: 65,
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: '500px',
          height: 360,
        },
        legend: {
          offsetX: -30,
          offsetY: 110,
          height: 200,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_player_payment_chart"), reports_player_payment_options);
chart.render();

// Report Players Payment Type
var reports_player_payment_1_options = {
  series: [5, 60, 15, 10, 2, 3, 3, 2],
  chart: {
    type: 'donut',
    width: '600px',
    height: 360,
  },
  labels: ["Online Booking", "Offline Booking", "League", "Sportal Matches", "Tournament", "Offer", "Class", "Bookings Recurring",],
  colors: ['#4E9AFE', "#E5A24D", "#C000CC", "#00A3CC", "#7240FF", "#FF7FD8", "#3D8A7B", "#4FFFB3",],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 80,
    offsetX: -40,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      width: 10,
      height: 10,
      radius: 3,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      donut: {
        size: '80%',
      },
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: '420px',
          height: 360,
        },
        legend: {
          offsetX: 0,
          offsetY: 70,
          height: 200,
        },
        plotOptions: {
          pie: {
            offsetX: -20,
            offsetY: 65,
          }
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: '500px',
          height: 360,
        },
        legend: {
          offsetX: -30,
          offsetY: 110,
          height: 200,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#reports_player_payment_1_chart"), reports_player_payment_1_options);
chart.render();




// const link = document.querySelector('.charts');
// let method = link.getAttribute("data-legend-label")

// const para = document.createElement("div");
// para.classList.add("ss");
// para.innerText = method;
// document.querySelector("charts").prepend(para);
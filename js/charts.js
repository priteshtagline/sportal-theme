// timeline_chart for dashboard
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


// sales_overview_chart for dashboard
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
        fontFamily: 'Outfit Medium',
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


// player_analytics_chart for dashboard
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

// reports_revenue_chart for Reports
var options = {
  series: [{
    name: 'Income',
    type: 'column',
    data: [700, 1600, 1200, 800, 1300, 42, 750]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [700, 1600, 1200, 800, 1300, 42, 750],
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
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

var chart = new ApexCharts(document.querySelector("#reports_revenue_chart"), options);
chart.render();


// Payment Chart for Reports
var payment_options = {
  series: [43, 57,],
  chart: {
    width: 305,
    type: 'donut',
  },
  labels: ["Split Payment", "Single Pay",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 30,
    offsetX: -35,
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
};

var chart = new ApexCharts(document.querySelector("#reports_payment_chart"), payment_options);
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

// Sport Chart for Reports
var payment_options = {
  series: [50, 20, 30],
  chart: {
    width: 270,
    type: 'donut',
  },
  labels: ["Futsal", "Tennis", "Pedal",],
  colors: ['#4E9AFE', '#06D6A0', "#A98FF1",],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 20,
    offsetX: -35,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      radius: 3,
      width: 10,
      height: 10,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reports_sports_chart"), payment_options);
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
  return payment_options.series
}


// Product Chart For Report
var reports_product_options = {
  series: [43, 57,],
  chart: {
    width: 305,
    type: 'donut',
  },
  labels: ["Online Booking", "Offline Booking",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 30,
    offsetX: -35,
    height: 150,
    fontSize: '10px',
    fontFamily: 'Outfit Medium',
    colors: "#A4A9BC",
    markers: {
      radius: 3,
      width: 10,
      height: 10,
      offsetY: 2,
      offsetX: -4,
    },
    labels: {
      colors: "#A4A9BC",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reports_product_chart"), reports_product_options);
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
  return reports_product_options.series
}

// Court Coverage Chart For Report

var reports_court_coverage_options = {
  series: [43, 57,],
  chart: {
    width: 285,
    type: 'donut',
  },
  labels: ["Outdoor", "Indoor",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 40,
    offsetX: -35,
    height: 150,
    fontFamily: 'Outfit Medium',
    fontSize: '10px',
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
};

var chart = new ApexCharts(document.querySelector("#reports_court_coverage_chart"), reports_court_coverage_options);
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
  return reports_court_coverage_options.series
}

// Court Size Chart For Report

var reports_court_size_options = {
  series: [43, 57,],
  chart: {
    width: 285,
    type: 'donut',
  },
  labels: ["Outdoor", "Indoor",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 40,
    offsetX: -35,
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
};

var chart = new ApexCharts(document.querySelector("#reports_court_size_chart"), reports_court_size_options);
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
  return reports_court_size_options.series
}

// Court Feature Chart For Report

var reports_court_feature_options = {
  series: [43, 57,],
  chart: {
    width: 285,
    type: 'donut',
  },
  labels: ["Cystal", "Syntehtic",],
  colors: ['#4E9AFE', '#06D6A0',],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'right',
    offsetY: 40,
    offsetX: -35,
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
};

var chart = new ApexCharts(document.querySelector("#reports_court_feature_chart"), reports_court_feature_options);
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
  return reports_court_feature_options.series
}
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


// #sales_overview_chart for dashboard
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
    data: [10, 25, 30, 31, 40, 42, 45, 30]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft',
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  },
};

var chart = new ApexCharts(document.querySelector("#reports_revenue_chart"), options);
chart.render();



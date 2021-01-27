$(document).ready(function(){

//табы
    $(".tabs-button").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });
//конец табы/**

// Charts
var ctx = document.getElementById('chart-week').getContext('2d');
var ctx1 = document.getElementById('chart-month').getContext('2d');
var ctx2 = document.getElementById('chart-alltime').getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 0, 250);
gradient.addColorStop(0, 'rgba(0,205,205,0.7)');   
gradient.addColorStop(1, 'rgba(255,255,255,0)');

var customTooltips = function(tooltip) {
    // Tooltip Element
    var tooltipEl = document.getElementById('chartjs-tooltip');

    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.innerHTML = "<table></table>"
        document.body.appendChild(tooltipEl);
    }

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
    }

    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform', 'top');
    if (tooltip.yAlign) {
        tooltipEl.classList.add(tooltip.yAlign);
    } else {
        tooltipEl.classList.add('no-transform');
    }

    function getBody(bodyItem) {
        return bodyItem.lines;
    }

    // Set Text
    if (tooltip.body) {
        var titleLines = tooltip.title || [];
        var bodyLines = tooltip.body.map(getBody);

        var innerHtml = '<thead>';
        bodyLines.forEach(function(body, i) {
            var colors = tooltip.labelColors[i];
            var style = 'background:' + colors.backgroundColor;
            style += '; border-color:' + colors.borderColor;
            style += '; border-width: 2px'; 
            innerHtml += '<tr><th>' + parseFloat(body).toFixed(2) + "$" + '</th></tr>';
        });
        
        innerHtml += '</thead><tbody>';

        titleLines.forEach(function(title) {
            innerHtml += '<tr><td>'  + title +'</td></tr>';
        });
        innerHtml += '</tbody>';

        var tableRoot = tooltipEl.querySelector('table');
        tableRoot.innerHTML = innerHtml;
    }

    var position = this._chart.canvas.getBoundingClientRect();

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = position.left + tooltip.caretX + 'px';
    tooltipEl.style.top = position.top + tooltip.caretY + 'px';
    tooltipEl.style.fontFamily = tooltip._fontFamily;
    tooltipEl.style.fontSize = tooltip.fontSize;
    tooltipEl.style.fontStyle = tooltip._fontStyle;
    tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
    
};



var myChartWeek = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug","7 Aug"],
        datasets: [{
            borderColor: "#00cdcd",
            backgroundColor: gradient,
            pointBackgroundColor: "#00cdcd",
            pointHoverBorderColor: 'rgba(0,205,205,0.3)',
            pointHoverBorderWidth: '10',
            radius: 0,
            data: [1.25,1.89,3.47,2.85,4.00,4.20,5.62]
        }]
    },
    options: {
        
        legend: {
            display: false,
            labels: {
                               
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$ ' + value + '.00  ';
                    },
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE',
                    precision: 0,
                }
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE'
                    
                }
            }]
        },
        tooltips: {
            enabled: false,
            mode: 'index',
            position: 'nearest',
            custom: customTooltips
        },
        hover: {
            intersect: false,
        }
    }
});
var myChartMonth = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug","7 Aug","8 Aug","9 Aug","10 Aug","11 Aug","12 Aug","13 Aug","14 Aug",
                "15 Aug","16 Aug","17 Aug","18 Aug","19 Aug","20 Aug","21 Aug","22 Aug","23 Aug","24 Aug","25 Aug","26 Aug","27 Aug","28 Aug","29 Aug","30 Aug"],
        datasets: [{
            borderColor: "#00cdcd",
            backgroundColor: gradient,
            pointBackgroundColor: "#00cdcd",
            pointHoverBorderColor: 'rgba(0,205,205,0.3)',
            pointHoverBorderWidth: '10',
            radius: 0,
            data: [1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,4.00,4.20]
        }]
    },
    options: {
        
        legend: {
            display: false,
            labels: {
                               
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$ ' + value + '.00  ';
                    },
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE',
                    precision: 0,
                }
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE',
                    autoSkip: true
                },
                beginAtZero: true
            }]
        },
        tooltips: {
            enabled: false,
            mode: 'index',
            position: 'nearest',
            custom: customTooltips
        },
        hover: {
            intersect: false,
        }
    }
});

var myChartAllTime = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug","7 Aug","8 Aug","9 Aug","10 Aug","11 Aug","12 Aug","13 Aug","14 Aug",
                "15 Aug","16 Aug","17 Aug","18 Aug","19 Aug","20 Aug","21 Aug","22 Aug","23 Aug","24 Aug","25 Aug","26 Aug","27 Aug","28 Aug","29 Aug","30 Aug"],
        datasets: [{
            borderColor: "#00cdcd",
            backgroundColor: gradient,
            pointBackgroundColor: "#00cdcd",
            pointHoverBorderColor: 'rgba(0,205,205,0.3)',
            pointHoverBorderWidth: '10',
            radius: 0,
            data: [1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,1.25,1.89,3.47,2.85,4.00,4.20,5.62,4.00,4.20]
        }]
    },
    options: {
        
        legend: {
            display: false,
            labels: {
                               
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$ ' + value + '.00  ';
                    },
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE',
                    precision: 0,
                }
            }],
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                    fontFamily: "'Roboto-Regular', 'sans-serif'",
                    fontColor: '#ADC3CE',
                    autoSkip: true,
                },
                beginAtZero: true,
            }]
        },
        tooltips: {
            enabled: false,
            mode: 'index',
            position: 'nearest',
            custom: customTooltips
        },
        hover: {
            intersect: false,
        }
    }
});

});/**
 * Created by Nafta on 24.12.2020.
 */

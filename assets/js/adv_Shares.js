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
var ctx = document.getElementById('chart-line').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug","7 Aug"],
        datasets: [{
            fill: 'rgba(0, 205, 205, 1)',
            data: [1.25,1.89,3.47,2.85,4.00,4.20,5.62]
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        }
    }
});

});/**
 * Created by Nafta on 24.12.2020.
 */

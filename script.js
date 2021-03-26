//global variable
var selectChartType = "";

function selectType() {
  const chartTypeSelector = document.getElementById("select-chart-type");
  let selectChartType =
    chartTypeSelector.options[chartTypeSelector.selectedIndex].value;
  createChart(selectChartType);
}

//create the chart with selected chart type option
function createChart(selectChartType) {
  var myChart = new Chart(document.getElementById("chart"), {
    type: selectChartType,
    data: {
      labels: ["JavaScript", "HTML/CSS", "SQL", "Python", "Java"],
      datasets: [
        {
          label: "Percentage ",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
          ],
          data: [67.7, 63.1, 54.7, 44.1, 40.2],
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "Percentage ",
      },
      events: null,
    },
  });
}

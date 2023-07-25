const xValues = ["01", "02", "03", "04", "05", "06", "07"];
const yValues = [8, 49, 44, 24, 15];
const barColors = ["hsl(160, 64%, 69%)", "hsl(209, 86%, 80%)", "hsl(34, 100%, 72%)", "hsl(0, 73%, 59%)", "hsl(48, 100%, 53%)"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
  
        
      },
    },
  },
});

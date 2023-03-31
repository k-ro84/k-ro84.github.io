/**
 chart pendiente  de uso, aun no logro hacero funcionar, debo investigar mas cmo integrarlo*/
 var xValues = ["si", "no", "no sabe/no responde"];
var yValues = [35,45,20 ];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "¿Está de acuerdo con el uso de IA en las aulas?"
    }
  }
});

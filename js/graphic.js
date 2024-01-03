const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    datasets: [
      {
        label: 'Gráfico visão geral',
        data: [12, 19, 3, 5, 2, 3, 12, 8, 15],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

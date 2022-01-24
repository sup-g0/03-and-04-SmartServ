const netflixPrice = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(netflixPrice, {
    type: 'bar',
    data: {
        labels: ['France', 'Germany', 'India', 'Japan', 'United States', 'Canada'],
        datasets: [
            //label: '# of Votes',
            //datasets: [10.16, 9.03, 2.64, 8.73,8.99, 7.91],[15.24,14.67,6.67,13.13,13.99,11.87],
            {
              label: 'Base Price',
              data:[10.16, 9.03, 2.64, 8.73,8.99, 7.91],
              backgroundColor: [
                ' #62b72c'
              ],
              borderColor: [
                'black'
              ],
              borderWidth: 1
            },
            {
              label: 'Standard Price',
              data:[15.24,14.67,6.67,13.13,13.99,11.87],
              backgroundColor: [
                ' #5800FF'
              ],
              borderColor: [
                'black'
              ],
              borderWidth: 1
            },
            {
              label: 'Premium Price',
              data:[20.32,20.32,8.6,17.48,17.99,15.03],
              backgroundColor: [
                ' #FF1700'
              ],
              borderColor: [
                'black'
              ],
              borderWidth: 1
            }


          
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

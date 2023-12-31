import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const TwoCriteriaGraph = (props) => {
    const {graphData} = props;

    const labels = ["Low", "Avg", "Max"];
    const data = {
    labels: labels,
    datasets: [{
      data: graphData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
      ],
      borderWidth: 1
    }],
  };

  const options = {
      plugins: {
          title: {
              display: true,
              text: 'Position & Classification Search Criteria',
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              generateLabels: () => {
                return [{
                    //datasetIndex: 0, // Since its all 1 dataset just hide if it gets clicked, remove this line for legend click to do nothing
                    text: `Low: $${graphData[0]}`,
                    fillStyle: 'rgba(255, 99, 132, 0.2)',
                    strokeStyle: 'rgba(255, 99, 132, 0.2)'
                  },
                  {
                    //datasetIndex: 0, // Since its all 1 dataset just hide if it gets clicked, remove this line for legend click to do nothing
                    text: `Average: $${Math.floor(graphData[1])}`,
                    fillStyle:   'rgba(255, 159, 64, 0.2)',
                    strokeStyle:   'rgba(255, 159, 64, 0.2)'
                  },
                  {
                    //datasetIndex: 0, // Since its all 1 dataset just hide if it gets clicked, remove this line for legend click to do nothing
                    text: `Max: $${graphData[2]}`,
                    fillStyle: 'rgba(255, 205, 86, 0.2)',
                    strokeStyle: 'rgba(255, 205, 86, 0.2)'
                  }
                ];
              }
            }
        }
  }}

    return (
        <>
        <Bar data={data} options={options}></Bar>
        </>
    )
}

export default TwoCriteriaGraph;
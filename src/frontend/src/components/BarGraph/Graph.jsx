import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const Graph = (props) => {
    const {graphData} = props;
    const labels = ["Low", "Avg", "Max"];
    const data = {
    labels: labels,
    datasets: [{
      data: [60000, 70000, 100000],
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
    }]
  };

    return (
        <>
        <Bar data={data}></Bar>
        </>
    )
}

export default Graph;
import React, { Component } from "react";
import Chart from "react-apexcharts";
//To create a basic bar chart with minimal configuration, write as follows:

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: ["Day 1", "Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [3, 2, 3, 4, 5, 6, 7, 6, 5,8],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={500}
        height={320}
      />
    );
  }
}

export default BarChart;

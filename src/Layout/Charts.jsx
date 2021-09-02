import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const state = {
  //   maintainAspectRatio: true,
  labels: ["Total Naira Savings", "Total Dollar Savings"],
  datasets: [
    {
      label: "Social Media Platforms",
      backgroundColor: ["#08B29B", "#0553C8"],
      hoverBackgroundColor: ["#08B29B", "#0553C8"],
      data: [60, 40],
      borderWidth: 0,
      borderRadius: 0,
      radius: "100%",
      cutout: "80%",
    },
  ],
};

const ChartT = styled.div`
  margin-top: -180px;
`;

const Charts = () => {
  return (
    <ChartT>
      <Doughnut
        data={state}
        width={500}
        height={500}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "bottom",
            },
            title: {
              display: true,
              // text: 'Chart.js Doughnut Chart',
              padding: { top: 100, left: 0, right: 0, bottom: 0 },
            },
          },
          elements: {
            center: {
                text: "₦10,000,000.00",
                color: "#333333", // Default is #000000
                fontStyle: "Comfortaa", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 12, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25, // Default is 25 (in px), used for when text wraps
            },
        }}
    }
      />
    </ChartT>
  );
};

export default Charts;

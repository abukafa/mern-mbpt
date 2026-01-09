import { ChartJSNodeCanvas } from "chartjs-node-canvas";

export async function chartImage(scores) {
  const width = 500;
  const height = 500;

  const canvas = new ChartJSNodeCanvas({ width, height });

  const config = {
    type: "radar",
    data: {
      labels: ["Vision", "Meaning", "Fear", "Validation"],
      datasets: [
        {
          data: [scores.vision, scores.meaning, scores.fear, scores.validation],
          backgroundColor: "rgba(99,102,241,0.2)",
          borderColor: "rgba(99,102,241,1)",
        },
      ],
    },
    options: {
      scales: { r: { min: 0, max: 100 } },
      plugins: { legend: { display: false } },
    },
  };

  return await canvas.renderToDataURL(config);
}

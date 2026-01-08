import { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";

export default function Chart({ scores }) {
  const canvasRef = useRef(null);
  console.log(scores);

  useEffect(() => {
    if (!scores) return;

    const chart = new ChartJS(canvasRef.current, {
      type: "radar",
      data: {
        labels: ["Vision", "Meaning", "Fear", "Validation"],
        datasets: [
          {
            label: "Motivasi",
            data: [
              scores.vision,
              scores.meaning,
              scores.fear,
              scores.validation,
            ],
            backgroundColor: "rgba(99,102,241,0.2)",
            borderColor: "rgba(99,102,241,1)",
          },
        ],
      },
      options: {
        scales: { r: { min: 0, max: 100 } },
        plugins: { legend: { display: false } },
      },
    });

    return () => chart.destroy();
  }, [scores]);

  return (
    <div className="w-full h-full bg-white/80 dark:bg-gray-800/70 rounded-3xl p-4 md:p-8 shadow transition-transform duration-700 ease-in-out scale-100 hover:scale-105">
      <h2 className="font-semibold mb-4 hidden lg:block">Peta Motivasi</h2>
      <div className="place-items-center w-max h-max mx-auto">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

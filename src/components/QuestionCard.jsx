import { scale } from "../data/scale";
import "../styles/question.card.css";

export default function QuestionCard({
  question,
  motivation,
  weight,
  onAnswer,
}) {
  return (
    <section className="rounded-2xl p-6 bg-white/80 dark:bg-gray-800/70 shadow">
      {/* <!-- Question --> */}
      <div className="mb-6 text-center">
        <h2
          className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-3"
          id="question"
        >
          {question}
        </h2>
        <p className="text-slate-400 dark:text-gray-600 text-sm mb-4" id="hint">
          Pilih skala 1 s.d. 5 yang paling sesuai dengan pernyataan.
        </p>
      </div>

      {/* <!-- Slider --> */}
      <div className="flex items-center justify-center md:justify-between max-w-xl my-8">
        <span className="text-sm text-indigo-500 hidden md:block">
          Tidak Setuju
        </span>

        <div className="flex items-center gap-2">
          {scale.map((opt, i) => (
            <button
              key={i}
              onClick={() =>
                onAnswer({
                  type: motivation,
                  value: opt.value * weight,
                })
              }
              className="dot cursor-pointer"
            >
              {i + 1}
            </button>
          ))}
        </div>

        <span className="text-sm text-indigo-500 text-right hidden md:block">
          Sangat Setuju
        </span>
      </div>
    </section>
  );
}

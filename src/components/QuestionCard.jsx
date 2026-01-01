import { scale } from "../data/scale";

export default function QuestionCard({
  question,
  motivation,
  weight,
  onAnswer,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>

      <div className="space-y-2">
        {scale.map((opt, i) => (
          <button
            key={i}
            onClick={() =>
              onAnswer({
                type: motivation,
                value: opt.value * weight,
              })
            }
            className="w-full border rounded-lg p-3 hover:bg-gray-100"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

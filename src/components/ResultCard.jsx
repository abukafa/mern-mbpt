export default function ResultCard({ id, label, insight, suggestions }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h2 className="text-xl font-bold mb-2">{label}</h2>
      <h2 className="text-xl font-bold text-blue-600 mb-2">{id}</h2>
      <p className="text-gray-600">{insight}</p>
      <ul className="text-gray-600 mt-6 list-disc list-inside text-left">
        {suggestions.map((s, i) => (
          <li key={i} className="mb-2">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

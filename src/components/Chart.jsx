export default function Chart({ scores }) {
  return (
    <div className="space-y-3">
      {Object.entries(scores).map(([key, val]) => (
        <div key={key}>
          <div className="flex justify-between text-sm mb-1">
            <span>{key}</span>
            <span>{val}%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-green-600 h-2 rounded"
              style={{ width: `${val}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

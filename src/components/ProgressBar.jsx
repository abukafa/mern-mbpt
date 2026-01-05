export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="px-4">
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-slate-400 my-2">
        <span>
          Pertanyaan {current} dari {total}
        </span>
        <span>{percent}%</span>
      </div>
    </div>
  );
}

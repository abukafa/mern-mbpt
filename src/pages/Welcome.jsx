import { TestContext } from "../context/TestContext";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          Personality & Motivation Test
        </h1>
        <p className="text-gray-600 mb-6">
          Kenali tipe motivasi yang paling cocok buat kamu
        </p>
        <button
          onClick={() => navigate("/test")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Mulai Test
        </button>
      </div>
    </div>
  );
}

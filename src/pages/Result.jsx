import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import ResultCard from "../components/ResultCard";
import Chart from "../components/Chart";
import { resultProfiles } from "../data/resultProfiles";

export default function Result() {
  function isSameCombo(a, b) {
    const A = a.split("+");
    const B = b.split("+");
    return A.length === B.length && A.every((x) => B.includes(x));
  }

  const { state } = useContext(TestContext);
  const result = resultProfiles.find((r) => isSameCombo(r.id, state.resultKey));
  console.log(state);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow max-w-lg w-full space-y-6">
        <ResultCard
          id={result.id}
          label={result.label}
          insight={result.insight}
          suggestions={result.suggestions}
        />
        <Chart scores={state.scores} />
      </div>
    </div>
  );
}

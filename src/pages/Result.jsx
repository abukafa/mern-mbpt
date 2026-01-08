import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import ResultCard from "../components/ResultCard";
import { resultProfiles } from "../data/resultProfiles";

export default function Result() {
  function isSameCombo(a, b) {
    const A = a.split("+");
    const B = b.split("+");
    return A.length === B.length && A.every((x) => B.includes(x));
  }

  const { state } = useContext(TestContext);
  const profile = resultProfiles.find((r) =>
    isSameCombo(r.id, state.resultKey)
  );
  console.log("state: " + state);

  return (
    <>
      <ResultCard profile={profile} scores={state.scores} />
    </>
  );
}

import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const { state, dispatch } = useContext(TestContext);
  const question = questions[state.step];
  const navigate = useNavigate();
  console.log(state);

  const handleAnswer = (opt) => {
    dispatch({
      type: "ANSWER",
      payload: opt,
    });

    if (state.step === questions.length - 1) {
      dispatch({ type: "CALCULATE_RESULT" });
      navigate("/result");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl space-y-4">
        <ProgressBar current={state.step + 1} total={questions.length} />
        <QuestionCard
          question={question.text}
          motivation={question.motivation}
          weight={question.weight}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}

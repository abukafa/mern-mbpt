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
    <div class="text-slate-100 min-h-[80vh] flex items-center justify-center">
      <main class="w-full max-w-xl px-5">
        <div class="flex items-center justify-center">
          <img
            src="img/adults.png"
            class="h-40 w-full object-cover"
            alt=""
            id="heroImage"
          />
        </div>
        <ProgressBar current={state.step + 1} total={questions.length} />
        <QuestionCard
          question={question.text}
          motivation={question.motivation}
          weight={question.weight}
          onAnswer={handleAnswer}
        />
      </main>
    </div>
  );
}

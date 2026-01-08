import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { UIContext } from "../context/UIContext";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const { state, dispatch } = useContext(TestContext);
  const { audience } = useContext(UIContext);
  const question = questions[audience][state.step];
  const navigate = useNavigate();
  console.log(state);

  const handleAnswer = (opt) => {
    dispatch({
      type: "ANSWER",
      payload: opt,
    });

    if (state.step === questions[audience].length - 1) {
      dispatch({ type: "CALCULATE_RESULT" });
      navigate("/result");
    }
  };

  if (!question) return null;

  return (
    <div className="text-slate-100 min-h-[80vh] flex items-center justify-center">
      <main className="w-full max-w-xl px-5">
        <div className="flex items-center justify-center">
          <img
            src={audience == "adult" ? "img/adults.png" : "img/kids.png"}
            className="h-40 w-full object-cover"
            alt=""
            id="heroImage"
          />
        </div>
        <ProgressBar
          current={state.step + 1}
          total={questions[audience].length}
        />
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

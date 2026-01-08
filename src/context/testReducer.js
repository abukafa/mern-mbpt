import { normalizeScores, determineDominant } from "../utils/score";

export const initialState = {
  step: 0,
  answers: [],
  rawScores: {
    vision: 0,
    meaning: 0,
    validation: 0,
    fear: 0,
  },
  scores: null,
  resultKey: null,
};

export function testReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "ANSWER":
      return {
        ...state,
        answers: [...state.answers, action.payload],
        rawScores: {
          ...state.rawScores,
          [action.payload.type]:
            state.rawScores[action.payload.type] + action.payload.value,
        },
        step: state.step + 1,
      };

    case "CALCULATE_RESULT": {
      const scores = normalizeScores(state.rawScores);
      const resultKey = determineDominant(scores);

      return {
        ...state,
        scores,
        resultKey,
      };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

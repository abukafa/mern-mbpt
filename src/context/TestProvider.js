import { useReducer } from "react";
import { TestContext } from "./TestContext";
import { testReducer, initialState } from "./testReducer";

export default function TestProvider({ children }) {
  const [state, dispatch] = useReducer(testReducer, initialState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
}

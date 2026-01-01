import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestProvider from "./context/TestProvider";

import Welcome from "./pages/Welcome";
import Test from "./pages/Test";
import Result from "./pages/Result";

function App() {
  return (
    <TestProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </TestProvider>
  );
}

export default App;

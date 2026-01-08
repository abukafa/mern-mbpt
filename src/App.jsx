import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestProvider from "./context/TestProvider";
import { UIProvider } from "./context/UIProvider";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <TestProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<About />} />
              <Route path="/test" element={<Test />} />
              <Route path="/result" element={<Result />} />
              <Route path="/result/:id" element={<Review />} />
            </Route>
          </Routes>
        </TestProvider>
      </UIProvider>
    </BrowserRouter>
  );
}

export default App;

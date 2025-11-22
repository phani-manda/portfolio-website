import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingFallback from './components/LoadingFallback';

// Lazy load the Portfolio component
const Portfolio = lazy(() => import("./components/Portfolio"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
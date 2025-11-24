import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingFallback from './components/LoadingFallback';

// Lazy load the Portfolio component
const Portfolio = lazy(() => import("./components/Portfolio"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
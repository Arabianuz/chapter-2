import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import logo from "./assets/logo.svg";
import Profile from "./pages/Profile";
import "./App.css";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="Arabianuz" />} />
          <Route path="/projects" element={<Projects userName="Arabianuz" />} />
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="Arabianuz" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

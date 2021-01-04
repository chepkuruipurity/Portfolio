import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import resumeData from "./components/data";

function App() {
  return (
    <div className="App bg">
      <Header resumeData={resumeData} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Portfolio resumeData={resumeData} />} />
          <Route path="/blog" element={<Blog resumeData={resumeData} />} />
          <Route
            path="/contact"
            element={<Contact resumeData={resumeData} />}
          />
        </Routes>
      </div>
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;

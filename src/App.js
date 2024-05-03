"use client";
import { useState } from "react";
import "./App.css";
import SymptomsInput from "./compoents/SymptomsInput";
import Predictions from "./compoents/Predictions";
import Navbar from "./compoents/Navbar";
import Footer from "./compoents/Footer";

function App() {
  const styles = {
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  };

  const [pred, setPred] = useState(null);

  return (
    <div className="flex flex-col min-h-screen relative mx-10" style={styles}>
      <div className="flex-1 flex flex-col relative z-10">
        <Navbar />
        <div className="flex-1">
          <SymptomsInput setPred={setPred} />
          <Predictions pred={pred} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import InputForm from "./components/InputForm";
import FailureResult from "./components/FailureResult";
import Charts from "./components/Charts";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState(null);
  const [riskResult, setRiskResult] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);

  const thresholds = {
    temperature: 75,
    vibration: 50,
    powerUsage: 200,
    humidity: 70,
  };

  const calculateRisk = (data) => {
    const { temperature, vibration, powerUsage, humidity } = data;
    let risk = "Low";

    if (
      temperature > thresholds.temperature ||
      vibration > thresholds.vibration ||
      powerUsage > thresholds.powerUsage ||
      humidity > thresholds.humidity
    ) {
      risk = "Medium";
    }

    if (
      temperature > thresholds.temperature * 1.2 ||
      vibration > thresholds.vibration * 1.2 ||
      powerUsage > thresholds.powerUsage * 1.2 ||
      humidity > thresholds.humidity * 1.2
    ) {
      risk = "High";
    }

    return risk;
  };

  const handleFormSubmit = (data) => {
    setInputData(data);
    const risk = calculateRisk(data);
    setRiskResult(risk);
    setHistoricalData((prev) => [...prev, { ...data, riskLevel: risk }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Machine Failure Detection</h1>
      </header>
      <main>
        <InputForm onSubmit={handleFormSubmit} />
        {riskResult && <FailureResult result={riskResult} />}
        <Charts data={historicalData} />
      </main>
      <footer>
        <p>© 2024 Machine Monitoring System</p>
      </footer>
    </div>
  );
}

export default App;

import Piechart from "./Components/Piechart";
import "./App.css";
import { useState } from "react";
import Slider from "./Components/Slider";

function App() {
  let [financialData, setHomeValue] = useState({
    homeValue: 3000,
    downPayment: 600,
    loanAmount: 2400,
    interestRate: 5,
    tenure: 5,
  });

  return (
    <div className="App">
      <div className="container">
        <Slider
          min="1000"
          max="10000"
          name="homeValue"
          title="Home Value"
          value={financialData.homeValue}
          step="100"
          data={financialData}
          updateData={setHomeValue}
          sign="$ "
          secondarySign=""
        />
        <Slider
          min="0"
          max={financialData.homeValue}
          name="downPayment"
          title="Down Payment"
          value={financialData.downPayment}
          step="100"
          data={financialData}
          updateData={setHomeValue}
          sign="$ "
          secondarySign=""
        />
        <Slider
          min="0"
          max={financialData.homeValue}
          name="loanAmount"
          title="Loan Amount"
          value={financialData.loanAmount}
          step="100"
          data={financialData}
          updateData={setHomeValue}
          sign="$ "
          secondarySign=""
        />
        <Slider
          min="2"
          max="18"
          name="interestRate"
          title="Interest Rate"
          value={financialData.interestRate}
          data={financialData}
          updateData={setHomeValue}
          sign="% "
          secondarySign=""
        />
        <Slider
          min="5"
          max="25"
          name="tenure"
          title="Tenure"
          value={financialData.tenure}
          step="5"
          data={financialData}
          updateData={setHomeValue}
          sign=""
          secondarySign=" years"
        />
      </div>
      <Piechart data={financialData} />
    </div>
  );
}

export default App;

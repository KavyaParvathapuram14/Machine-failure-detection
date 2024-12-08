import React from "react";

function FailureResult({ result }) {
  return (
    <div>
      <h2>Risk Assessment</h2>
      <p>The machine's risk level is: <strong>{result}</strong></p>
    </div>
  );
}

export default FailureResult;

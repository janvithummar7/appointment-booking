import React from "react";
const Progress = ({ activeSteps }) => {
  const totalSteps = 6;  // Total number of steps
  return (
    <section id="progressbar" className="my-5">
      <div className="stepper-wrapper mt-5">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            className={`stepper-item ${
              index < activeSteps ? "completed" : ""
            } ${index === activeSteps ? "active" : ""}`}
            key={index}
             
          >
            <div className="step-counter">{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Progress;
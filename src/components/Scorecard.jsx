import React from "react";

const Scorecard = ({ score }) => {
  const scoreFaces = ["😄", "🙂", "😐", "😕", "😞", "😭", "😵", "👻"];
  
  return (
    <div className="scorecard_comp">
      <p className="score-emoji">{scoreFaces[score]}</p>
    </div>
  );
};

export default Scorecard;

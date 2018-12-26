import React from "react";

const Action = ({ hasOptions, handlePick }) => (
  <div>
    <button className="big-button" disabled={!hasOptions} onClick={handlePick}>
      What should I do?
    </button>
  </div>
);

export default Action;

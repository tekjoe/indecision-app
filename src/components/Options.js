import React from "react";
import Option from "./Option";

const Options = ({ options, handleDeleteOption, handleDeleteOptions }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove All
      </button>
    </div>

    {options.length > 0 ? (
      options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          optionText={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))
    ) : (
      <p className="widget__message">Please enter an option to begin.</p>
    )}
  </div>
);

export default Options;

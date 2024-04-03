import React from "react";
const Input = ({ label, plceholder }) => {
  console.log("label is", label, "placeholder ", plceholder);
  return (
    <div
      className="relative flex flex-col"
      style={{ border: "0.1px solid #ddd" }}
    >
      <span className="bg-[#ffff] inputFiledSpan"></span>
      <label
        htmlFor=""
        className="inputFiledLabel"
        style={{ fontFamily: "Roboto', sans-serif'" }}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={plceholder}
        className="inputFiled outline-none px-5 py-3"
      />
    </div>
  );
};

export default Input;

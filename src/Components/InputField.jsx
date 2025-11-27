import React, { useState } from "react";

const InputField = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}) => {
  return (
    <div className="relative mb-5">
      <div className="absolute top-[17px] left-4">{icon}</div>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 
      text-gray-200 focus:border-cyan-400 outline-none transition-all"
      />
    </div>
  );
};
export default InputField;

import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, type, options, ...inputProps } =
    props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {type === "select" ? (
        <select
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={handleFocus}
          value={inputProps.value}
        >
          <option value="" disabled hidden className="placeholderOption">
            {inputProps.placeholder}
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          {...inputProps}
          type="file"
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={handleFocus}
        />
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={handleFocus}
          focused={focused.toString()}
        />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;

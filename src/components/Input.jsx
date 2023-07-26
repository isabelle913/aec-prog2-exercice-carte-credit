import React from "react";
import BsInput from "react-bootstrap/FormControl";

const Input = ({ type, value, id, onChange, placeholder }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    //console.log(value);
    onChange(value, event.target.id);
  };

  return (
    <BsInput
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      id={id}></BsInput>
  );
};

export default Input;

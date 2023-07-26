import React from 'react';
//import react library

const InputField = ({ label, value, onChange }) => {
// define input field component 
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;

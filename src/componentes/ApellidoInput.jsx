import React from 'react';

const ApellidoInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" id="nombre" value={value} onChange={onChange} />
    </div>
  );
};

export default ApellidoInput;
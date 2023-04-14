import React from 'react';

const EmailInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="nombre" value={value} onChange={onChange} />
    </div>
  );
};

export default EmailInput;
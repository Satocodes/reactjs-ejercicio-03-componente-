import React from 'react';

const TelefonoInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="telefono">Telefono:</label>
      <input type="number" id="telefono" value={value} onChange={onChange} />
    </div>
  );
};

export default TelefonoInput;
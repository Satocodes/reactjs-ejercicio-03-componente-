import React from 'react';

const NombreInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" value={value} onChange={onChange} />
    </div>
  );
};

export default NombreInput;
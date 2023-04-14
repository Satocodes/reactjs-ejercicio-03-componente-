import React from 'react';

const PasswordInput = ({ value, onChange }) => {
  return (
    <div>
     
      <p>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={value} onChange={onChange} />
      </p>
      <p>
      <label htmlFor="comprobarpassword">Comprobar Password:</label>
      <input type="password" id="comprobarpassword" value={value} onChange={onChange} />
      </p>

    </div>
  );
};

export default PasswordInput;
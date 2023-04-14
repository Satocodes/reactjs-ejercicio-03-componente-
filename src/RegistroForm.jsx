import React, { useState } from 'react';
import NombreInput from './componentes/NombreInput';
import ApellidoInput from './componentes/ApellidoInput';
import EmailInput from './componentes/EmailInput';
import TelefonoInput from './componentes/TelefonoInput';
import PasswordInput from './componentes/PasswordInput';


const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviamos el formulario');
  };

  return (
    <form onSubmit={handleSubmit}>
      <NombreInput value={nombre} onChange={handleNombreChange} />
      <ApellidoInput value={apellido} onChange={handleApellidoChange} />
      <EmailInput value={email} onChange={handleEmailChange} />
      <TelefonoInput value={telefono} onChange={handleTelefonoChange} />
      <PasswordInput value={password} onChange={handlePasswordChange} />
     <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistroForm;
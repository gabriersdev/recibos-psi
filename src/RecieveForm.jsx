// import { useState } from 'react';
import Button from '@mui/material/Button';

import FieldsetPatient from './FieldsetPatient';
import FieldsetPsychologist from './FieldsetPsychologist';
import FieldsetRecieve from './FieldsetRecieve';

// import $ from 'jquery';
import 'jquery-mask-plugin';
import Intermediate from './Intermediate';

  // Recieve
const handleSubmit = (event) => { 
  event.preventDefault();
  // Aqui você pode lidar com a submissão do formulário
  console.log(event.target);

  // TODO - Validar campos de CPF
  // TODO - Validar campos required
  // TODO - Validar campos de valor
  // TODO - Validar campo de email
  // TODO - Validar campo de seleção de dias de sessão

  if (Intermediate.getSelectDays().length > 0) {
    console.log('Dias selecionados:', Intermediate.getSelectDays());
  }
}

const required = true;

export default function RecieveForm(){
  return (
    <form
      onSubmit={handleSubmit}
    >
      <FieldsetPsychologist required={required}/>
      <FieldsetPatient required={required}/>
      <FieldsetRecieve/>
      <Button type='submit' variant="contained" style={{padding: '1rem', width: '25ch', marginTop: '1rem', float: 'left'}}>IMPRIMIR</Button><br/>
    </form>
  )
}
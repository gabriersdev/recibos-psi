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
      <FieldsetRecieve required={required}/>
      <Button type='submit' variant="contained" style={{padding: '1rem', width: '25ch', marginTop: '1rem', float: 'left'}}>IMPRIMIR</Button><br/>
    </form>
  )
}
// import { useState } from 'react';
import Button from '@mui/material/Button';

import FieldsetPatient from './FieldsetPatient';
import FieldsetPsychologist from './FieldsetPsychologist';
// import FieldsetRecieve from './FieldsetRecieve';

// import $ from 'jquery';
import 'jquery-mask-plugin';
import Intermediate from './Intermediate';

import Util from './Util';

  // Recieve
const handleSubmit = (event) => { 
  event.preventDefault();
  // Aqui você pode lidar com a submissão do formulário
  console.log('Formulário enviado');

  const data = {
    "psi-name": null,
    "psi-email": null,
    "psi-CPF": null,
    "psi-CRP": null,
    "psi-atuacao": null,
    "psi-tel": null,
    "psi-endereco": null,
    "psi-nickredes": null,
    "pat-name": null,
    "pat-CPF": null,
    "pat-vr-sessao": null,
    "pat-days": null
  }

  // Preencher o objeto data com os valores dos campos do formulário
  for (const key in data) {
    try {
      if (key !== 'pat-days') data[key] = document.getElementById(key).value;
      else {
        if (Intermediate.getSelectDays().length > 0) {
          data["pat-days"] = Intermediate.getSelectDays();
        } else {
          data["pat-days"] = null;
        }
      }
    } catch (error) {
      data[key] = null;
    }
  }

  // Verifica se todos os campos estão preenchidos
  const notFilled = [];
  for (const key in data) {
    if (data[key] === null || data[key] === '') {
      notFilled.push(key);
    }
  }

  if (notFilled.length > 0) {
    alert(`Campos não preenchidos: ${notFilled.join(', ')}!`);
    return;
  }

  // TODO - Validar campos de CPF
  if (data["psi-CPF"].match(/\d/g).length !== 11) {
    alert('CPF do psicólogo inválido');
    return;
  } else if (data["pat-CPF"].match(/\d/g).length !== 11) {
    alert('CPF do paciente inválido');
    return;
  }

  // TODO - Validar campos de valor
  if (data["pat-vr-sessao"].match(/\d/g).length < 3) {
    alert('Valor da sessão inválido');
    return;
  } else if (Util.BRLToFloat(data["pat-vr-sessao"]) <= 0) {
    alert('Valor da sessão não pode ser menor ou igual a zero');
    return;
  }

  // TODO - Validar campo de email
  if (!Util.validaEmail(data["psi-email"])) {
    alert('Email do psicólogo inválido');
    return;
  }

  // TODO - Validar campo de seleção de dias de sessão
  if (data["pat-days"].length === 0) {
    alert('Selecione ao menos um dia para a sessão');
    return;
  } 
  // TODO - Ordenar e verificar se dias de sessão fazem sentido
}

const required = true;

export default function RecieveForm(){
  return (
    <form
      onSubmit={handleSubmit}
    >
      <FieldsetPsychologist required={required}/>
      <FieldsetPatient required={required}/>
      {/* <FieldsetRecieve/> */}
      <Button type='submit' variant="contained" style={{padding: '1rem', width: '25ch', marginTop: '1rem', float: 'left'}}>IMPRIMIR</Button><br/>
    </form>
  )
}
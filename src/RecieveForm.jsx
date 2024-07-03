// import { useState } from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'

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
    "pat-days": null,
    "pat-mes-sessao": null,
    "pat-ano-sessao": null
  }

  const altName = {
    "psi-name": "Nome do psicólogo",
    "psi-email": "Email do psicólogo",
    "psi-CPF": "CPF do psicólogo",
    "psi-CRP": "CRP do psicólogo",
    "psi-atuacao": "Área de atuação do psicólogo",
    "psi-tel": "Telefone do psicólogo",
    "psi-endereco": "Endereço do psicólogo",
    "psi-nickredes": "Redes sociais do psicólogo",
    "pat-name": "Nome do paciente",
    "pat-CPF": "CPF do paciente",
    "pat-vr-sessao": "Valor da sessão do paciente",
    "pat-days": "Dias de sessão do paciente",
    "pat-mes-sessao": "Mês da(s) sessão(s) do paciente",
    "pat-ano-sessao": "Ano da(s) sessão(s) do paciente"
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
    if (data[key] === null || data[key] === '' || data[key] === undefined) {
      notFilled.push(altName[key] || key);
    }
  }

  if (notFilled.length == 1) {
    Swal.fire({
      icon: 'error',
      title: `${notFilled.join(', ')} não foi preenchido.`,
      text: `Preencha o campo primeiro`
    });
    return;
  } else if (notFilled.length > 1) {
    Swal.fire({
      icon: 'error',
      title: `${notFilled.join(', ')} não foram preenchidos.`,
      text: `Preencha os campos primeiro`
    });
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
// import { useState } from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'

import FieldsetPatient from './FieldsetPatient';
import FieldsetPsychologist from './FieldsetPsychologist';

// import $ from 'jquery';
import 'jquery-mask-plugin';
import Intermediate from '../class/Intermediate';

import Util from '../class/Util';
import moment from 'moment';

import Psicologo from '../class/Psicologo';
import Paciente from '../class/Paciente';
import Recibo from '../class/Recibo';

import pdfMake from "pdfmake/build/pdfmake";

pdfMake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },
}

  // Recieve
const handleSubmit = (event) => { 
  event.preventDefault();
  // Aqui você pode lidar com a submissão do formulário
  
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
      if (!['pat-days', 'pat-mes-sessao'].includes(key)) data[key] = document.getElementById(key).value;
      else if (key === 'pat-mes-sessao') {
        if (Intermediate.getMesSessao() >= 0) data[key] = Intermediate.getMesSessao();
        else data[key] = null;
      } 
      else {
        if (Intermediate.getSelectDays().length > 0) data["pat-days"] = Intermediate.getSelectDays();
        else data["pat-days"] = null;
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
  
  // Validar campos de CPF
  if (data["psi-CPF"].match(/\d/g).length !== 11) {
    alert('CPF do psicólogo inválido');
    return;
  } else if (data["pat-CPF"].match(/\d/g).length !== 11) {
    alert('CPF do paciente inválido');
    return;
  }

  // Validar campos de valor
  if (data["pat-vr-sessao"].match(/\d/g).length < 3) {
    alert('Valor da sessão inválido');
    return;
  } else if (Util.BRLToFloat(data["pat-vr-sessao"]) <= 0) {
    alert('Valor da sessão não pode ser menor ou igual a zero');
    return;
  }

  // Validar campo de email
  if (!Util.validaEmail(data["psi-email"])) {
    alert('Email do psicólogo inválido');
    return;
  }

  // Validar campo de seleção de dias de sessão
  if (data["pat-days"].length === 0) {
    alert('Selecione ao menos um dia para a sessão');
    return;
  } else {
    data["pat-days"] = data["pat-days"].map((d) => `${d.value}/${data["pat-mes-sessao"]}/${data["pat-ano-sessao"]}`);
  }

  Intermediate.setValorTotal(Util.transformaMoeda(Util.BRLToFloat(data["pat-vr-sessao"]) * data["pat-days"].length));
  document.getElementById('valor-tot').textContent = Intermediate.getValorTotal();
  document.querySelector('#modal-form-recibo').showModal();

  // TODO - Organizar código e responsabilidade
  // Submit form modal
  const form = document.querySelector('#modal-form-recibo form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const psicologo = new Psicologo(data["psi-name"], data["psi-CPF"], data["psi-CRP"], data["psi-atuacao"], 'Psicólogo', {completo: data["psi-endereco"]}, {email: data["psi-email"], telefone: data["psi-tel"], nickRede: data["psi-nickredes"]});

    // Salvando localmente dados do piscologo
    try {
      let saved = {};

      try {
        // saved = JSON.parse(localStorage.getItem('recibos-psi'));
      } catch (error) {
        // localStorage.setItem('recibos-psi', JSON.stringify({}));
        // saved = JSON.parse(localStorage.getItem('recibos-psi'));
      }

      if (saved && typeof saved === "object") {
        saved.psychologist = psicologo.toJSON();
        console.log(saved.psychologist);
      }

      localStorage.setItem('recibos-psi', JSON.stringify(saved))

    } catch (error) {
      alert('Falha ao salvar localmente os dados do psicólogo');
      throw new Error('Falha ao salvar localmente os dados do psicólogo. ' + error);
    }

    const paciente = new Paciente(data["pat-name"], data["pat-CPF"], Util.BRLToFloat(data["pat-vr-sessao"]), data["pat-days"]);

    const recibo = new Recibo(paciente, Intermediate.getValorTotal(), new moment(), psicologo);

    // TODO - Set fonts PDK Make
    // DOC https://pdfmake.github.io/docs/0.1/fonts/custom-fonts-client-side/url/

    // Gerar PDF do recibo
    pdfMake.createPdf({
      content: recibo.renderRecibo(),
      
      // Styles
      styles: {
        default: {
          fontSize: 16,
          bold: false
        },
        header: {
          fontSize: 22,
          bold: true
        },
      },

      defaultStyle: {
        font: 'Roboto'
      }
    }).download(`Recibo ${paciente.getCPF().replace(/\D/gi, '') || '#'} - ${Util.transformaData(recibo.getDataEmissao(), 's')} .pdf`);
  })
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
      <Button type='submit' variant="contained" style={{padding: '1rem', width: '25ch', marginTop: '1rem', float: 'left'}}>ENVIAR</Button><br/>
    </form>
  )
}
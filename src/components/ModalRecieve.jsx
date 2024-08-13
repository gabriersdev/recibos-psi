import '../styles/ModalRecieve.css';
import Util from '../class/Util';
import Intermediate from '../class/Intermediate';

import { useState } from 'react';
import { Button, Input } from '@mui/material';
import $ from 'jquery';
import 'jquery-mask-plugin';

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

function ModalRecieve() {  
  const [valorTotal, setValorTotal] = useState('');
  
  $(() => {
    $('#rec-valor-tot').mask('#.###.##0,00', { reverse: true });
  })
  
  const handleButton = () => {
    const valor = $('#rec-valor-tot').val();
    if (valor) {
      Intermediate.setValorTotal(Util.transformaMoeda(Util.BRLToFloat(valor)))
      $('#valor-tot').text(Intermediate.getValorTotal());
    }
  }

  const handleSubmit = (e) => {
    const data = Intermediate.getData();
    e.preventDefault();
    
    const psicologo = new Psicologo(data["psi-name"], data["psi-CPF"], data["psi-CRP"], data["psi-atuacao"], 'Psicólogo', {completo: data["psi-endereco"]}, {email: data["psi-email"], telefone: data["psi-tel"], nickRede: data["psi-nickredes"]});

    // Salvando localmente dados do piscologo
    try {
      let saved = {};

      try {
        saved = JSON.parse(localStorage.getItem('recibos-psi'));
      } catch (error) {
        localStorage.setItem('recibos-psi', JSON.stringify({}));
        saved = JSON.parse(localStorage.getItem('recibos-psi'));
      }

      if (saved && typeof saved === "object") {
        saved.psychologist = psicologo.toSave();
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
    }).download(`Recibo ${paciente.getCPF().replace(/\D/gi, '') || '#'} - ${Util.transformaData(recibo.getDataEmissao(), 's')}.pdf`);
  }

  return (
    <dialog id='modal-form-recibo'>
      <form style={{marginBottom: '2rem', textAlign: 'left'}} onSubmit={handleSubmit}>
        <h2>Recibo</h2>
        <div>
          <span><b>Valor total:&nbsp;</b><span id='valor-tot'></span></span>
        </div><br/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.25rem'}}>
          <Input id="rec-valor-tot" label="Valor total" variant="outlined" value={valorTotal} onInput={e => setValorTotal(e.target.value)} style={{width: '75ch'}} required={false} placeholder='Novo valor total'/>
          <Button onClick={handleButton}>Alterar</Button>
        </div><br />
        <Button type='submit' variant="contained" style={{padding: '1rem', width: '25ch', marginTop: '1rem', float: 'left'}}>IMPRIMIR</Button>
        <Button type='button' variant="outlined" style={{padding: '1rem', width: '25ch', marginTop: '1rem', marginLeft: '1rem', float: 'left'}} onClick={(e) => e.target.closest('dialog').close()}>FECHAR</Button>
      </form>
    </dialog>
  );
}

export default ModalRecieve;
import '../styles/ModalRecieve.css';
import Util from '../class/Util';
import Intermediate from '../class/Intermediate';

import { useState } from 'react';
import { Button, Input } from '@mui/material';
import $ from 'jquery';
import 'jquery-mask-plugin';

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

  return (
    <dialog id='modal-form-recibo'>
      <form style={{marginBottom: '2rem', textAlign: 'left'}}>
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
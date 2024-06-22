import { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import $ from 'jquery';
import 'jquery-mask-plugin';

const required = true;

const handleSubmit = (event) => { 
  event.preventDefault();
  // Aqui você pode lidar com a submissão do formulário
  console.log({ name });
}

function ReciveForm() {  
  const [valorTotal, setValorTotal] = useState('');

  $(() => {
    $('#rec-valor-tot').mask('##.##0,00', { reverse: true });
  })

  return (
    <div style={{textAlign: 'left'}}>
      <h2 style={{marginTop: '2rem'}}>Recibo</h2>
      <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch', mt: 1.75},
        display: 'flex', flexWrap: 'wrap'
      }}
      // onvalidate="on"
      autoComplete="off"
      >
        <TextField id="rec-valor-tot" label="Valor total" variant="outlined" value={valorTotal} onInput={e => setValorTotal(e.target.value)} style={{width: '75ch'}} required={required}/>
        <Button type='button' variant="contained" style={{padding: '1rem'}}>IMPRIMIR</Button><br/>
      </Box>
      <div>
      </div>
    </div>
  );
}

export default ReciveForm;
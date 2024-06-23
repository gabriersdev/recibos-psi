import { useState } from 'react';
import { Box } from '@mui/material';
// import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

import $ from 'jquery';
import 'jquery-mask-plugin';

function FieldsetRecieve(attr) {  
  const [valorTotal, setValorTotal] = useState('');

  $(() => {
    $('#rec-valor-tot').mask('#.###.##0,00', { reverse: true });
  })

  return (
    <fieldset style={{textAlign: 'left'}}>
      <h2 style={{marginBottom: '2rem'}}>Recibo</h2>
      <Box
      sx={{
        '& > :not(style)': { width: '25ch' },
        display: 'flex', flexWrap: 'wrap',
        marginBottom: '0.25rem'
      }}
      autoComplete="off"
      >
        <TextField id="rec-valor-tot" label="Valor total" variant="outlined" value={valorTotal} onInput={e => setValorTotal(e.target.value)} style={{width: '75ch'}} required={attr.required}/>
      </Box>
      <div>
      </div>
    </fieldset>
  );
}

export default FieldsetRecieve;
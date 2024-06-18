import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from './Util';

function ReciveForm() {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const required = true;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a submissão do formulário
    console.log({ name, CPF });
  };

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
        <TextField id="pat-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={required}/>
        <TextField id="pat-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        <Button type='submit' variant="contained" style={{padding: '1rem'}}>CONFIRMAR</Button><br/>
      </Box>
    </div>
  );
}

export default ReciveForm;
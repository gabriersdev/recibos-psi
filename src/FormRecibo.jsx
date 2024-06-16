import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from './Util';

// Imports para Autocomplete
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";

const fakeDataFromServer = [
  { key: 0, value: "EX 1" },
  { key: 1, value: "EX 2" }
];

function ReciveForm() {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const required = true;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a submissão do formulário
    console.log({ name, CPF });
  };
  
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // here goes your fetch call
    // when response arrives -
    setOptions(fakeDataFromServer);
  }, []);

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
      onvalidate="on"
      autoComplete="off"
      >
        <Autocomplete
          multiple
          id="tags-standard"
          options={options}
          getOptionLabel={(option) => option.value}
          style={{ width: 300 }}
          renderInput={(params, index) => (
            <TextField {...params} key={index} label="Example" variant="outlined" />
          )}
        />
        <TextField id="pat-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={required}/>
        <TextField id="pat-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        <Button type='submit' variant="contained" style={{padding: '1rem'}}>CONFIRMAR</Button><br required={required}/>
      </Box>
    </div>
  );
}

export default ReciveForm;
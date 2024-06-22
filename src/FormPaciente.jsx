import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from './Util';

import $ from "jquery";
import 'jquery-mask-plugin'; 


// Imports para Autocomplete
import moment from "moment";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";

// Get days of the month
const days = Array.from({ length: moment().daysInMonth() }, (_, i) => i + 1);
const optionsAutocomplete = days.map((day) => { return { key: day, value: `${('0' + day).slice(-2)}/${('0' + (moment().month() + 1)).slice(-2)}` } });
let selectedDays = [];

function PatientForm() {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const required = true;
  
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // here goes your fetch call
    // when response arrives -
    setOptions(optionsAutocomplete);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a submissão do formulário
    console.log(selectedDays);
    if (selectedDays.length > 0) {
      console.log({ name, CPF });
      console.log('Dias selecionados:', selectedDays);
    }
  };
  
  $(() => {
    $('#pat-CPF').mask('000.000.000-00');
  });

  return (
    <div style={{textAlign: 'left'}}>
      <h2 style={{marginTop: '2rem'}}>Paciente</h2>
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
        {/* TODO - Oferecer autocomplete com dados recuperados de pacientes */}
        <TextField id="pat-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={required}/>
        <TextField id="pat-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        {/* Selec. dias do mês em que houveram sessões */}
        <Autocomplete
          multiple
          id="pat-days"
          onChange={(event, newValue) => { newValue.length == 0 ? document.querySelector('#pat-days').setCustomValidity('Selecione ao menos um dia') : document.querySelector('#pat-days').setCustomValidity(''); event.preventDefault(); selectedDays = newValue;}}
          options={options}
          getOptionLabel={(option) => option.value}
          isOptionEqualToValue={(option, value) => option.key === value.key}
          style={{ width: 300 }}
          renderInput={(params, index) => (
            <TextField {...params} key={index} label="Dias das sessões*" variant="outlined" />
          )}
        />
        {/* <Button type='submit' variant="contained" style={{padding: '1rem'}}>CONFIRMAR</Button><br/> */}
      </Box>
    </div>
  );
}

export default PatientForm;
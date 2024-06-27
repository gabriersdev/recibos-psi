import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Util from './Util';

import $ from "jquery";
import 'jquery-mask-plugin'; 

// Imports para Autocomplete
import moment from "moment";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Intermediate from './Intermediate';

// Get days of the month
const days = Array.from({ length: moment().daysInMonth() }, (_, i) => i + 1);
const optionsAutocomplete = days.map((day) => { return { key: day, value: `${('0' + day).slice(-2)}/${('0' + (moment().month() + 1)).slice(-2)}` } });

function FieldsetPatient(attr) {
  const [name, setName] = useState('Roberto');
  const [CPF, setCPF] = useState('123.456.789-09');
  const [valorSessao, setValorSessao] = useState('1.000,00');
  
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(optionsAutocomplete);
  }, []);
  
  $(() => {
    $('#pat-CPF').mask('000.000.000-00');
    $('#pat-vr-sessao').mask('#.###.##0,00', { reverse: true });
  });

  const handleSelectDays = (event, values) => {
    if (values.length == 0) document.querySelector('#pat-days').setCustomValidity('Selecione ao menos um dia')
    else document.querySelector('#pat-days').setCustomValidity(''); event.preventDefault(); Intermediate.setSelectDays(values);
  }

  const handleValorSessao = (event) => {
    setValorSessao(event.target.value);
    Intermediate.setValorSessao(event.target.value);
  }

  return (
    <fieldset style={{textAlign: 'left'}}>
      <h2>Paciente</h2>
      <Box
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch', mt: 1.75},
        display: 'flex', flexWrap: 'wrap'
      }}
      autoComplete="off"
      >
        {/* TODO - Oferecer autocomplete com dados recuperados de pacientes */}
        <TextField id="pat-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={attr.required}/>
        <TextField id="pat-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={attr.required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        <TextField id="pat-vr-sessao" label="Valor sessão" variant="outlined" value={valorSessao} onInput={handleValorSessao} required={attr.required}/>
        <Autocomplete
          multiple
          id="pat-days"
          onChange={(event, values) => handleSelectDays(event, values)}
          options={options}
          getOptionLabel={(option) => option.value}
          isOptionEqualToValue={(option, value) => option.key === value.key}
          style={{ width: 300 }}
          renderInput={(params, index) => (
            <TextField {...params} key={index} label="Dias das sessões*" variant="outlined" />
          )}
        />
      </Box>
    </fieldset>
  );
}

export default FieldsetPatient;
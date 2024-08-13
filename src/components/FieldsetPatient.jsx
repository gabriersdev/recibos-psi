import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Util from '../class/Util';

import $ from "jquery";
import 'jquery-mask-plugin'; 

// Imports para Autocomplete
import moment from "moment";
import { useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Intermediate from '../class/Intermediate';

// Imports para Select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Get days of the month
const days = Array.from({ length: moment().daysInMonth() }, (_, i) => i + 1);
const optionsAutocomplete = days.map((day) => { return { key: day, value: `${('0' + day).slice(-2)}` } });

function FieldsetPatient(attr) {
  const Int = new Intermediate();

  const [name, setName] = useState(Int.getValue('patient', 'name'));
  const [CPF, setCPF] = useState(Int.getValue('patient', 'CPF'));
  const [valorSessao, setValorSessao] = useState(Int.getValue('patient', 'valorSessao'));
  const [options, setOptions] = useState([]);
  const [mes, setMes] = useState(moment().get('month'));
  const [ano, setAno] = useState(moment().get('year'));
  
  // Set valor do mês na Intermediate
  Intermediate.setMesSessao(mes);

  useEffect(() => {
    setOptions(optionsAutocomplete);
  }, []);

  const handleSelectDays = (event, values) => {
    if (values.length == 0) document.querySelector('#pat-days').setCustomValidity('Selecione ao menos um dia')
    else document.querySelector('#pat-days').setCustomValidity(''); event.preventDefault(); Intermediate.setSelectDays(values);
  }

  const handleValorSessao = (event) => {
    setValorSessao(event.target.value);
    Intermediate.setValorSessao(event.target.value);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const input = document.querySelector('#pat-mes-sessao').closest('div').nextElementSibling;
    setMes(value);
    if (value.length == 0) input.setCustomValidity('Selecione um mês')
    else input.setCustomValidity(''); event.preventDefault(); Intermediate.setMesSessao(value);
  };
  
  $(() => {
    $('#pat-CPF').mask('000.000.000-00');
    $('#pat-vr-sessao').mask('#.###.##0,00', { reverse: true });
  });

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

        {/* TODO - Recuperar mês selecionado */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="pat-mes-sessao-label">Mês*</InputLabel>
        <Select
          labelId="pat-mes-sessao-label"
          id="pat-mes-sessao"
          value={mes}
          label="pat-mes-sessao"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value="0">Janeiro</MenuItem>
          <MenuItem value="1">Fevereiro</MenuItem>
          <MenuItem value="2">Março</MenuItem>
          <MenuItem value="3">Abril</MenuItem>
          <MenuItem value="4">Maio</MenuItem>
          <MenuItem value="5">Junho</MenuItem>
          <MenuItem value="6">Julho</MenuItem>
          <MenuItem value="7">Agosto</MenuItem>
          <MenuItem value="8">Setembro</MenuItem>
          <MenuItem value="9">Outubro</MenuItem>
          <MenuItem value="10">Novembro</MenuItem>
          <MenuItem value="11">Dezembro</MenuItem>
        </Select>
      </FormControl>
      <TextField id="pat-ano-sessao" label="Ano" variant="outlined" value={ano} onInput={e => setAno(e.target.value)} required={attr.required}/>
      </Box>
    </fieldset>
  );
}

export default FieldsetPatient;
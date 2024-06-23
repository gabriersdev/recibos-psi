import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Util from './Util';

import $ from "jquery";
import 'jquery-mask-plugin'; 

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Aqui você pode lidar com a submissão do formulário
  //   console.log({ name, email, phone, atuacao, CRP, CPF, endereco, nickRedes});
  // };

const FieldsetPsychologist = (attr) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [atuacao, setAtuacao] = useState('Psicólogo clínico');
  const [CRP, setCRP] = useState('');
  const [CPF, setCPF] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nickRedes, setNickRedes] = useState('');

  $(() => {
    $('#psi-CPF').mask('000.000.000-00');
    $('#psi-CRP').mask('000000');
    $('#psi-tel').mask('(00) 00000-0000');
  });
  
  return (
    <fieldset style={{textAlign: 'left'}}>
      <h2>Psicólogo</h2>
      <Box
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch', mt: 1.75},
        display: 'flex', flexWrap: 'wrap'
      }}
      autoComplete="off"
      >
        <TextField id="psi-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={attr.required}/>
        <TextField id="psi-email" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} style={{width: '50ch'}} required={attr.required} onInput={e => !Util.validaEmail(e.target.value) ? e.target.setCustomValidity('E-mail informado é inválido') : e.target.setCustomValidity('') }/>
        <TextField id="psi-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={attr.required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        <TextField id="psi-CRP" label="CRP" variant="outlined" value={CRP} onChange={e => setCRP(e.target.value)} required={attr.required}/>
        <TextField id="psi-atuacao" label="Atuação" variant="outlined" value={atuacao} onChange={e => setAtuacao(e.target.value)} style={{width: '74.25ch'}} required={attr.required}/>
        <TextField id="psi-tel" label="Telefone" variant="outlined" value={phone} onChange={e => setPhone(e.target.value)} required={attr.required}/>
        <TextField id="psi-endereco" label="Endereco" variant="outlined" value={endereco} onChange={e => setEndereco(e.target.value)} style={{width: '100ch'}} required={attr.required}/>
        <TextField id="psi-nickredes" label="@ redes sociais" variant="outlined" value={nickRedes} onChange={e => setNickRedes(e.target.value)} required={attr.required}/>
      </Box>
    </fieldset>
  );
}

export default FieldsetPsychologist;
import React from 'react';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Util from '../class/Util';
import $ from "jquery";
import 'jquery-mask-plugin';
import Intermediate from '../class/Intermediate';

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // Aqui você pode lidar com a submissão do formulário
//   console.log({ name, email, phone, atuacao, CRP, CPF, endereco, nickRedes});
// };

const FieldsetPsychologist = (attr) => {
  const Int = new Intermediate();
  Int.verificarDadosSalvos();

  const [name, setName] = useState(Int.getValue('psychologist', 'name'));
  const [email, setEmail] = useState(Int.getValue('psychologist', 'email'));
  const [phone, setPhone] = useState(Int.getValue('psychologist', 'phone'));
  const [atuacao, setAtuacao] = useState(Int.getValue('psychologist', 'atuacao'));
  const [CRP, setCRP] = useState(Int.getValue('psychologist', 'CRP'));
  const [CPF, setCPF] = useState(Int.getValue('psychologist', 'CPF'));
  const [endereco, setEndereco] = useState(Int.getValue('psychologist', 'endereco'));
  const [nickRedes, setNickRedes] = useState(Int.getValue('psychologist', 'nickRedes'));

  $(() => {
    $('#psi-CPF').mask('000.000.000-00');
    $('#psi-CRP').mask('000000');
    $('#psi-tel').mask('(00) 00000-0000');
  });

  return (
    <fieldset style={{ textAlign: 'left' }}>
      <h2>Psicólogo</h2>
      <Box
        sx={{
          '& > :not(style)': { m: 0.5, mt: 1.75 },
          display: 'flex', flexWrap: 'wrap'
        }}
        autoComplete="off"
        className="width-25"
      >
        <TextField id="psi-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} className='width-75' required={attr.required} />
        <TextField id="psi-email" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} className='width-50' required={attr.required} onInput={e => !Util.validaEmail(e.target.value) ? e.target.setCustomValidity('E-mail informado é inválido') : e.target.setCustomValidity('')} />
        <TextField id="psi-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={attr.required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')} />
        <TextField id="psi-CRP" label="CRP" variant="outlined" value={CRP} onChange={e => setCRP(e.target.value)} required={attr.required} />
        <TextField id="psi-atuacao" label="Atuação" variant="outlined" value={atuacao} onChange={e => setAtuacao(e.target.value)} className='width-75' required={attr.required} />
        <TextField id="psi-tel" label="Telefone" variant="outlined" value={phone} onChange={e => setPhone(e.target.value)} required={attr.required} />
        <TextField id="psi-endereco" label="Endereco" variant="outlined" value={endereco} onChange={e => setEndereco(e.target.value)} className='width-100' required={attr.required} />
        <TextField id="psi-nickredes" label="@ redes sociais" variant="outlined" value={nickRedes} onChange={e => setNickRedes(e.target.value)} required={attr.required} />
      </Box>
    </fieldset>
  );
}

export default FieldsetPsychologist;
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from './Util';

function PsychologistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [atuacao, setAtuacao] = useState('');
  const [CRP, setCRP] = useState('');
  const [CPF, setCPF] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nickRedes, setNickRedes] = useState('Rogério');
  const required = true;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a submissão do formulário
    console.log({ name, email, phone, atuacao, CRP, CPF, endereco, nickRedes});
  };
  
  return (
    <div style={{textAlign: 'left'}}>
      <h2 style={{marginTop: '2rem'}}>Psicólogo</h2>
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
        <TextField id="psi-name" label="Nome" variant="outlined" value={name} onChange={e => setName(e.target.value)} style={{width: '75ch'}} required={required}/>
        <TextField id="psi-email" label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} style={{width: '50ch'}} required={required}/>
        <TextField id="psi-CPF" label="CPF" variant="outlined" value={CPF} onChange={e => setCPF(e.target.value)} required={required} onInput={e => !Util.validaCPF(e.target.value) ? e.target.setCustomValidity('O CPF informado não é válido') : e.target.setCustomValidity('')}/>
        <TextField id="psi-CRP" label="CRP" variant="outlined" value={CRP} onChange={e => setCRP(e.target.value)} required={required}/>
        <TextField id="psi-atuacao" label="Atuação" variant="outlined" value={atuacao} onChange={e => setAtuacao(e.target.value)} style={{width: '74.25ch'}} required={required}/>
        <TextField id="psi-tel" label="Telefone" variant="outlined" value={phone} onChange={e => setPhone(e.target.value)} required={required}/>
        <TextField id="psi-endereco" label="Endereco" variant="outlined" value={endereco} onChange={e => setEndereco(e.target.value)} style={{width: '100ch'}} required={required}/>
        <TextField id="psi-nickredes" label="@ redes sociais" variant="outlined" value={nickRedes} onChange={e => setNickRedes(e.target.value)} required={required}/>
        <Button type='submit' variant="contained" style={{padding: '1rem'}}>CONFIRMAR</Button><br required={required}/>
      </Box>
    </div>
  );
}

export default PsychologistForm;
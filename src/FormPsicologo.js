import { useState } from 'react';

function PsychologistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com a submissão do formulário
    console.log({ name, email, phone, specialty });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Telefone:
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <label>
        Especialidade:
        <input type="text" value={specialty} onChange={e => setSpecialty(e.target.value)} />
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default PsychologistForm;
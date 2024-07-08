import Recibo from './Recibo.js';
import Paciente from './Paciente.js';
import Psicologo from './Psicologo.js';

const psicologo = new Psicologo('Fulano', '123.456.789-00', '123456', 'Clínica', 'Psicólogo', {completo: 'R Jacarandá'}, {email: '#@#'});

const paciente = new Paciente('Ciclano', '987.654.321-00', 1.000, ['2021-01-01', '2021-01-02', '2021-01-03']);

const recibo = new Recibo(paciente, 1500.00, '2021-03-01', psicologo);

console.log(recibo.renderRecibo());
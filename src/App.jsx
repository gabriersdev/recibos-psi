import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import PsychologistForm from './FormPsicologo';
import PatientForm from './FormPaciente';
import ReceiveForm from './FormRecibo';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Pretendard"',
      '-apple-system',
      '"Helvetica"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider  theme={theme}>
        <h1 style={{textAlign: 'left'}}>Gerador de Recibo</h1>
        <PsychologistForm />
        <PatientForm />
        <ReceiveForm />
      </ThemeProvider>
    </Box>
  )
}

export default App

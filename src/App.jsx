import './styles/App.css'
import RecieveForm from './components/RecieveForm';
import ModalRecieve from './components/ModalRecieve';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

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
        <RecieveForm></RecieveForm>
        <ModalRecieve></ModalRecieve>
      </ThemeProvider>
    </Box>
  )
}

export default App

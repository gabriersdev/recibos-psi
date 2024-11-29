import {createTheme, ThemeProvider} from "@mui/material/styles";
import Box from "@mui/material/Box";
import React, {lazy} from "react";

const RecieveForm = lazy(() => import('./RecieveForm'));
const ModalRecieve = lazy(() => import('./ModalRecieve'));

const Home = () => {
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

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <h1 style={{textAlign: 'left'}}>Gerador de Recibo</h1>
        <RecieveForm></RecieveForm>
        <ModalRecieve></ModalRecieve>
      </ThemeProvider>
    </Box>
  )
}

export default Home
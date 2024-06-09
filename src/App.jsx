import './App.css'
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


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

const fakeDataFromServer = [
  { key: 0, value: "EX 1" },
  { key: 1, value: "EX 2" }
];

function App() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // here goes your fetch call
    // when response arrives -
    setOptions(fakeDataFromServer);
  }, []);

  return (
    <Box>
      <ThemeProvider  theme={theme}>
        <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div><br/>
        <Button variant="contained">Hello world</Button><br/>
        <TextField id="standard-basic" label="Standard" variant="standard"/>
        <Autocomplete
          multiple
          id="tags-standard"
          options={options}
          getOptionLabel={(option) => option.value}
          style={{ width: 300 }}
          renderInput={(params, index) => (
            <TextField {...params} key={index} label="Example" variant="outlined" />
          )}
        />
      </ThemeProvider>
    </Box>
  )
}

export default App

import Button from '@mui/material/Button';

function ReciveForm() {  
  return (
    <div style={{textAlign: 'left'}}>
      <h2 style={{marginTop: '2rem'}}>Recibo</h2>
      <div>
        {/* Conteúdo do recibo */}
      </div>
      <Button type='button' variant="contained" style={{padding: '1rem'}}>IMPRIMIR</Button><br/>
    </div>
  );
}

export default ReciveForm;
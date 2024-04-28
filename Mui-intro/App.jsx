import { Button, Typography } from '@mui/material'
import './App.css'


function App() {


  return (
    <div className='App' style={{color: "blue"}}>
      <Typography variant="myVariant">This is my app</Typography>
      <Typography variant='h6'>Hit the like button! </Typography>
      <Typography sx={{color: 'myCustomColor.superLight'}}>Hit the like button! </Typography>
      <Button sx={{ p: 2}} variant='contained' color='secondary'> Hello from MUI v5</Button>
    </div>
  )
}

export default App

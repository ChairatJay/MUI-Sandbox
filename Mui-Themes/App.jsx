import * as React from "react";
import { Button, createTheme, Paper, ThemeProvider, Typography } from "@mui/material"
import { orange,red } from "@mui/material/colors";
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  const theme = createTheme({
    spacing: 10,
    palette: {
      mode: "dark",
      // primary: {
      // main: orange[500]
      // }
      customRibRed: {
        main: red[400],
        superDark: red[800],
        superLight: red[100]
      }
    },
    typography: {
      h3: {
        fontSize: "5rem"
      },
      myVariant: {
        fontSize: "3rem"
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h3">Theming Example</Typography>
        <Typography sx={{ color: 'customRibRed.superDark'}} >Hello Codesandbox</Typography>
        <h3>Start editing to see some magic happen!</h3>
        <Typography variant="myVariant" sx={{ color: "customRidRed.superLight", m: 3, p: 2 }}
        >
          This is myVariant
        </Typography>
      </div>
      <Button variant="contained" color="secondary">hi</Button>
    </ThemeProvider>
  )
}

export default App

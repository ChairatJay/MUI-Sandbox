import * as React from "react";
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

import './App.css'
const test = true;

function App() {
  return (
    <>
      <Button sx={[
        {
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500
        }
      },
        {
          m: 4,
          border: 5,
          borderColor: "secondary.main",
          "&.MuiButton-root": {
            height: "100px"
          }
        },
        test && {
          border: 10,
          borderColor: "primary.main",
        }
      ]}
        variant="contained"
      >
        Button 1
      </Button >
      <Button variant="contained">Button 2</Button>
    </>
  )
}

export default App

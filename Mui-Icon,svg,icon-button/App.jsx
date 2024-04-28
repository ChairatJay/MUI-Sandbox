import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import  Stack  from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

function App() {
  
  return (
    <Stack direction="row" alignItem="center" spacing={2}>
      <DeleteIcon color="primay" fontSize="large"/>
      <DeleteOutlineOutlinedIcon />
      <IconButton size="large" color="primary">
        <Delete fontSize="small" sx={{ color: "red" }} />
      </IconButton>
    </Stack>
  );
}

export default App

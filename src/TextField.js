import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Ім'я" variant="outlined" />
      <TextField id="outlined-basic" label="Телефон" variant="outlined" />
      <TextField id="outlined-basic" label="Ел. пошта" variant="outlined" />
      <Button variant="contained">Надіслати</Button>
    </Box>
  );
}

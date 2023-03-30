import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Applay from "./Applay";
function applay(event) {
  console.log("hello cat");
}

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" display="block">
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white" }}
        onClick={applay}
      >
        Записатися
      </Button>
    </Stack>
  );
}

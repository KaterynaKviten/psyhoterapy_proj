import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" display="block">
      <Button variant="contained" color="primary">
        Записатися
      </Button>
    </Stack>
  );
}

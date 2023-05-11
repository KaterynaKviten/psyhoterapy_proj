import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import Applay from "./Applay";
import ModalContact from "./ModalContact";
// import { Spa } from "@mui/icons-material";
// import Applay from "./Applay";
// function applay(event) {
//   console.log("hello cat");
// }

export default function BasicButtons() {
  const [clickOnButton, setClickOnButton] = React.useState(false);
  return (
    <Stack spacing={2} direction="row" display="block">
      {clickOnButton ? <ModalContact /> : null}
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white" }}
        onClick={() => {
          if (clickOnButton === false) {
            setClickOnButton(true);
          } else {
            setClickOnButton(false);
          }
        }}
      >
        Записатися
      </Button>
    </Stack>
  );
}

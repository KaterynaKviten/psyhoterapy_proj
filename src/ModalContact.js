import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "./TextField";
import CloseIcon from "@mui/icons-material/Close";
// import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "1px solid #616161",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Записатися</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
              <Button onClick={handleClose} startIcon={<CloseIcon />}></Button>
            </Grid>
          </Grid>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="#616161"
          >
            Записатись на консультацію
          </Typography>

          <TextField />
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <img
            src="./girl with letter.png"
            alt="Contacts"
            style={{
              width: "25%",
              position: "absolute",
              left: "280px",
              bottom: "30px",
            }}
          ></img>
        </Box>
      </Modal>
    </div>
  );
}

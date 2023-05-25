import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import ButtonContact from "./ButtonContact";
import ModalContact from "./ModalContact";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#f2f2f2" : "#fff",
  ...theme.typography.body2,
  padding: "30px 10px 30px 10px ",
  margin: "30px 10px 10px 10px ",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box id="contactPage">
      <Grid
        container
        spacing={1}
        justifyContent="center"
        direction="row-reverse"
      >
        <Grid item sm={5}>
          <Item>
            <img
              src="./contactUs.png"
              alt="Contacts"
              style={{
                width: "100%",
                borderRadius: "3px",
              }}
            ></img>
          </Item>
        </Grid>
        <Grid item sm={4} alignItems="center">
          <Item>
            <h1>Контакти</h1>
            <p>Телефон для запису: 8050 770 07 77</p>
            <p>Можливий час прийому: з 9.00 до 20.00 (Понеділок - П'ятниця).</p>
            <p>Увага! Прийом лише за попереднім записом.</p>
            <ModalContact />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

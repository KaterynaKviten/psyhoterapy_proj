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
        spacing={2}
        justifyContent="center"
        direction="row-reverse"
      >
        <Grid item sm={6} alignItems="center">
          <Item>
            <h1>Контакти</h1>
            <p>
              Телефон для запису: 8050 770 07 77 Можливий час прийому: з 9.00 до
              20.00, з понеділка по п'ятницю. Увага! Прийом лише за попереднім
              записом.
            </p>

            <ModalContact />
          </Item>
        </Grid>

        <Grid item sm={4}>
          <Item>
            <img
              src="./lightTree.jpg"
              alt="myphoto"
              style={{
                width: "90%",
                borderRadius: "3px",
              }}
            ></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonContact from "./ButtonContact";

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
    <Box>
      <h1>Послуги</h1>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        direction="row-reverse"
      >
        <Grid item sm={4} alignItems="center">
          <Item>
            <h1>Консультація</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </li>
              <li> Excepteur sint occaecat</li>
              <li>Ut enim ad minim veniam</li>
              <li>Excepteur sint</li>
              <li>Lorem ipsum</li>
            </ul>
            <h3>Ціна: 1000 грн</h3>
            <ButtonContact />
          </Item>
        </Grid>

        <Grid item sm={4} alignItems="center">
          <Item>
            <h1>Сімейна консультація</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </li>
              <li> Excepteur sint occaecat</li>
              <li>Ut enim ad minim veniam</li>
              <li>Excepteur sint</li>
              <li>Lorem ipsum</li>
            </ul>
            <h3>Ціна: 1000 грн</h3>
            <ButtonContact />
          </Item>
        </Grid>

        <Grid item sm={4} alignItems="center">
          <Item>
            <h1>Консультація дитини</h1>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </li>
              <li> Excepteur sint occaecat</li>
              <li>Ut enim ad minim veniam</li>
              <li>Excepteur sint</li>
              <li>Lorem ipsum</li>
            </ul>
            <h3>Ціна: 1000 грн</h3>
            <ButtonContact />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
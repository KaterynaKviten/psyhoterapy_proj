import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// import Grid from "@mui/material/Grid";
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
    <Box
      id="servisePage"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignContent: "stretch",
      }}
    >
      <Item
        sx={{
          Width: "300px",
          flex: 1,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Консультація</h2>
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
        <ModalContact />
      </Item>
      <Item
        sx={{
          Width: "300px",
          flex: 1,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Сімейна консультація</h2>
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
        <ModalContact />
      </Item>
      <Item
        sx={{
          Width: "300px",
          flex: 1,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Консультація дитини</h2>
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
        <ModalContact />
      </Item>
    </Box>
  );
}

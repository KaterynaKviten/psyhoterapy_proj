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
      id="aboutmePage"
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
          width: "300px",
          flex: 1,
        }}
      >
        <h1 style={{ marginTop: 0 }}>Про мене</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
        <ModalContact />
      </Item>
      <Item>
        <img
          src="./women.jpg"
          alt="myphoto"
          style={{
            width: "300px",
            borderRadius: "3px",
          }}
        ></img>
      </Item>
    </Box>
  );
}

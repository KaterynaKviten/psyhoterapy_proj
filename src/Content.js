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
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={6} alignItems="center">
          <Item>
            <h1>Психолог Оксана</h1>
            <p>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ButtonContact />
          </Item>
        </Grid>

        <Grid item sm={4}>
          <Item>
            <img
              src="./psihologist.jpg"
              alt="psihologist"
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

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "normal",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item marginLeft={2} sm={8}>
          <Item>
            <h2
              style={{
                backgroundColor: "#bacbeb",
              }}
            >
              Психолог Оксана
            </h2>
            <p
              style={{
                backgroundColor: "#bacbeb",
              }}
            >
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Item>
        </Grid>
        <Grid item mt={2} sm={4}>
          <Item>
            <img
              src="./women.jpg"
              alt="myphoto"
              style={{
                width: "90%",
              }}
            ></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

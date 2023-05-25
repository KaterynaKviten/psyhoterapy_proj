import "./App.css";
import Menu from "./Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Content from "./Content";
import AboutMe from "./AboutMe";
import Service from "./Service";
import Contact from "./Contact";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51a5b4",
    },
    secondary: {
      main: "#fefefe",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <header>
            <Menu color="primary" />
          </header>
        </div>

        <div
          className="cont"
          style={{
            width: "90%",
            margin: "30px 10px 10px 10px ",
            display: "inline-flex",
            backgroundColor: "#d9d9d9",
            borderRadius: "10px",
          }}
        >
          <main>
            <Content />
            <AboutMe />
            <Service />
            <Contact />
          </main>
          <Fab
            component="a"
            href="#topMenu"
            variant="circular"
            aria-label="Scroll to top"
            size="small"
            sx={{
              position: "fixed",
              bottom: "30px",
              right: "10px",
            }}
          >
            <ArrowUpwardIcon
              sx={{
                color: "#51a5b4",
              }}
            />
          </Fab>
        </div>

        <footer>
          Coded by K.S 🤍 and is
          <a href="https://github.com/KaterynaKviten" target="blank">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

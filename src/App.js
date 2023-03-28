import "./App.css";
import Menu from "./Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Content from "./Content";
import AboutMe from "./AboutMe";
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
          </main>
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

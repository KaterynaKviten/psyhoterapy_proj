import "./App.css";
import Menu from "./Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Content from "./Content";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51a5b4",
    },
    secondary: {
      main: "#bacbeb",
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

        <main>
          <Content />
        </main>

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

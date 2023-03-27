import "./App.css";
import Menu from "./Menu";
// import lightTree from "./lightTree.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Content from "./Content";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51a5b4",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <ThemeProvider theme={theme}>
            <Menu color="primary" />
          </ThemeProvider>
        </header>

        {/* <img src={lightTree} alt="maimimg" />; */}
      </div>

      <main>
        {/* <div
          style={{
            backgroundImage: `url(${lightTree})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "500px",
            color: "bisque",
          }}
        >
          <span> Психолог</span>
          <span className="title">🤍</span>
        </div> */}
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
  );
}

export default App;

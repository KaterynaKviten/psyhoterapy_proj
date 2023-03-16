import "./App.css";
import Menu from "./Menu";
import lightTree from "./lightTree.jpg";

//import logo from "./logo.png";
//import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Menu />
        </header>
        <img src={lightTree} alt="maimimg" />;
      </div>
      <div
        style={{
          backgroundImage: `url(${lightTree})`,
          backgroundRepeat: "no-repeat",
          width: "250px",
        }}
      >
        Hello World
      </div>
      <main>
        {" "}
        <span className="App-header">Психолог</span>
        <span className="title">🤍</span>
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

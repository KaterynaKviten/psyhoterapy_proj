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
        {/* <img src={lightTree} alt="maimimg" />; */}
      </div>

      <main>
        <div
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
        </div>
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

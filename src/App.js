import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <p>Home</p>
      <div>
        <Link to="/about">About Route</Link>
      </div>
      <div>
        <Link to="/hello">Hello Route</Link>
      </div>
      <div>
        <Link to="/nav">Navbar Route</Link>{" "}
      </div>
    </div>
  );
}

export default App;
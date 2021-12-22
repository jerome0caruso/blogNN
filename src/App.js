import NavBar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content"> 
        <Home />
      </div>
    </div>
  );
}


export default App;

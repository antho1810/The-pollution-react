import "./App.css";
import { Formulary } from "./Form";
import { Mapa } from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mapa />
      </header>
      <Formulary />
    </div>
  );
}

export default App;

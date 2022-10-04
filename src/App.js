import "./App.css";

import { Mapa } from "./components/Map";
import { Polution } from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mapa />
      </header>
        <Polution />
      
    </div>
  );
}

export default App;

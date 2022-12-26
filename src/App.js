import "./App.css";

import { Mapa } from "./components/Map";
import { Polution } from "./Form";
import { Polution2 } from "./Form/index copy";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mapa />
      </header>
      <h1>Original Polution</h1>
        <Polution />
        {/* <br />
        <h1> Copy polution</h1>
        <Polution2 /> */}
      
    </div>
  );
}

export default App;

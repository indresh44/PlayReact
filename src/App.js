import React, { useState } from "react";
import "./App.css";
import Countdown from "./component/Countdown";
import CountdownWithoutRef from "./component/CountdownWithoutRef";
import FileUpload from "./component/fileManipulation/FileUpload";

function App() {
  const [num, setNum] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="App">
      {/* <h1>Hello wello</h1>
      <input value={num} type="number" /> */}

      <Countdown seconds={10} isStarted={isStarted} />
      <CountdownWithoutRef />
      {isStarted ? (
        <button onClick={() => setIsStarted(!isStarted)}>Stop</button>
      ) : (
        <button onClick={() => setIsStarted(!isStarted)}>Start</button>
      )}
      <FileUpload />
    </div>
  );
}

export default App;

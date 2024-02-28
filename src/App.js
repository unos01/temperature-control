import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(0);
  const [tempcolor, setTempcolor] = useState('cold');

  const increaseTemp = () => {
    const newTemp = temp + 1;
    if (newTemp >= 20) {
      setTempcolor('hot');
    }
    setTemp(newTemp);
  }

  const decrementTemp = () => {
    const newTemp = temp - 1;
    if (newTemp < 20) {
      setTempcolor('cold');
    }
    setTemp(newTemp);
  }

  return (
    <div className={`app-container ${tempcolor}`}>
      <div className="temperature-display-container">
        <div className="temperature-display">{temp}°C</div>
      </div>
      <div className="button-container">
        {/*<button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => { setTemp(temp - 1) }}>-</button>*/}
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decrementTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;

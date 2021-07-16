import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict.js';

function Calculator() {
  const [temperature, setTemperature] = useState(0);

  function handlechange(e) {
    setTemperature(e.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in Celsius</legend>
      <input type="" onChange={handlechange} value={temperature} />
      <BoilingVerdict celsius={temperature} />
    </fieldset>
  );
}

export default Calculator;

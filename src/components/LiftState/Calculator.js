import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict.js';
import TemperatureInput from './TemperatureInput';

function Calculator() {
  const [temperature, setTemperature] = useState('');
  function handleChange(e) {
    setTemperature(e.target.value);
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={temperature}
        handleChange={handleChange}
      />
      <TemperatureInput
        scale="f"
        temperature={temperature}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Calculator;

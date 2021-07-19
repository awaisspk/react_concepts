import React, { useState } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'fehrenheit',
};

function TemperatureInput({ scale, temperature, handleChange }) {
  return (
    <fieldset>
      <legend>Enter you temperature in {scaleNames[scale]}</legend>
      <input type="number" value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;

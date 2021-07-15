import React, { useReducer, useState } from 'react';

function FlavorForm() {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handelSubmit(e) {
    alert(`your favorite fruit is ${value}`);
    e.preventDefault();
  }
  return (
    <form onSubmit={handelSubmit}>
      <label>
        Name your favorite fruit
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input onSubmit={handelSubmit} value="Submit" type="submit" />
      <input type="file" />
    </form>
  );
}

export default FlavorForm;

import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('text area rocks');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('A name was submitted ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <textarea
          id=""
          value={value}
          onChange={handleChange}
          name=""
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

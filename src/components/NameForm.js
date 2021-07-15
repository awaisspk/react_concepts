import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    alert('the value you entered: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleChange} value={value} />
        <input type="submit" value="Submit" />
      </label>
    </form>
  );
}

export default NameForm;

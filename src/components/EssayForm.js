import React, { useState } from 'react';

function EssayForm() {
  const [value, setvalue] = useState('');
  function handleChange(e) {
    setvalue(e.target.value);
  }
  function handleSubmit(e) {
    alert('the value is :' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={value} onChange={handleChange}></textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EssayForm;

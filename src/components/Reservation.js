import React, { useState } from 'react';

function Reservation() {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);
  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    const value = name === 'isGoing' ? target.checked : target.value;
    if (name === 'isGoing') {
      event.preventDefault();
      setIsGoing(value);
    }
    if (name === 'numberOfGuests') {
      event.preventDefault();
      setNumberOfGuests(value);
    }
  }
  return (
    <form>
      <label>
        Is going:
        <input
          type="checkbox"
          name="isGoing"
          onChange={handleInputChange}
          checked={isGoing}
        />
      </label>
      <br />
      <label>
        Number of reservations:
        <input
          type="number"
          name="numberOfGuests"
          onChange={handleInputChange}
          value={numberOfGuests}
        />
      </label>
    </form>
  );
}

export default Reservation;

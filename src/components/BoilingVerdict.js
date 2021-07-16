import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <h1>The water will boil</h1>;
  } else {
    return <h1>water will not boil</h1>;
  }
}

export default BoilingVerdict;

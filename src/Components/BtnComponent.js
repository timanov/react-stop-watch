import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      <button className='stopwatch-btn stopwatch-btn-gre'
      onClick={props.start}>Start</button>
    </div>
  );
}

export default BtnComponent;

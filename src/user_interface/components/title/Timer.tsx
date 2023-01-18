import React, { useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState('0000.00.00 00:00:00');

  const currentTimer = () => {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    setTimer(`${year}.${month}.${day} ${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return (
    <>
      <p
        style={{
          marginTop: '0.25rem',
          fontSize: '0.85rem',
          fontWeight: '300',
          color: '#B9BAC1',
        }}
      >
        {timer}
      </p>
    </>
  );
};

export default Timer;

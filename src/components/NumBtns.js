import React from 'react';

export default function NumBtns(p) {
  function onClick(e) {
    e.preventDefault();
    p.setInput(prevValue => prevValue + p.num);
  }

  return <button onClick={onClick}>{p.num}</button>;
}
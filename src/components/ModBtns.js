import React from 'react';

export default function ModBtns(p) {
  function onClick(e) {
    e.preventDefault();
    switch (p.mod) {
      case 'Clear':
        p.setInput((prevValue) => prevValue.substr(0, prevValue.length - 1));
        break;
      case 'AC':
        p.setInput('');
        break;
      default:
        break;
    }
  }
  return (
    <button value={p.mod} onClick={onClick}>
      {p.mod}
    </button>
  );
}

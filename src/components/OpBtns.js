import React from 'react';

export default function OpBtns(p) {
  const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
  };

  function onClick(e) {
    e.preventDefault();
    switch (p.op) {
      case '=':
        p.setMem('');
        p.setInput(
          operators[p.currentOps](
            parseFloat(p.currentMem),
            parseFloat(p.currentInput),
          ).toString(),
        );
        p.setOps('')
        break;
      case '%':
        p.setInput('');
        break;
      default:
        p.setMem(p.currentInput);
        p.setInput('');
        p.setOps(p.op);
        break;
    }
  }
  return (
    <button value={p.op} onClick={onClick}>
      {p.op}
    </button>
  );
}
